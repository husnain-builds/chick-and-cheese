"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Our menu" },
  { href: "/deals", label: "Good deals" },
  { href: "/about", label: "Our story" },
  { href: "/contact", label: "Find us" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [openForPath, setOpenForPath] = useState<string | null>(null);
  const menuOpen = openForPath === pathname;
  const closeNav = () => setOpenForPath(null);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Chick’n Cheese — home" onClick={closeNav}>
        <span className="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 40 40" fill="none">
            <path d="M5 19.5h30a3 3 0 0 1 3 3v2.2H2v-2.2a3 3 0 0 1 3-3Z" fill="currentColor" />
            <path d="M4 26.2h32l-3.3 6H7.3l-3.3-6Z" fill="currentColor" opacity=".3" />
            <path d="M7 34h26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <path d="M11 17c0-5.5 4-9 9-9s9 3.5 9 9v1H11v-1Z" fill="currentColor" />
            <path d="M14 5c1.1-2 3.1-3 5.5-2.5 1.2-2 3.8-2.6 5.8-1.2 2.1 1.4 2.2 4.3.5 5.7H14Z" fill="currentColor" />
          </svg>
        </span>
        <span className="brand-name"><span>CHICK’N</span><span>CHEESE<span className="brand-period">.</span></span></span>
      </Link>

      <button className="mobile-menu-button" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setOpenForPath(menuOpen ? null : pathname)}>
        <span /><span />
      </button>

      <nav className={`main-navigation${menuOpen ? " navigation-open" : ""}`} id="primary-navigation" aria-label="Main navigation">
        {navigation.map((item) => (
          <Link className={`nav-link${pathname === item.href ? " nav-link-active" : ""}`} href={item.href} key={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={closeNav}>
            {item.label}
          </Link>
        ))}
        <Link className="nav-order-button" href="/contact" onClick={closeNav}>Let’s eat <span aria-hidden="true">↗</span></Link>
      </nav>
    </header>
  );
}

const slides = [
  {
    label: "THE ONE THAT STARTED IT ALL",
    firstLine: "Extra crispy.",
    secondLine: "Extra everything.",
    description: "Big crunch, juicy chicken, just the right kind of messy. Meet your new favorite burger.",
    dish: "Zinger Burger",
    price: "Rs. 450",
    photo: "photo-1568901346375-23c9450c58cd",
    imageDescription: "A freshly stacked, crispy chicken burger",
    color: "hero-photo-burger",
  },
  {
    label: "A GOOD REASON TO SHARE",
    firstLine: "The good stuff.",
    secondLine: "On every slice.",
    description: "Golden crust, big flavor, plenty of cheese. This is a pizza night kind of pizza.",
    dish: "Chicken Supreme",
    price: "From Rs. 650",
    photo: "photo-1579751626657-72bc17010498",
    imageDescription: "A freshly made pizza with golden crust and generous toppings",
    color: "hero-photo-pizza",
  },
  {
    label: "ALL WRAPPED UP",
    firstLine: "Big flavor.",
    secondLine: "Zero second thoughts.",
    description: "Tender, punchy, rolled up and ready to go. Good things really do come wrapped.",
    dish: "Arabic Wrap",
    price: "Rs. 550",
    photo: "photo-1626700051175-6818013e1d4f",
    imageDescription: "A freshly prepared chicken wrap with colorful vegetables",
    color: "hero-photo-wrap",
  },
];

