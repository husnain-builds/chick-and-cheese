import type { Metadata } from "next";
import Link from "next/link";
import { mealDeals } from "../lib/menu";

export const metadata: Metadata = {
  title: "Good Deals | Chick’n Cheese",
  description: "More of the good stuff for less. Find your new favorite Chick’n Cheese meal deal.",
};

export default function DealsPage() {
  return (
    <>
      <section className="page-hero deals-page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow"><span className="eyebrow-dot" /> REALLY GOOD NEWS</span>
          <h1>Big flavor.<br /><span>Little fuss.</span></h1>
          <p>The favorites, the sides and a drink or two. All together, and all for a really good price.</p>
          <a className="button button-orange" href="#deals">Find your deal <span aria-hidden="true">↓</span></a>
          {/* <span className="page-hero-mark deal-page-stamp" aria-hidden="true">GOOD<br />DEAL!</span> */}
        </div>
      </section>

      <section className="section deals-section" id="deals">
        <div className="section-heading">
          <div><span className="eyebrow"><span className="eyebrow-dot" /> THE MORE, THE MERRIER</span><h2>Good together.<br /><span>Even better value.</span></h2></div>
          <p className="heading-note">From a quick solo lunch to a proper feast with your people, there’s a deal for that.</p>
        </div>
        <div className="deals-grid">
          {mealDeals.map((deal) => (
            <article className="deal-card" key={deal.number}>
              <div className="deal-card-top"><span className="deal-number">DEAL {deal.number}</span><span className="deal-sparkle" aria-hidden="true">✳</span></div>
              <span className="deal-mark">{deal.mark}</span>
              <h3>{deal.name}</h3>
              <p>{deal.description}</p>
              <div className="deal-card-bottom"><span className="deal-price"><span>Rs.</span> {deal.price}</span><Link className="deal-arrow" href="/contact" aria-label={`Ask us about ${deal.name}`}>↗</Link></div>
            </article>
          ))}
        </div>
        <p className="menu-note deals-note">Prices in Pakistani rupees. Please ask us about availability and current deal details.</p>
      </section>
      <section className="deal-bottom-banner"><span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> GOOD FOOD IS BETTER TOGETHER</span><h2>Got your people?<br /><span>We’ve got the food.</span></h2><Link className="button button-cream" href="/contact">Find us <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}
