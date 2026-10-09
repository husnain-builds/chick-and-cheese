import Link from "next/link";
import { HeroSlider, PromoStrip } from "./components/site";
import { menuSections } from "./lib/menu";

const favorites = [
  { name: "Zinger Burger", detail: "Our signature crispy, spicy chicken.", price: 450, photo: "photo-1568901346375-23c9450c58cd", tag: "The original" },
  { name: "Chicken Supreme", detail: "A loaded pizza made for sharing.", price: 650, photo: "photo-1571407970349-bc81e7e96d47", tag: "Crowd favorite" },
  { name: "Arabic Wrap", detail: "Big, bold shawarma flavor, wrapped up.", price: 550, photo: "photo-1626700051175-6818013e1d4f", tag: "Made fresh" },
];

export default function Home() {
  return (
    <>
      <PromoStrip />
      <HeroSlider />

      <section className="section favorites-section" id="favorites">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" /> THE CROWD PLEASERS</span>
            <h2>Good things.<br /><span>Great taste.</span></h2>
          </div>
          <Link className="text-link" href="/menu">Explore our full menu <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="favorites-grid">
          {favorites.map((item, index) => (
            <article className="favorite-card" key={item.name} style={{ animationDelay: `${index * 100}ms` }}>
              <Link className="favorite-image" href="/menu" aria-label={`Explore our ${item.name}`} style={{ backgroundImage: `url("https://images.unsplash.com/${item.photo}?auto=format&fit=crop&w=820&q=80")` }}>
                <span className="visually-hidden">{item.name}</span>
                <span className="favorite-tag">{item.tag}</span>
              </Link>
              <div className="favorite-details">
                <div><h3>{item.name}</h3><p>{item.detail}</p></div>
                <span className="favorite-price">Rs. {item.price}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="deal-feature">
        <div className="deal-copy">
          <span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> MORE CRAVINGS, LESS SPENDING</span>
          <h2>Made for<br /><span>sharing. Or not.</span></h2>
          <p>Bring your people. Bring your appetite. Our famous meal deals bring all the good stuff to one table.</p>
          <Link className="button button-cream" href="/deals">See what’s on offer <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="deal-image" role="img" aria-label="A table full of a freshly made burger, fries and pizza" />
        <span className="deal-stamp"><span>GOOD<br />FOOD.<br />GOOD<br />MOOD.</span></span>
      </section>

      <section className="section menu-preview" id="menu">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" /> SOMETHING FOR EVERY CRAVING</span>
            <h2>Come hungry.<br /><span>Pick your happy.</span></h2>
          </div>
        </div>
        <div className="category-grid">
          {menuSections.map((section, index) => (
            <Link className={`category-tile category-tile-${index % 4}`} href="/menu" key={section.slug}>
              <span className="category-number">0{index + 1}</span>
              <span className="category-name">{section.name}</span>
              <span className="category-count">{section.items.length} things to love</span>
              <span className="category-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="visit-banner">
        <span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> YOUR NEXT GOOD MEAL IS CALLING</span>
        <h2>Made fresh.<br /><span>Made to make your day.</span></h2>
        <Link className="button button-cream" href="/contact">Come say hello <span aria-hidden="true">↗</span></Link>
        <div className="visit-sunburst" aria-hidden="true">✳</div>
      </section>
    </>
  );
}
