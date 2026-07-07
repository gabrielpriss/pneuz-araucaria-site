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
  Snowflake,
  Zap,
  Search,
  Settings,
  ShieldCheck,
} from "lucide-react";
import logoAsset from "@/assets/pneuz-logo.asset.json";
import iconAsset from "@/assets/pneuz-icon.asset.json";
import heroImg from "@/assets/hero-tires.jpg";
import oficinaAsset from "@/assets/oficina-pneuz.asset.json";
import { Star } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const PHONE_DISPLAY = "(41) 3795-0480";
const ADDRESS = "Av. Dr. Vítor do Amaral, 1380 — Centro, Araucária — PR, 83702-040";
const MAPS_URL =
  "https://www.google.com/maps?daddr=Av.+Dr.+V%C3%ADtor+do+Amaral,+1380+-+Centro,+Arauc%C3%A1ria+-+PR,+83702-040";

const waLink = (msg: string) =>
  `https://api.whatsapp.com/send?phone=554137950480&text=${encodeURIComponent(
    `Cupom da PROMO: ARAU1446 - ${msg}`,
  )}`;

const WHATSAPP = waLink(
  "Olá, vim pelo site e gostaria de mais informações. Envie este cupom para ter descontos.",
);

const brands = [
  "Bridgestone",
  "Continental",
  "Dunlop",
  "Firestone",
  "Goodyear",
  "Pirelli",
  "Linglong",
  "XBRI",
  "Importados",
];

const reviews = [
  {
    name: "Alessandro Matos",
    meta: "Local Guide · 26 avaliações",
    when: "4 semanas atrás",
    text: "Ótimo atendimento. Fui muito bem atendido pelo Gerente Bruno. Recomendo!",
  },
  {
    name: "Luana Castro",
    meta: "9 avaliações · 1 foto",
    when: "4 semanas atrás",
    text: "Atendimento excepcional do gerente Bruno e de toda equipe pela honestidade e compromisso! Araucária precisava de um auto center como esse!",
  },
  {
    name: "Weslen Natan",
    meta: "9 avaliações · 1 foto",
    when: "4 semanas atrás",
    text: "Gostaria de parabenizar toda a equipe da loja Pneu Z pelo excelente atendimento e pelo ótimo serviço realizado na troca dos pneus. Fiquei muito satisfeito com a qualidade do trabalho, a atenção e o profissionalismo demonstrados durante todo o atendimento. Parabéns a toda a equipe e muito sucesso!",
  },
  {
    name: "Valdenir Palma",
    meta: "2 avaliações",
    when: "Editado 4 semanas atrás",
    text: "Excelente atendimento, fui muito bem atendido pelo gerente Bruno, serviços muito bons, só fazem o que é necessário, super indico.",
  },
  {
    name: "Ebner Matias",
    meta: "Local Guide · 14 avaliações · 4 fotos",
    when: "4 meses atrás",
    text: "Atendimento nota 1000, os atendentes Heloisa e Thiago e o mecânico Marlon todos muito atenciosos e tiraram todas as minhas dúvidas! Recomendo.",
  },
];

const services = [
  { icon: CircleDot, title: "Pneus Novos", desc: "Pneus com 5 anos de garantia das melhores marcas do mercado." },
  { icon: Gauge, title: "Alinhamento 3D", desc: "Alinhamento computadorizado 3D de alta precisão." },
  { icon: Disc, title: "Balanceamento", desc: "Balanceamento eletrônico para direção suave e segura." },
  { icon: Wrench, title: "Suspensão", desc: "Revisão completa do sistema de suspensão." },
  { icon: ShieldCheck, title: "Freios", desc: "Revisão do sistema de freios, discos e pastilhas." },
  { icon: Droplet, title: "Troca de Óleo", desc: "Troca de óleo e filtros com produtos de qualidade." },
  { icon: Zap, title: "Injeção Eletrônica", desc: "Diagnóstico e reparo do sistema de injeção." },
  { icon: Cog, title: "Troca de Embreagem", desc: "Substituição completa do kit de embreagem." },
  { icon: Settings, title: "Correia Dentada", desc: "Troca de correia dentada e tensores." },
  { icon: Snowflake, title: "Ar-Condicionado", desc: "Higienização e recarga do ar-condicionado automotivo." },
  { icon: Search, title: "Diagnóstico Completo", desc: "Scanner automotivo e diagnóstico eletrônico." },
  { icon: Droplet, title: "Limpeza de Bicos", desc: "Limpeza e teste de bicos injetores." },
];

