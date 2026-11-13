"use client";

import { useState } from "react";
import { pieces, whatsappLink } from "@/lib/site";

const sizes = ["XS", "S", "M", "L", "XL", "XXL", "Custom measurements"];

export default function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    piece: pieces[0].name,
    size: "M",
    colour: "",
    city: "",
    notes: "",
  });

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const details = [
      `Name: ${form.name}`,
      `Piece: ${form.piece}`,
      `Size: ${form.size}`,
      form.colour && `Colour: ${form.colour}`,
      form.city && `Delivery to: ${form.city}`,
      form.notes && `Notes: ${form.notes}`,
    ].filter(Boolean);
    const message = `Hi Perfetto! I'd like to place an order.\n\n${details.join("\n")}`;
    window.open(whatsappLink(message), "_blank", "noopener");
  };

  return (
    <form className="lineform" onSubmit={submit}>
      <label className="lineform__cell">
        <span>Name</span>
        <input required value={form.name} onChange={set("name")} autoComplete="name" />
      </label>
      <label className="lineform__cell">
        <span>Deliver to (city)</span>
        <input value={form.city} onChange={set("city")} autoComplete="address-level2" />
      </label>
      <label className="lineform__cell">
        <span>Piece</span>
        <select value={form.piece} onChange={set("piece")}>
          {pieces.map((p) => (
            <option key={p.slug}>{p.name}</option>
          ))}
          <option>Something custom (my own design)</option>
        </select>
      </label>
      <label className="lineform__cell">
        <span>Size</span>
        <select value={form.size} onChange={set("size")}>
          {sizes.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
      <label className="lineform__cell lineform__cell--full">
        <span>Colour</span>
        <input value={form.colour} onChange={set("colour")} placeholder="Any colour you like" />
      </label>
      <label className="lineform__cell lineform__cell--full lineform__cell--tall">
        <span>Design notes</span>
        <textarea rows={5} value={form.notes} onChange={set("notes")} placeholder="Name or logo to print, cropped or full length, piping colour…" />
      </label>
      <div className="lineform__foot">
        <p>Opens WhatsApp with your order typed out. Nothing is sent until you press send.</p>
        <button className="pill pill--solid" type="submit">
          Send on WhatsApp
        </button>
      </div>
    </form>
  );
}
