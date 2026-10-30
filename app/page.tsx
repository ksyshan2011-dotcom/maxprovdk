"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  ["Автомобили", "#cars"],
  ["Услуги", "#services"],
  ["Отзывы", "#reviews"],
  ["О компании", "#about"],
  ["Контакты", "#contacts"]
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="hero-shell">
      <div className="hero-photo" aria-hidden="true" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="rain-glass" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#" aria-label="MAXPRO VDK">
          <span>MAXPRO</span><i> VDK</i>
        </a>

        <nav className="desktop-nav" aria-label="Основная навигация">
          {links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>

        <a className="header-cta" href="#request">
          <span>Подобрать авто</span><ArrowRight size={17} strokeWidth={1.4} />
        </a>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {menuOpen && (
        <motion.nav className="mobile-menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} aria-label="Мобильная навигация">
          {links.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="mobile-menu-cta" href="#request" onClick={() => setMenuOpen(false)}>Подобрать автомобиль <ArrowRight size={16} /></a>
        </motion.nav>
      )}

      <section className="hero-content">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">Автомобили под ваши задачи</p>
          <h1><span>MAXPRO</span><em> VDK</em></h1>
          <div className="red-rule" />
          <a className="main-cta" href="#request">
            <span>Подобрать автомобиль</span><ArrowRight size={18} strokeWidth={1.4} />
          </a>
        </motion.div>
      </section>

      <div className="hero-footnote">
        <span className="footnote-line" />
        <p>Премиальные автомобили<br />с гарантией результата</p>
      </div>

      <div className="hero-index"><span>01</span><i /> <span>01</span></div>
    </main>
  );
}