const faqs = [
  {
    q: "Os pneus têm garantia?",
    a: "Sim. Trabalhamos com pneus novos com 5 anos de garantia, montados na loja em base de troca.",
  },
  {
    q: "Quais marcas de pneus vocês vendem?",
    a: "Bridgestone, Continental, Dunlop, Firestone, Goodyear, Pirelli, Linglong, XBRI e linha importada.",
  },
  {
    q: "Além de pneus, quais serviços são oferecidos?",
    a: "Alinhamento 3D, balanceamento, suspensão, freios, injeção eletrônica, troca de óleo, embreagem, correia dentada, ar-condicionado e diagnóstico completo.",
  },
  {
    q: "Como faço um orçamento?",
    a: `Fale com um especialista pelo WhatsApp ou ligue para ${PHONE_DISPLAY}. O orçamento é gratuito e sem compromisso.`,
  },
  {
    q: "Onde a PneuZ Araucária está localizada?",
    a: `${ADDRESS}. Estamos em ótima localização para atender clientes de Araucária e região metropolitana de Curitiba.`,
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Header />
      <Hero />
      <Brands />
      <Services />
      <About />
      <Reviews />
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
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs font-semibold sm:text-sm">
        <div className="flex flex-wrap items-center gap-4">
          <a href={`tel:+554137950480`} className="flex items-center gap-2 hover:opacity-80">
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
          <span className="hidden items-center gap-2 sm:flex">
            <MapPin className="h-4 w-4" /> Av. Dr. Vítor do Amaral, 1380 — Centro, Araucária/PR
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:opacity-80">
            <MessageCircle className="h-4 w-4" /> Cupom ARAU1446
          </a>
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
    { href: "#depoimentos", label: "Depoimentos" },
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
          Pneus novos com <span className="text-[var(--accent-yellow)]">5 anos de garantia</span> em Araucária.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/85">
          Mais de 20 anos de mercado. Pneus, alinhamento 3D, balanceamento e mecânica automotiva com equipamentos de primeira linha e preço justo.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[var(--accent-yellow)] px-7 py-3.5 text-sm font-bold text-primary shadow-[var(--shadow-yellow)] transition-transform hover:-translate-y-0.5"
          >
            Fale com um especialista
          </a>
          <a
            href="#servicos"
            className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            Nossos serviços
          </a>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-6 text-xs font-semibold uppercase tracking-widest text-white/70">
          <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[var(--accent-yellow)]" /> 5 anos de garantia</span>
          <span className="flex items-center gap-2"><Gauge className="h-4 w-4 text-[var(--accent-yellow)]" /> Alinhamento 3D</span>
          <span className="flex items-center gap-2"><CircleDot className="h-4 w-4 text-[var(--accent-yellow)]" /> +20 anos de mercado</span>
        </div>
      </div>
    </section>
  );
}

function Promos() {
  return (
    <section id="promocoes" className="relative -mt-12 pb-4">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-3xl bg-primary p-6 shadow-[var(--shadow-brand)] md:p-10" style={{ background: "var(--gradient-hero)" }}>
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-2 inline-block rounded-full bg-[var(--accent-yellow)] px-4 py-1 text-[10px] font-black uppercase tracking-widest text-primary">
                Copa das Ofertas
              </div>
              <h2 className="text-2xl font-black text-white md:text-3xl">Pneus em promoção</h2>
              <p className="mt-1 text-sm text-white/70">*Promoção válida para pneus montados na loja em base de troca.</p>
            </div>
            <span className="rounded-full border border-[var(--accent-yellow)]/40 px-4 py-1.5 text-xs font-bold text-[var(--accent-yellow)]">
              Cupom ARAU1446
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {promos.map((p) => (
              <div key={p.aro} className="rounded-2xl bg-white p-5 text-center shadow-lg transition-transform hover:-translate-y-1">
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{p.aro}</div>
                <div className="mt-2 flex items-baseline justify-center gap-1 text-primary">
                  <span className="text-xs font-bold">A partir de R$</span>
                </div>
                <div className="text-4xl font-black text-primary">{p.price}</div>
                <a
                  href={waLink(p.msg)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block rounded-full bg-[var(--accent-yellow)] px-4 py-2 text-xs font-bold text-primary transition-transform hover:-translate-y-0.5"
                >
                  Cotação WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Brands() {
  return (
    <section className="border-y border-border bg-muted/50 py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 text-center">
          <h3 className="text-sm font-black uppercase tracking-widest text-primary">
            Trabalhamos com as melhores marcas
          </h3>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {brands.map((b) => (
            <span
              key={b}
              className="rounded-full border border-border bg-card px-5 py-2 text-sm font-bold uppercase tracking-wider text-primary shadow-sm"
            >
              {b}
            </span>
          ))}
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
          <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-brand)]">
            <img
              src={oficinaImg}
              alt="Fachada da oficina PneuZ Araucária"
              width={1600}
              height={1200}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
        <div>
          <div className="mb-3 inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--accent-yellow)]">
            Sobre nós
          </div>
          <h2 className="text-3xl font-black leading-tight text-primary md:text-4xl">
            +20 anos de mercado em pneus e reparação automotiva
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/80">
            A PneuZ é referência na venda de pneus e reparação automotiva, sendo uma das maiores
            redes de centro automotivo do país. Trabalhamos apenas com produtos e tecnologias mais
            avançadas do mercado, buscando sempre a segurança dos nossos clientes.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            Nossa unidade de Araucária conta com equipe qualificada e equipamentos de primeira
            linha para oferecer atendimento impecável e o mais alto padrão em serviços de
            mecânica automotiva. Avaliações sem compromisso e um especialista para acompanhar
            cada atendimento.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            <Stat n="+20" label="Anos de mercado" />
            <Stat n="5 anos" label="Garantia dos pneus" />
            <Stat n="3D" label="Alinhamento" />
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
          <ContactCard
            icon={MapPin}
            title="Endereço"
            lines={["Av. Dr. Vítor do Amaral, 1380", "Centro, Araucária — PR", "CEP 83702-040"]}
          />
          <ContactCard
            icon={Phone}
            title="Telefone / WhatsApp"
            lines={[PHONE_DISPLAY, "Atendimento com especialista"]}
          />
          <ContactCard
            icon={Clock}
            title="Horário"
            lines={["Seg a Sex: 08h — 18h", "Sábado: 08h — 12h"]}
          />
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-yellow)] px-8 py-3.5 text-sm font-bold text-primary shadow-[var(--shadow-yellow)] transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-3.5 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <MapPin className="h-4 w-4" /> Como chegar
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
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> Av. Dr. Vítor do Amaral, 1380 — Centro, Araucária/PR</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> {PHONE_DISPLAY}</li>
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
