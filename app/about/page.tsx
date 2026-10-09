import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story | Chick’n Cheese",
  description: "Good food, freshly made, with all the flavor. Get to know the Chick’n Cheese way.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero about-page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow"><span className="eyebrow-dot" /> A LITTLE ABOUT US</span>
          <h1>We’re here<br /><span>for the good food.</span></h1>
          <p>For cheesy slices, crispy bites, one more fry, and the people you’re sitting across from.</p>
        </div>
      </section>
      <section className="story-section">
        <div className="story-graphic" aria-label="Our promise: fresh flavors, crispy bites, cheesy delights"><span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> THE CHICK’N CHEESE WAY</span><p>Fresh flavors.<br />Crispy bites.<br /><span>Cheesy delights.</span></p><span className="story-star" aria-hidden="true">✳</span></div>
        <div className="story-copy"><span className="eyebrow"><span className="eyebrow-dot" /> GOOD FOOD, NO SHORTCUTS</span><h2>Make it fresh.<br /><span>Make it count.</span></h2><p>We believe the best meals start with the simplest things: good ingredients, honest flavor and a little extra care in the kitchen. That’s why every crispy bite, cheesy slice and loaded burger is made to hit the spot.</p><p>Come in for your usual, bring someone along to try something new, or just follow your cravings. However you do Chick’n Cheese, there’s something good waiting.</p><Link className="text-link" href="/menu">Get to know the menu <span aria-hidden="true">↗</span></Link></div>
      </section>
      <section className="about-values"><article><span>01 / THE FOOD</span><h3>Fresh tastes better.</h3><p>Good food is made with care and prepared fresh. You can taste the difference.</p></article><article><span>02 / THE FEELING</span><h3>Everyone’s welcome.</h3><p>The more people around the table, the better the meal. Pull up a chair.</p></article><article><span>03 / THE LITTLE THINGS</span><h3>Go on, get the fries.</h3><p>It’s not really a meal until someone suggests one more side. We get it.</p></article></section>
      <section className="visit-banner about-visit"><span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> SAVE A SEAT FOR YOUR CRAVINGS</span><h2>We’ll make<br /><span>something good.</span></h2><Link className="button button-cream" href="/contact">Come on in <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}
