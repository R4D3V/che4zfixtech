"use client";

import { type FormEvent, type ReactNode } from "react";
import { SITE } from "@/data/site";
import { IconCheck, IconWhatsApp } from "./icons";

export interface WaField {
  name: string;
  label: string;
  type: "text" | "tel" | "select" | "textarea";
  placeholder?: string;
  required?: boolean;
  options?: string[];
}

interface WhatsAppFormProps {
  label: string;
  fields: WaField[];
  /** groups of field names rendered side by side in a .form-row */
  rows?: string[][];
  buttonText?: string;
  note?: ReactNode;
}

const niceKey = (key: string) =>
  key.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export default function WhatsAppForm({
  label,
  fields,
  rows = [],
  buttonText = "Send via WhatsApp",
  note = (
    <>
      <IconCheck /> Opens WhatsApp with your details pre-filled — nothing is
      sent until you hit send there.
    </>
  ),
}: WhatsAppFormProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const requiredOk = fields
      .filter((f) => f.required)
      .every((f) => String(data[f.name] ?? "").trim() !== "");
    if (!requiredOk) {
      form.reportValidity();
      return;
    }
    let lines = [`*${label} — Che4zfixtech*`, ""];
    fields.forEach((f) => {
      const val = data[f.name];
      if (!val) return;
      lines.push(`*${niceKey(f.name)}:* ${val}`);
    });
    const message = lines.join("\n");
    const url = `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener");
  };

  const inRow = new Set(rows.flat());
  const renderField = (f: WaField, i: number) => (
    <div className="field" key={f.name}>
      <label htmlFor={`field-${i}`}>{f.label}</label>
      {f.type === "select" ? (
        <select id={`field-${i}`} name={f.name} required={f.required}>
          {f.options?.map((opt) => (
            <option key={opt} value={opt === f.placeholder ? "" : opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : f.type === "textarea" ? (
        <textarea
          id={`field-${i}`}
          name={f.name}
          placeholder={f.placeholder}
          required={f.required}
        />
      ) : (
        <input
          id={`field-${i}`}
          name={f.name}
          type={f.type}
          placeholder={f.placeholder}
          required={f.required}
        />
      )}
    </div>
  );

  return (
    <form data-wa-form data-wa-label={label} onSubmit={handleSubmit} noValidate>
      {fields.map((f, i) => {
        if (inRow.has(f.name)) return null;
        return renderField(f, i);
      })}
      {rows.map((row) => (
        <div className="form-row" key={row.join("-")}>
          {row.map((name) => {
            const idx = fields.findIndex((f) => f.name === name);
            return idx >= 0 ? renderField(fields[idx], idx) : null;
          })}
        </div>
      ))}
      <button type="submit" className="btn btn-primary btn-block">
        <IconWhatsApp /> {buttonText}
      </button>
      <p className="form-note">{note}</p>
    </form>
  );
}