import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Come Say Hello | Chick’n Cheese",
  description: "Get in touch with Chick’n Cheese and find us in Mianwali.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero contact-page-hero">
        <div className="page-hero-inner"><span className="eyebrow"><span className="eyebrow-dot" /> WE’D LOVE TO SEE YOU</span><h1>Let’s make<br /><span>a meal of it.</span></h1><p>Got a question, planning your order or just thinking about dinner? Come talk to us.</p></div>
      </section>
      <section className="contact-section">
        <div className="contact-intro"><span className="eyebrow"><span className="eyebrow-dot" /> COME AS YOU ARE</span><h2>Your appetite<br />is <span>always welcome.</span></h2><p>Whether you’ve got a go-to order or you’re still deciding, we’re here to make it a good one.</p></div>
        <div className="contact-options">
          <a className="contact-card" href="tel:+923155505187"><span className="contact-icon" aria-hidden="true">↗</span><span className="contact-card-label">GIVE US A RING</span><span className="contact-card-title">0315 550 5187</span><span className="contact-card-detail">A real person. A real good meal. <span aria-hidden="true">→</span></span></a>
          <a className="contact-card contact-whatsapp" href="https://wa.me/923155505187" target="_blank" rel="noopener noreferrer"><span className="contact-icon" aria-hidden="true">↗</span><span className="contact-card-label">PREFER A MESSAGE?</span><span className="contact-card-title">Find us on WhatsApp</span><span className="contact-card-detail">Let’s get that order started. <span aria-hidden="true">→</span></span></a>
          <div className="contact-card contact-visit"><span className="contact-card-label">FIND US</span><span className="contact-card-title">Mianwali, Pakistan</span><span className="contact-card-detail">Look out for the good food.<span aria-hidden="true">✳</span></span></div>
        </div>
      </section>
      <section className="contact-bottom"><span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> NOT SURE WHAT YOU’RE CRAVING?</span><h2>There’s no wrong<br /><span>answer on the menu.</span></h2><Link className="button button-cream" href="/menu">Find your favorite <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}
