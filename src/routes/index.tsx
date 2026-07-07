import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Wrench,
  Disc,
  Gauge,
  Cog,
  Droplet,
  CircleDot,
  Instagram,
  Facebook,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  Phone,
  ChevronDown,
} from "lucide-react";
import logoAsset from "@/assets/pneuz-logo.asset.json";
import iconAsset from "@/assets/pneuz-icon.asset.json";
import heroImg from "@/assets/hero-tires.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=5541999999999&text=Ol%C3%A1%2C+vim+pelo+site+da+PneuZ+e+gostaria+de+mais+informa%C3%A7%C3%B5es";

const services = [
  { icon: CircleDot, title: "Pneus Novos", desc: "Venda de pneus das melhores marcas para todos os modelos." },
  { icon: Gauge, title: "Alinhamento", desc: "Alinhamento computadorizado com precisão milimétrica." },
  { icon: Disc, title: "Balanceamento", desc: "Balanceamento eletrônico para uma direção suave." },
  { icon: Wrench, title: "Suspensão", desc: "Diagnóstico e reparo completo do sistema de suspensão." },
  { icon: Cog, title: "Freios", desc: "Troca de pastilhas, discos e revisão do sistema de freios." },
  { icon: Droplet, title: "Troca de Óleo", desc: "Óleo e filtros com produtos de alta qualidade." },
];

const faqs = [
  {
    q: "Quais serviços a PneuZ Araucária oferece?",
    a: "Trabalhamos com venda de pneus novos, alinhamento, balanceamento, suspensão, freios, troca de óleo e serviços gerais de mecânica leve.",
  },
  {
    q: "Qual é o horário de funcionamento?",
    a: "Atendemos de segunda a sexta das 08h às 18h, e aos sábados das 08h às 12h.",
  },
  {
    q: "Como agendar um atendimento?",
    a: "Fale conosco pelo WhatsApp diretamente pelo botão no site, ou visite nossa loja em Araucária.",
  },
  {
    q: "Onde a PneuZ está localizada?",
    a: "Estamos em Araucária, região metropolitana de Curitiba/PR.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <FAQ />
      <Footer />
      <FloatingWhats />
    </div>
  );
}

function TopBar() {
  return (
    <div className="w-full bg-[var(--accent-yellow)] text-[color:var(--primary)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm font-medium">
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:opacity-80">
          <MessageCircle className="h-4 w-4" /> Fale conosco
        </a>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="Instagram" className="hover:opacity-80"><Instagram className="h-4 w-4" /></a>
          <a href="#" aria-label="Facebook" className="hover:opacity-80"><Facebook className="h-4 w-4" /></a>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#inicio", label: "Início" },
    { href: "#servicos", label: "Serviços" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={iconAsset.url} alt="PneuZ Araucária" className="h-11 w-11" />
          <div className="leading-tight">
            <div className="text-lg font-extrabold tracking-tight text-primary">PneuZ</div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Araucária</div>
          </div>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[var(--accent-yellow)] px-5 py-2 text-sm font-bold text-primary shadow-[var(--shadow-yellow)] transition-transform hover:-translate-y-0.5"
          >
            Orçamento
          </a>
        </nav>
        <button
          className="rounded-md p-2 md:hidden"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-primary" />
            <span className="block h-0.5 w-6 bg-primary" />
            <span className="block h-0.5 w-6 bg-primary" />
          </div>
        </button>
      </div>
      {open && (
        <div className="border-t border-border md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-semibold hover:bg-muted">
                {l.label}
              </a>
            ))}
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-2 rounded-full bg-[var(--accent-yellow)] px-5 py-2 text-center text-sm font-bold text-primary">
              Orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, oklch(0.22 0.14 267 / 0.92) 0%, oklch(0.32 0.16 267 / 0.75) 60%, oklch(0.22 0.14 267 / 0.6) 100%)" }} />
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col items-start px-4 py-28 md:py-40">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--accent-yellow)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
          <CircleDot className="h-3.5 w-3.5" /> Centro Automotivo
        </span>
        <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-white md:text-6xl">
          Seu carro em boas mãos em <span className="text-[var(--accent-yellow)]">Araucária</span>.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/85">
          Pneus novos, alinhamento, balanceamento e serviços automotivos com atendimento rápido, transparente e preço justo.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[var(--accent-yellow)] px-7 py-3.5 text-sm font-bold text-primary shadow-[var(--shadow-yellow)] transition-transform hover:-translate-y-0.5"
          >
            Fale no WhatsApp
          </a>
          <a
            href="#servicos"
            className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            Nossos serviços
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 text-center">
          <div className="mb-3 inline-block rounded-full bg-[var(--accent-yellow)] px-5 py-1.5 text-xs font-black uppercase tracking-widest text-primary">
            Serviços
          </div>
          <h2 className="text-3xl font-black text-primary md:text-4xl">O que fazemos por você</h2>
          <p className="mt-3 text-muted-foreground">Do pneu novo à revisão completa — cuidamos de cada detalhe.</p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-brand)]"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-[var(--accent-yellow)] transition-colors group-hover:bg-[var(--accent-yellow)] group-hover:text-primary">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-brand)] transition-transform hover:-translate-y-0.5"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-muted/40 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:items-center">
        <div className="relative">
          <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[var(--accent-yellow)] opacity-70 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-brand)]" style={{ background: "var(--gradient-brand)" }}>
            <div className="flex aspect-[4/3] items-center justify-center p-10">
              <img src={iconAsset.url} alt="PneuZ" className="h-60 w-60 drop-shadow-2xl" />
            </div>
          </div>
        </div>
        <div>
          <div className="mb-3 inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--accent-yellow)]">
            Sobre nós
          </div>
          <h2 className="text-3xl font-black leading-tight text-primary md:text-4xl">
            PneuZ Araucária — tradição em pneus e serviços automotivos
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/80">
            Somos um centro automotivo completo em Araucária. Nosso compromisso é entregar
            um atendimento humano, transparente e resolutivo — porque sabemos que seu carro
            faz parte da sua rotina, do seu trabalho e da sua liberdade.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            Trabalhamos com pneus das melhores marcas, alinhamento computadorizado,
            balanceamento eletrônico e uma equipe técnica preparada para cuidar do seu
            veículo com agilidade e preço justo.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            <Stat n="+10" label="Anos de experiência" />
            <Stat n="+5k" label="Clientes atendidos" />
            <Stat n="100%" label="Compromisso" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 text-center">
      <div className="text-2xl font-black text-primary md:text-3xl">{n}</div>
      <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

