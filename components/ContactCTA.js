import OrderForm from "./OrderForm";

export default function ContactCTA({ title = ["Got a design", "in mind?"], lead = "Tell us what you want. We'll make it and bring it to you." }) {
  return (
    <section className="cta" id="contact">
      <h2 className="mix mix--light">
        <span className="mix__heavy">{title[0]}</span>
        <span className="mix__serif">{title[1]}</span>
      </h2>
      <p className="cta__lead">{lead}</p>
      <OrderForm />
    </section>
  );
}
