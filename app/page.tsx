"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Award, Clock, Shield, Users, Grid3x3, Droplets, Wrench,
  Layers, FileCheck, Phone, ArrowRight, Menu, X,
  Warehouse, Plane, ShoppingCart, Factory, GraduationCap,
  Building2, ChevronRight, MapPin, Mail, Star
} from "lucide-react";

// ─── Scroll-reveal hook ─────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal,.reveal-left,.reveal-right").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── Counter hook ────────────────────────────────────────
function useCounter(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// ─── Header ──────────────────────────────────────────────
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = ["Services", "Industries", "Projects", "About", "Contact"];

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "header-scrolled" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#C8963E] rounded flex items-center justify-center">
              <Grid3x3 className="w-4 h-4 text-black" />
            </div>
            <span className="font-display text-xl tracking-wider text-white">MLS FLOORING</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-stone-400 hover:text-white text-sm font-medium tracking-wide transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:7049810555"
              className="hidden lg:flex items-center gap-2 text-stone-300 hover:text-[#C8963E] text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              704-981-0555
            </a>
            <button
              onClick={() => scrollTo("Contact")}
              className="btn-gold hidden sm:flex items-center gap-2 px-5 py-2.5 rounded text-sm font-bold"
            >
              <span>Request a Bid</span>
            </button>
            <button
              className="lg:hidden p-2 text-stone-400 hover:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mobile-menu-enter bg-[#141414] border-t border-white/5 px-5 pb-6">
          {nav.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="block w-full text-left py-3 text-stone-300 hover:text-white font-medium border-b border-white/5"
            >
              {item}
            </button>
          ))}
          <a
            href="tel:7049810555"
            className="flex items-center gap-2 mt-4 text-[#C8963E] font-medium"
          >
            <Phone className="w-4 h-4" />
            704-981-0555
          </a>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=2000&q=80"
          alt="Industrial warehouse with polished concrete floor"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Floating badge */}
      <div className="absolute top-28 right-8 md:right-16 float-badge hidden md:block">
        <div className="bg-[#C8963E]/10 border border-[#C8963E]/30 backdrop-blur-sm rounded-lg px-4 py-3 text-center">
          <div className="text-[#C8963E] font-display text-3xl">500+</div>
          <div className="text-stone-300 text-xs mt-0.5">Projects Completed</div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          <div className="reveal">
            <span className="section-label">Enterprise Commercial Flooring</span>
          </div>

          <h1 className="font-display mt-4 text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none text-white reveal delay-1">
            BUILT FOR
            <br />
            <span className="text-gold-gradient">INDUSTRY.</span>
            <br />
            BUILT TO
            <br />
            LAST.
          </h1>

          <p className="mt-6 text-lg text-stone-300 max-w-xl leading-relaxed reveal delay-2">
            Delivering polished concrete, epoxy coatings, and surface preparation
            for Fortune 500 facilities nationwide — from Amazon distribution
            centers to international airports.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 reveal delay-3">
            <a
              href="#contact"
              className="btn-gold inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded text-sm font-bold uppercase tracking-widest"
            >
              <span>Request a Bid</span>
              <ArrowRight className="w-4 h-4 relative z-10" />
            </a>
            <a
              href="#projects"
              className="btn-ghost inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded text-sm font-medium"
            >
              View Projects
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 mt-12 reveal delay-4">
            {["Licensed & Insured", "Fortune 500 Trusted", "Night Work Specialists"].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C8963E]" />
                <span className="text-stone-400 text-sm">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-[#C8963E] to-transparent" />
      </div>
    </section>
  );
}

