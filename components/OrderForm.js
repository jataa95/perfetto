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
    <form className="oform" onSubmit={submit}>
      <label>
        <span>Name</span>
        <input required value={form.name} onChange={set("name")} autoComplete="name" placeholder="Your name" />
      </label>
      <label>
        <span>Deliver to</span>
        <input value={form.city} onChange={set("city")} autoComplete="address-level2" placeholder="City" />
      </label>
      <label>
        <span>Piece</span>
        <select value={form.piece} onChange={set("piece")}>
          {pieces.map((p) => (
            <option key={p.slug}>{p.name}</option>
          ))}
          <option>Something custom (my own design)</option>
        </select>
      </label>
      <label>
        <span>Size</span>
        <select value={form.size} onChange={set("size")}>
          {sizes.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
      <label className="oform__full">
        <span>Colour</span>
        <input value={form.colour} onChange={set("colour")} placeholder="Any colour you like" />
      </label>
      <label className="oform__full">
        <span>Design notes</span>
        <textarea rows={3} value={form.notes} onChange={set("notes")} placeholder="Name or logo to print, cropped or full length, piping colour…" />
      </label>
      <div className="oform__foot">
        <button className="btn btn--pink" type="submit">
          <span className="btn__ico" aria-hidden="true">→</span>
          <span className="btn__lbl">Send order on WhatsApp</span>
        </button>
        <p>Opens WhatsApp with your order typed out. Nothing is sent until you press send.</p>
      </div>
    </form>
  );
}
