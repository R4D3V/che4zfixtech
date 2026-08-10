/* ============================================================
   CHE4ZFIXTECH — shared behaviour
   ============================================================ */

const WHATSAPP_NUMBER = "211922891508"; // no + or spaces, used for wa.me links

/* ---------- Mobile nav ---------- */
(function mobileNav(){
  const burger = document.querySelector(".burger");
  const panel = document.querySelector(".mobile-panel");
  if(!burger || !panel) return;
  burger.addEventListener("click", () => {
    panel.classList.toggle("open");
    const isOpen = panel.classList.contains("open");
    burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.style.overflow = isOpen ? "hidden" : "";
  });
  panel.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      panel.classList.remove("open");
      document.body.style.overflow = "";
    });
  });
})();

/* ---------- Header shadow on scroll ---------- */
(function headerScroll(){
  const header = document.querySelector(".site-header");
  if(!header) return;
  const onScroll = () => {
    if(window.scrollY > 8){
      header.style.boxShadow = "0 10px 30px -20px rgba(0,0,0,.6)";
    }else{
      header.style.boxShadow = "none";
    }
  };
  document.addEventListener("scroll", onScroll, {passive:true});
  onScroll();
})();

/* ---------- Scroll reveal ---------- */
(function scrollReveal(){
  const targets = document.querySelectorAll(".reveal, .reveal-scale");
  if(!targets.length) return;
  if(!("IntersectionObserver" in window)){
    targets.forEach(t => t.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.15, rootMargin:"0px 0px -40px 0px"});
  targets.forEach(t => io.observe(t));
})();

/* ---------- Animated counters ---------- */
(function counters(){
  const els = document.querySelectorAll("[data-count]");
  if(!els.length) return;
  const animate = (el) => {
    const end = parseFloat(el.getAttribute("data-count"));
    const suffix = el.getAttribute("data-suffix") || "";
    const decimals = el.getAttribute("data-count").includes(".") ? 1 : 0;
    const duration = 1400;
    const start = performance.now();
    function tick(now){
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = end * eased;
      el.textContent = (decimals ? val.toFixed(1) : Math.round(val)) + suffix;
      if(p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  };
  if(!("IntersectionObserver" in window)){
    els.forEach(animate);
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        animate(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.5});
  els.forEach(el => io.observe(el));
})();

/* ---------- FAQ accordion ---------- */
(function faq(){
  const items = document.querySelectorAll(".faq-item");
  items.forEach(item => {
    const q = item.querySelector(".faq-q");
    const a = item.querySelector(".faq-a");
    if(!q || !a) return;
    q.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      items.forEach(i => {
        i.classList.remove("open");
        i.querySelector(".faq-a").style.maxHeight = null;
      });
      if(!isOpen){
        item.classList.add("open");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
  });
})();

/* ---------- Ambient network canvas (hero signature element) ---------- */
(function netCanvas(){
  const canvas = document.querySelector(".net-canvas");
  if(!canvas) return;
  const ctx = canvas.getContext("2d");
  let w, h, points, raf;
  const DENSITY = 15000; // px^2 per point

  function resize(){
    w = canvas.width = canvas.offsetWidth * devicePixelRatio;
    h = canvas.height = canvas.offsetHeight * devicePixelRatio;
    const count = Math.min(70, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / DENSITY));
    points = Array.from({length: count}, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
      vy: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
    }));
  }

  function step(){
    ctx.clearRect(0, 0, w, h);
    const linkDist = 150 * devicePixelRatio;

    points.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if(p.x < 0 || p.x > w) p.vx *= -1;
      if(p.y < 0 || p.y > h) p.vy *= -1;
    });

    for(let i = 0; i < points.length; i++){
      for(let j = i + 1; j < points.length; j++){
        const a = points[i], b = points[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if(d < linkDist){
          ctx.strokeStyle = `rgba(91,139,255,${(1 - d / linkDist) * 0.28})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    points.forEach(p => {
      ctx.fillStyle = "rgba(255,178,102,.55)";
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.6 * devicePixelRatio, 0, Math.PI * 2);
      ctx.fill();
    });

    raf = requestAnimationFrame(step);
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  resize();
  if(!reduceMotion) step(); else { step(); cancelAnimationFrame(raf); }
  window.addEventListener("resize", () => { resize(); });
})();

/* ---------- WhatsApp form submission ---------- */
function submitToWhatsApp(form, buildMessage){
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const requiredOk = [...form.querySelectorAll("[required]")].every(f => f.value.trim() !== "");
    if(!requiredOk){
      form.reportValidity();
      return;
    }
    const message = buildMessage(data);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("form[data-wa-form]").forEach(form => {
    submitToWhatsApp(form, (data) => {
      const label = form.getAttribute("data-wa-label") || "New enquiry";
      let lines = [`*${label} — Che4zfixtech*`, ""];
      Object.entries(data).forEach(([key, val]) => {
        if(!val) return;
        const niceKey = key.replace(/-/g," ").replace(/\b\w/g, c => c.toUpperCase());
        lines.push(`*${niceKey}:* ${val}`);
      });
      return lines.join("\n");
    });
  });
});
