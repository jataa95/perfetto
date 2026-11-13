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
    <form className="order-form" onSubmit={submit}>
      <label>
        <span>Your name</span>
        <input required value={form.name} onChange={set("name")} placeholder="e.g. Ada" autoComplete="name" />
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
      <div className="order-form__row">
        <label>
          <span>Size</span>
          <select value={form.size} onChange={set("size")}>
            {sizes.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Colour</span>
          <input value={form.colour} onChange={set("colour")} placeholder="Any colour you like" />
        </label>
      </div>
      <label>
        <span>Deliver to (city)</span>
        <input value={form.city} onChange={set("city")} placeholder="Benin City, Lagos, Abuja…" autoComplete="address-level2" />
      </label>
      <label>
        <span>Design notes</span>
        <textarea rows={3} value={form.notes} onChange={set("notes")} placeholder="Name or logo to print, cropped or full length, piping colour…" />
      </label>
      <button className="btn btn--ember btn--block" type="submit">
        Send order on WhatsApp
      </button>
      <p className="order-form__fine">Opens WhatsApp with your order typed out. Nothing is sent until you press send.</p>
    </form>
  );
}