function Contact() {
  return (
    <section id="contato" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 text-center">
          <div className="mb-3 inline-block rounded-full bg-[var(--accent-yellow)] px-5 py-1.5 text-xs font-black uppercase tracking-widest text-primary">
            Contato
          </div>
          <h2 className="text-3xl font-black text-primary md:text-4xl">Entre em contato</h2>
          <p className="mt-3 text-muted-foreground">Estamos prontos para atender você em Araucária.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <ContactCard icon={MapPin} title="Endereço" lines={["Araucária — PR", "Região Metropolitana de Curitiba"]} />
          <ContactCard icon={Clock} title="Horário" lines={["Seg a Sex: 08h — 18h", "Sábado: 08h — 12h"]} />
          <ContactCard icon={Mail} title="Fale conosco" lines={["contato@pneuzaraucaria.com.br", "WhatsApp disponível"]} />
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-yellow)] px-8 py-3.5 text-sm font-bold text-primary shadow-[var(--shadow-yellow)] transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, title, lines }: { icon: typeof MapPin; title: string; lines: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-7 text-center transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-brand)]">
      <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-[var(--accent-yellow)]">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-bold text-primary">{title}</h3>
      {lines.map((l) => (
        <p key={l} className="mt-1 text-sm text-muted-foreground">{l}</p>
      ))}
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-muted/40 py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-10 text-center">
          <div className="mb-3 inline-block rounded-full bg-primary px-5 py-1.5 text-xs font-black uppercase tracking-widest text-[var(--accent-yellow)]">
            FAQ
          </div>
          <h2 className="text-3xl font-black text-primary md:text-4xl">Perguntas frequentes</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-card">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-bold text-primary">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm leading-relaxed text-foreground/75">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <img src={logoAsset.url} alt="PneuZ Araucária" className="h-14 w-auto rounded-lg bg-white p-2" />
          <p className="mt-4 text-sm text-white/70">
            Centro automotivo em Araucária — pneus, alinhamento, balanceamento e serviços para o seu carro.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-[var(--accent-yellow)]">Contato</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Araucária — PR</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> WhatsApp disponível</li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4" /> Seg–Sex 08–18h · Sáb 08–12h</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-[var(--accent-yellow)]">Redes sociais</h4>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 p-2.5 hover:bg-[var(--accent-yellow)] hover:text-primary"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="rounded-full bg-white/10 p-2.5 hover:bg-[var(--accent-yellow)] hover:text-primary"><Facebook className="h-5 w-5" /></a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="rounded-full bg-white/10 p-2.5 hover:bg-[var(--accent-yellow)] hover:text-primary"><MessageCircle className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} PneuZ Araucária — Todos os direitos reservados.
      </div>
    </footer>
  );
}

function FloatingWhats() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-brand)] transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
