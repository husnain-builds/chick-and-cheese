import type { Metadata } from "next";
import Link from "next/link";
import { menuSections } from "../lib/menu";

export const metadata: Metadata = {
  title: "Our Menu | Chick’n Cheese",
  description: "Explore the Chick’n Cheese menu: freshly made pizzas, crispy chicken, stacked burgers, wraps, sides and more.",
};

export default function MenuPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow"><span className="eyebrow-dot" /> GOOD FOOD STARTS HERE</span>
          <h1>A little of<br /><span>everything.</span></h1>
          <p>Made fresh, full of flavor and always worth coming back for. Find your next favorite below.</p>
          <a className="button button-orange" href="#starters">Take a look <span aria-hidden="true">↓</span></a>
          {/* <span className="page-hero-mark" aria-hidden="true">MENU<br />NO. 01</span> */}
        </div>
      </section>

      <nav className="menu-jump" aria-label="Jump to a menu category">
        {menuSections.map((section) => <a key={section.slug} href={`#${section.slug}`}>{section.name.replace("The ", "")}<span aria-hidden="true">↗</span></a>)}
      </nav>

      <main className="section menu-page-section">
        {menuSections.map((section, index) => (
          <section className="menu-category" id={section.slug} key={section.slug}>
            <div className="menu-category-heading">
              <span className="menu-category-number">0{index + 1}</span>
              <div><h2>{section.name}<span>.</span></h2><p>{section.note}</p></div>
            </div>
            <div className="menu-items">
              {section.items.map((item) => (
                <article className="menu-item" key={item.name}>
                  <span className="menu-item-copy">
                    <span className="menu-item-name">{item.name}{item.label && <span className="menu-item-label">{item.label}</span>}</span>
                    <span className="menu-item-description">{item.description}</span>
                  </span>
                  <span className="menu-item-dots" aria-hidden="true" />
                  <span className="menu-item-price">Rs. {item.price}</span>
                </article>
              ))}
            </div>
          </section>
        ))}
        <p className="menu-note">Prices in Pakistani rupees. Items are freshly prepared to order. Please ask us about allergens.</p>
        <div className="menu-cta"><p>Found your favorite?</p><Link className="text-link" href="/contact">Let’s make it a good meal <span aria-hidden="true">↗</span></Link></div>
      </main>
    </>
  );
}