// ─── Stats Bar ────────────────────────────────────────────
function StatsBar() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const c1 = useCounter(500, 1800, visible);
  const c2 = useCounter(25, 1800, visible);
  const c3 = useCounter(10, 1600, visible);
  const c4 = useCounter(100, 2000, visible);

  const stats = [
    { value: c1, suffix: "+", label: "Projects Completed" },
    { value: c2, suffix: "M+ sqft", label: "Flooring Installed" },
    { value: c3, suffix: "+ Years", label: "Industry Experience" },
    { value: c4, suffix: "%", label: "Client Satisfaction" },
  ];

  return (
    <div ref={ref} className="bg-[#C8963E] py-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-4xl md:text-5xl text-black leading-none">
                {s.value}{s.suffix}
              </div>
              <div className="mt-1 text-sm font-medium text-black/70 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Why MLS ──────────────────────────────────────────────
function WhyMLS() {
  const cards = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "National Account Experience",
      desc: "Trusted by Amazon, CLT Airport, and national retail chains for large-scale deployments requiring flawless execution.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Night & Shutdown Work Experts",
      desc: "We specialize in off-hours and shutdown work — minimizing disruption to your 24/7 operations.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Certified Crews & Equipment",
      desc: "Latest grinding and polishing technology operated by trained, certified professionals. Every project, every time.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dedicated Project Manager",
      desc: "One point of contact for every site. Seamless coordination from bid to final walkthrough.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-16 reveal">
          <span className="section-label">Why Choose MLS</span>
          <span className="gold-line mt-3" />
          <h2 className="font-display text-5xl md:text-6xl text-white mt-2 leading-tight">
            THE CONTRACTOR<br />
            <span className="text-gold-gradient">FORTUNE 500</span><br />
            COMPANIES TRUST
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`reveal delay-${i + 1} card-hover bg-[#141414] border border-white/[0.06] rounded-xl p-7`}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#C8963E]/10 text-[#C8963E] mb-5">
                {card.icon}
              </div>
              <h3 className="text-white font-semibold text-base mb-3 leading-snug">{card.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────
function Services() {
  const services = [
    {
      icon: <Grid3x3 className="w-5 h-5" />,
      title: "Concrete Polishing",
      desc: "High-gloss, durable surfaces engineered for warehouses, retail, and high-traffic commercial environments.",
      img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      title: "Epoxy Coatings",
      desc: "Chemical-resistant, seamless flooring systems built to withstand forklifts, heavy machinery, and industrial use.",
      img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    },
    {
      icon: <Wrench className="w-5 h-5" />,
      title: "Surface Preparation",
      desc: "Professional shot blasting, diamond grinding, and complete coating removal for optimal adhesion.",
      img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Joint Filling & Repairs",
      desc: "Semi-rigid and flexible joint fill systems that protect against forklift damage and extend floor life.",
      img: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80",
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      title: "Moisture Mitigation",
      desc: "Vapor barrier and moisture control solutions that prevent coating failure and ensure long-term performance.",
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    },
    {
      icon: <FileCheck className="w-5 h-5" />,
      title: "Turnkey Packages",
      desc: "Complete end-to-end flooring solutions for major facilities — one contractor, one schedule, zero headaches.",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="reveal">
            <span className="section-label">What We Do</span>
            <span className="gold-line mt-3" />
            <h2 className="font-display text-5xl md:text-6xl text-white mt-2 leading-tight">
              COMPREHENSIVE<br />FLOORING SERVICES
            </h2>
          </div>
          <p className="text-stone-400 max-w-sm text-sm leading-relaxed reveal">
            Full-spectrum solutions for commercial and industrial facilities. From surface prep to final polish — we handle it all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className={`reveal delay-${(i % 3) + 1} card-hover img-zoom bg-[#141414] border border-white/[0.06] rounded-xl overflow-hidden group`}
            >
              <div className="relative h-52">
                <Image src={s.img} alt={s.title} fill className="object-cover" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#C8963E] text-black">
                  {s.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white font-semibold text-base mb-2">{s.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-[#C8963E] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Industries ───────────────────────────────────────────
function Industries() {
  const industries = [
    {
      icon: <Warehouse className="w-7 h-7" />,
      title: "Distribution & Fulfillment",
      desc: "High-traffic concrete polishing and coatings for 24/7 operations. Designed for forklifts and heavy machinery.",
      img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    },
    {
      icon: <Plane className="w-7 h-7" />,
      title: "Airports & Transportation",
      desc: "Durable, low-maintenance flooring for terminals and concourses. Meets strict safety and compliance standards.",
      img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    },
    {
      icon: <ShoppingCart className="w-7 h-7" />,
      title: "Big-Box & Retail",
      desc: "Polished concrete and epoxy systems combining heavy-duty durability with visual appeal.",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    },
    {
      icon: <Factory className="w-7 h-7" />,
      title: "Manufacturing",
      desc: "Chemical-resistant, seamless flooring meeting FDA, ISO, and OSHA standards for production environments.",
      img: "https://images.unsplash.com/photo-1565514020179-026b92b2d70b?w=800&q=80",
    },
    {
      icon: <GraduationCap className="w-7 h-7" />,
      title: "Education & Municipal",
      desc: "Low-VOC, sustainable flooring solutions for schools, government buildings, and public facilities.",
      img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    },
    {
      icon: <Building2 className="w-7 h-7" />,
      title: "Corporate & Office",
      desc: "Modern polished concrete for lobbies, showrooms, and open offices. Sophisticated aesthetics, built to last.",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    },
  ];

  return (
    <section id="industries" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16 reveal">
          <span className="section-label">Who We Serve</span>
          <span className="gold-line mt-3 mx-auto" />
          <h2 className="font-display text-5xl md:text-6xl text-white mt-2 leading-tight">
            INDUSTRIES WE SERVE
          </h2>
          <p className="mt-4 text-stone-400 max-w-lg mx-auto text-sm leading-relaxed">
            Specialized flooring solutions for the most demanding commercial environments in the Southeast and nationwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, i) => (
            <div
              key={i}
              className={`reveal delay-${(i % 3) + 1} relative img-zoom rounded-xl overflow-hidden h-72 group cursor-default`}
            >
              <Image src={ind.img} alt={ind.title} fill className="object-cover" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10 group-hover:via-black/70 transition-all duration-500" />
              <div className="absolute inset-0 p-7 flex flex-col justify-end">
                <div className="text-[#C8963E] mb-3">{ind.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-1 leading-snug">{ind.title}</h3>
                <p className="text-stone-400 text-xs leading-relaxed max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500">
                  {ind.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────
function Projects() {
  const projects = [
    {
      title: "Amazon Fulfillment Center",
      subtitle: "700,000 sq ft  ·  Charlotte, NC",
      work: "Concrete polishing & semi-rigid joint fill",
      detail: "9 consecutive nights, zero operational disruption",
      img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80",
      tag: "Distribution",
    },
    {
      title: "Charlotte Douglas International Airport",
      subtitle: "450,000 sq ft  ·  Charlotte, NC",
      work: "Terminal concourse polishing & sealing",
      detail: "Off-peak phased installation, FAA-compliant",
      img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80",
      tag: "Aviation",
    },
    {
      title: "National Retail Distribution Network",
      subtitle: "525,000 sq ft  ·  Southeast Region",
      work: "High-gloss epoxy coating system",
      detail: "Fast-track 14-day delivery, 12 simultaneous locations",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
      tag: "Retail",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="reveal">
            <span className="section-label">Our Work</span>
            <span className="gold-line mt-3" />
            <h2 className="font-display text-5xl md:text-6xl text-white mt-2 leading-tight">
              FEATURED<br />PROJECTS
            </h2>
          </div>
          <p className="text-stone-400 max-w-sm text-sm leading-relaxed reveal">
            Large-scale installations delivered on time, within budget — and without disrupting your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`reveal delay-${i + 1} card-hover img-zoom rounded-xl overflow-hidden bg-[#141414] border border-white/[0.06]`}
            >
              <div className="relative h-56">
                <Image src={p.img} alt={p.title} fill className="object-cover" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-[#C8963E] text-black px-2.5 py-1 rounded">
                    {p.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white font-semibold text-base mb-1 leading-snug">{p.title}</h3>
                <p className="text-[#C8963E] text-xs font-medium mb-3">{p.subtitle}</p>
                <div className="space-y-1.5">
                  <p className="text-stone-300 text-xs">{p.work}</p>
                  <p className="text-stone-500 text-xs">{p.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────
function Testimonials() {
  const testimonials = [
    {
      quote: "MLS Flooring completed our 700,000 square foot fulfillment center over 9 nights without a single disruption. The finished surface exceeded every spec.",
      author: "Facility Manager",
      company: "Amazon Distribution, Charlotte NC",
    },
    {
      quote: "Their night-work capability is unmatched. They worked around live terminal operations and delivered a world-class finish on time and under budget.",
      author: "Project Director",
      company: "Charlotte Douglas International Airport",
    },
    {
      quote: "We've rolled out MLS across 12 locations simultaneously. Consistent quality, responsive team, and zero surprises. They're our go-to flooring contractor.",
      author: "VP of Facilities",
      company: "National Retail Chain, Southeast",
    },
  ];

  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16 reveal">
          <span className="section-label">Client Feedback</span>
          <span className="gold-line mt-3 mx-auto" />
          <h2 className="font-display text-5xl md:text-6xl text-white mt-2 leading-tight">
            WHAT OUR CLIENTS SAY
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`reveal delay-${i + 1} card-hover bg-[#141414] border border-white/[0.06] rounded-xl p-7`}
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#C8963E] text-[#C8963E]" />
                ))}
              </div>
              <p className="text-stone-300 text-sm leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-white/[0.06] pt-4">
                <div className="font-semibold text-white text-sm">{t.author}</div>
                <div className="text-[#C8963E] text-xs mt-0.5">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────
function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=2000&q=80"
          alt="Polished concrete floor"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/85" />
        <div className="absolute inset-0 bg-[#C8963E]/5" />
      </div>
      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <div className="reveal">
          <span className="section-label">Get Started Today</span>
          <h2 className="font-display text-5xl md:text-7xl text-white mt-4 mb-6 leading-tight">
            READY TO TRANSFORM<br />
            <span className="text-gold-gradient">YOUR FLOORS?</span>
          </h2>
          <p className="text-stone-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Get a detailed quote for your commercial or industrial flooring project. Fast turnaround, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded text-sm font-bold uppercase tracking-widest"
            >
              <span>Request a Bid</span>
              <ArrowRight className="w-4 h-4 relative z-10" />
            </a>
            <a
              href="tel:7049810555"
              className="btn-ghost inline-flex items-center gap-2 px-8 py-4 rounded text-sm font-medium"
            >
              <Phone className="w-4 h-4" />
              Call 704-981-0555
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="reveal-left">
            <span className="section-label">Get in Touch</span>
            <span className="gold-line mt-3" />
            <h2 className="font-display text-5xl md:text-6xl text-white mt-2 leading-tight mb-6">
              REQUEST<br />A BID
            </h2>
            <p className="text-stone-400 text-sm leading-relaxed mb-10 max-w-md">
              Fill out the form and our team will respond with a detailed quote and project timeline within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#C8963E]/10 flex items-center justify-center text-[#C8963E] flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 uppercase tracking-wider mb-0.5">Phone</div>
                  <a href="tel:7049810555" className="text-white font-medium hover:text-[#C8963E] transition-colors">
                    704-981-0555
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#C8963E]/10 flex items-center justify-center text-[#C8963E] flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 uppercase tracking-wider mb-0.5">Service Area</div>
                  <div className="text-white font-medium">Charlotte, NC &amp; Southeast Region</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#C8963E]/10 flex items-center justify-center text-[#C8963E] flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 uppercase tracking-wider mb-0.5">Licensed &amp; Insured</div>
                  <div className="text-white font-medium">All crews certified and bonded</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal-right">
            <form className="bg-[#141414] border border-white/[0.06] rounded-xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-stone-400 uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-[#0A0A0A] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-[#C8963E]/40 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-stone-400 uppercase tracking-wider mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full bg-[#0A0A0A] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-[#C8963E]/40 transition-colors"
                    placeholder="Company name"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-stone-400 uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-[#0A0A0A] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-[#C8963E]/40 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs text-stone-400 uppercase tracking-wider mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full bg-[#0A0A0A] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-[#C8963E]/40 transition-colors"
                    placeholder="(704) 000-0000"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-stone-400 uppercase tracking-wider mb-2">Location</label>
                  <input
                    type="text"
                    className="w-full bg-[#0A0A0A] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-[#C8963E]/40 transition-colors"
                    placeholder="City, State"
                  />
                </div>
                <div>
                  <label className="block text-xs text-stone-400 uppercase tracking-wider mb-2">Square Footage</label>
                  <input
                    type="text"
                    className="w-full bg-[#0A0A0A] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-[#C8963E]/40 transition-colors"
                    placeholder="Approx. sq ft"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-stone-400 uppercase tracking-wider mb-2">Service Needed</label>
                  <select className="w-full bg-[#0A0A0A] border border-white/[0.08] rounded-lg px-4 py-3 text-stone-400 text-sm focus:outline-none focus:border-[#C8963E]/40 transition-colors">
                    <option>Select service...</option>
                    <option>Concrete Polishing</option>
                    <option>Epoxy Coating</option>
                    <option>Surface Preparation</option>
                    <option>Joint Filling</option>
                    <option>Moisture Mitigation</option>
                    <option>Turnkey Package</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-stone-400 uppercase tracking-wider mb-2">Timeline</label>
                  <select className="w-full bg-[#0A0A0A] border border-white/[0.08] rounded-lg px-4 py-3 text-stone-400 text-sm focus:outline-none focus:border-[#C8963E]/40 transition-colors">
                    <option>Select timeline...</option>
                    <option>Immediate (1–2 weeks)</option>
                    <option>Soon (2–4 weeks)</option>
                    <option>Flexible (1–3 months)</option>
                    <option>Planning Phase</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs text-stone-400 uppercase tracking-wider mb-2">Project Details</label>
                <textarea
                  rows={4}
                  className="w-full bg-[#0A0A0A] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-[#C8963E]/40 transition-colors resize-none"
                  placeholder="Tell us about your facility, current floor condition, special requirements..."
                />
              </div>
              <button
                type="submit"
                className="btn-gold w-full py-4 rounded-lg text-sm font-bold uppercase tracking-widest inline-flex items-center justify-center gap-2"
              >
                <span>Submit Request</span>
                <ArrowRight className="w-4 h-4 relative z-10" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────
function Footer() {
  const services = ["Concrete Polishing", "Epoxy Coatings", "Surface Preparation", "Joint Filling", "Moisture Mitigation", "Turnkey Packages"];
  const industries = ["Distribution & Fulfillment", "Airports & Transportation", "Big-Box & Retail", "Manufacturing", "Education & Municipal", "Corporate & Office"];

  return (
    <footer className="bg-[#060606] border-t border-white/[0.05] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#C8963E] rounded flex items-center justify-center">
                <Grid3x3 className="w-4 h-4 text-black" />
              </div>
              <span className="font-display text-xl tracking-wider text-white">MLS FLOORING</span>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed mb-5">
              Enterprise-grade concrete polishing and epoxy coating solutions for the most demanding commercial facilities nationwide.
            </p>
            <a
              href="tel:7049810555"
              className="inline-flex items-center gap-2 text-[#C8963E] text-sm font-medium hover:text-[#E8B84B] transition-colors"
            >
              <Phone className="w-4 h-4" />
              704-981-0555
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold text-stone-300 uppercase tracking-widest mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <button className="text-stone-500 hover:text-[#C8963E] text-sm transition-colors text-left">
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-xs font-semibold text-stone-300 uppercase tracking-widest mb-4">Industries</h4>
            <ul className="space-y-2.5">
              {industries.map((ind) => (
                <li key={ind}>
                  <button className="text-stone-500 hover:text-[#C8963E] text-sm transition-colors text-left">
                    {ind}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-stone-300 uppercase tracking-widest mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-stone-500">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-[#C8963E] flex-shrink-0" />
                <a href="tel:7049810555" className="hover:text-[#C8963E] transition-colors">704-981-0555</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-[#C8963E] flex-shrink-0" />
                <span>Charlotte, NC<br />Southeast Region</span>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="#contact"
                className="btn-gold inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-bold uppercase tracking-widest"
              >
                <span>Request a Bid</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-stone-600 text-xs">
            © 2025 MLS Flooring. All rights reserved. Licensed &amp; Insured.
          </p>
          <p className="text-stone-700 text-xs">
            Charlotte, NC · Southeast Region · Nationwide Service Available
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ────────────────────────────────────────────
export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <StatsBar />
      <WhyMLS />
      <Services />
      <Industries />
      <Projects />
      <Testimonials />
      <CTABanner />
      <Contact />
      <Footer />
    </div>
  );
}