export function PromoStrip() {
  return (
    <div className="promo-strip">
      <span>GOOD FOOD. GOOD MOOD.</span><span className="promo-star" aria-hidden="true">✳</span><span>MADE FRESH, JUST FOR YOU.</span><span className="promo-star" aria-hidden="true">✳</span><span>GOOD FOOD. GOOD MOOD.</span>
    </div>
  );
}

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((slide) => (slide + 1) % slides.length), 5400);
    return () => window.clearInterval(timer);
  }, [paused]);

  const slide = slides[active];
  const previous = () => setActive((index) => (index + slides.length - 1) % slides.length);
  const next = () => setActive((index) => (index + 1) % slides.length);

  return (
    <section className="hero" aria-label="Food favorites">
      <div className="hero-copy">
        <span className="eyebrow"><span className="eyebrow-dot" /> {slide.label}</span>
        <div className="hero-headline" key={active} aria-live="polite">
          <h1>{slide.firstLine}<br /><em>{slide.secondLine}</em></h1>
        </div>
        <p className="hero-description" key={`description-${active}`}>{slide.description}</p>
        <div className="hero-actions"><Link className="button button-orange" href="/menu">Find your favorite <span aria-hidden="true">↗</span></Link><span className="hero-food-note"><span className="tiny-spark" aria-hidden="true">✳</span> Always made fresh</span></div>
        <div className="hero-bottom"><div className="slider-controls" aria-label="Slide controls"><button className="slider-arrow" type="button" aria-label="Previous slide" onClick={previous}>←</button><div className="slider-dots" aria-label={`Slide ${active + 1} of ${slides.length}`}>{slides.map((item, index) => <button type="button" className={`slider-dot${index === active ? " slider-dot-active" : ""}`} key={item.dish} onClick={() => setActive(index)} aria-label={`Show ${item.dish}`} aria-current={index === active ? "true" : undefined} />)}</div><button className="slider-arrow" type="button" aria-label="Next slide" onClick={next}>→</button><button className="slider-pause" type="button" aria-label={paused ? "Resume automatic slides" : "Pause automatic slides"} onClick={() => setPaused((value) => !value)}>{paused ? "▶" : "Ⅱ"}</button></div><span className="slide-index">0{active + 1} <span>/ 0{slides.length}</span></span></div>
      </div>
      <div className="hero-visual" key={`visual-${active}`}>
        <div className={`hero-photo ${slide.color}`} role="img" aria-label={slide.imageDescription} style={{ backgroundImage: `url("https://images.unsplash.com/${slide.photo}?auto=format&fit=crop&w=1400&q=85")` }} />
        <span className="hero-photo-wash" aria-hidden="true" />
        <span className="hero-photo-label"><span className="hero-photo-dot" /> FRESH OFF THE GRILL</span>
        <span className="hero-product-chip"><span><span className="product-chip-label">YOUR NEXT FAVORITE</span><strong>{slide.dish}</strong></span><span className="product-chip-price">{slide.price}</span></span>
        <span className="hero-number" aria-hidden="true">0{active + 1}</span>
        <span className="hero-photo-spark" aria-hidden="true">✳</span>
      </div>
      <span className="hero-side-note" aria-hidden="true">A LITTLE EXTRA LOVE IN EVERY BITE</span>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-column">
          <Link className="brand footer-brand" href="/" aria-label="Chick’n Cheese — home"><span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 40 40" fill="none"><path d="M5 19.5h30a3 3 0 0 1 3 3v2.2H2v-2.2a3 3 0 0 1 3-3Z" fill="currentColor" /><path d="M4 26.2h32l-3.3 6H7.3l-3.3-6Z" fill="currentColor" opacity=".35" /><path d="M7 34h26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M11 17c0-5.5 4-9 9-9s9 3.5 9 9v1H11v-1Z" fill="currentColor" /><path d="M14 5c1.1-2 3.1-3 5.5-2.5 1.2-2 3.8-2.6 5.8-1.2 2.1 1.4 2.2 4.3.5 5.7H14Z" fill="currentColor" /></svg></span><span className="brand-name"><span>CHICK’N</span><span>CHEESE<span className="brand-period">.</span></span></span></Link>
          <p>Fresh flavors. Crispy bites. Cheesy delights.</p>
        </div>
        <div className="footer-links"><span className="footer-label">TAKE A LOOK</span><Link href="/menu">Our menu</Link><Link href="/deals">Good deals</Link><Link href="/about">Our story</Link></div>
        <div className="footer-links"><span className="footer-label">SAY HELLO</span><Link href="/contact">Our Lahore branches</Link><a href="tel:+923155505187">0315 550 5187</a><a href="https://wa.me/923155505187" target="_blank" rel="noopener noreferrer">WhatsApp us ↗</a></div>
        <div className="footer-note"><span className="footer-label">THE CHICK’N CHEESE RULE</span><p>Always get the extra fries.</p><span className="footer-note-star" aria-hidden="true">✳</span></div>
      </div>
      <div className="footer-bottom"><span>Chick’n Cheese. Made with a little extra love.</span><Link href="/contact">Come hungry <span aria-hidden="true">↗</span></Link></div>
    </footer>
  );
}
