import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { menuSections } from "../lib/menu";

const menuImages: Record<string, string[]> = {
  starters: [
    "photo-1562967914-608f82629710",
    "photo-1527477396000-e27163b481c2",
    "photo-1626082927389-6cd097cdc6ec",
    "photo-1608039829572-78524f79c4c7",
    "photo-1565299624946-b28f40a0ae38",
  ],
  burgers: [
    "photo-1568901346375-23c9450c58cd",
    "photo-1550547660-d9450f859349",
    "photo-1553979459-d2229ba7433a",
    "photo-1571091718767-18b5b1457add",
  ],
  pizzas: [
    "photo-1579751626657-72bc17010498",
    "photo-1571407970349-bc81e7e96d47",
    "photo-1513104890138-7c749659a591",
    "photo-1604382355076-af4b0eb60143",
  ],
  wraps: [
    "photo-1626700051175-6818013e1d4f",
    "photo-1601050690597-df0568f70950",
    "photo-1626700051175-6818013e1d4f",
  ],
  sides: [
    "photo-1573080496219-bb080dd4f877",
    "photo-1630384060421-cb20d0e0649d",
    "photo-1518013431117-eb1465fa5752",
    "photo-1562967914-608f82629710",
  ],
  "fries-pasta": [
    "photo-1573080496219-bb080dd4f877",
    "photo-1630384060421-cb20d0e0649d",
    "photo-1565299624946-b28f40a0ae38",
    "photo-1473093295043-cdd812d0e601",
    "photo-1551183053-bf91a1d81141",
  ],
};

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
              {section.items.map((item, itemIndex) => (
                <article className="menu-item" key={item.name}>
                  <Image
                    className="menu-item-image"
                    src={`https://images.unsplash.com/${menuImages[section.slug][itemIndex % menuImages[section.slug].length]}?auto=format&fit=crop&w=320&q=75`}
                    alt={item.name}
                    width={112}
                    height={112}
                    sizes="(max-width: 640px) 76px, 108px"
                    unoptimized
                  />
                  <span className="menu-item-copy">
                    <span className="menu-item-name">{item.name}{item.label && <span className="menu-item-label">{item.label}</span>}</span>
                    <span className="menu-item-description">{item.description}</span>
                    <span className="menu-item-price">Rs. {item.price}</span>
                  </span>
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
