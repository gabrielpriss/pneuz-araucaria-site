import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import {
  Wrench,
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
  CreditCard,
  Tag,
} from "lucide-react";
import logoAsset from "@/assets/pneuz-logo.jpg";
import iconAsset from "@/assets/pneuz-icon.png";
import oficinaAsset from "@/assets/oficina-pneuz.png";
import heroTiresImg from "@/assets/hero-tires.jpg";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import tireGoodyear4 from "@/assets/tires/tire-goodyear-4.webp";
import tireKelly2 from "@/assets/tires/tire-kelly-2.webp";
import tireKelly4 from "@/assets/tires/tire-kelly-4.webp";
import tireKellyEdge4 from "@/assets/tires/tire-kelly-edge-4.jpg";
import tireWheelProfile from "@/assets/tires/tire-wheel-profile.png";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export const Route = createFileRoute("/")({
  component: Index,
});

const PHONE_DISPLAY = "(41) 99900-3515";
const ADDRESS = "Av. Dr. Vítor do Amaral, 1380, Centro, Araucária, PR, 83702-040";
const MAPS_URL =
  "https://www.google.com/maps?daddr=Av.+Dr.+V%C3%ADtor+do+Amaral,+1380+-+Centro,+Arauc%C3%A1ria+-+PR,+83702-040";

const WA_PHONE = "5541999003515";
const waLink = (msg: string) =>
  `https://api.whatsapp.com/send?phone=${WA_PHONE}&text=${encodeURIComponent(msg)}`;

const WHATSAPP = waLink(
  "Olá, vim pelo site e gostaria de mais informações.",
);

const tirePromos = [
  { aro: 13, price: "189,90" },
  { aro: 14, price: "199,90" },
  { aro: 15, price: "209,90" },
  { aro: 16, price: "259,90" },
  { aro: 17, price: "309,90" },
];

const tireCarouselOpts = { loop: true, align: "start" as const };

const heroBenefits = [
  { icon: Tag, label: "Preços exclusivos para instalação em loja" },
  { icon: ShieldCheck, label: "Garantia de 5 anos em todos os pneus" },
  { icon: CreditCard, label: "Parcelamento em até 10x no cartão" },
  { icon: Wrench, label: "Instalação rápida por profissionais especializados" },
  { icon: MessageCircle, label: "Orçamento imediato pelo WhatsApp" },
];

import bridgestoneAsset from "@/assets/brands/bridgestone.png";
import continentalAsset from "@/assets/brands/continental.png";
import dunlopAsset from "@/assets/brands/dunlop.png";
import firestoneAsset from "@/assets/brands/firestone.png";
import goodyearAsset from "@/assets/brands/goodyear.png";
import pirelliAsset from "@/assets/brands/pirelli.png";
import linglongAsset from "@/assets/brands/linglong.png";
import xbriAsset from "@/assets/brands/xbri.png";
import importadosAsset from "@/assets/brands/importados.png";

const brands = [
  { name: "Bridgestone", src: bridgestoneAsset },
  { name: "Continental", src: continentalAsset },
  { name: "Dunlop", src: dunlopAsset },
  { name: "Firestone", src: firestoneAsset },
  { name: "Goodyear", src: goodyearAsset },
  { name: "Pirelli", src: pirelliAsset },
  { name: "Linglong", src: linglongAsset },
  { name: "XBRI", src: xbriAsset },
  { name: "Importados", src: importadosAsset },
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
  {
    name: "Rafael Souza",
    meta: "5 avaliações",
    when: "1 mês atrás",
    text: "Comprei pneus novos e fiz alinhamento, serviço rápido e preço justo. Equipe atenciosa e loja bem organizada. Voltarei sempre.",
  },
];

const services = [
  { icon: Zap, title: "Sistema de Injeção Eletrônica", desc: "Diagnóstico e reparo eletrônico para o motor voltar a render como novo." },
  { icon: Cog, title: "Troca de Embreagem", desc: "Substituição completa do kit de embreagem com peças de qualidade." },
  { icon: Wrench, title: "Revisão Completa de Suspensão", desc: "Amortecedores, molas, buchas e batentes revisados por especialistas." },
  { icon: ShieldCheck, title: "Revisão do Sistema de Freios", desc: "Discos, pastilhas, lonas e fluido inspecionados para máxima segurança." },
  { icon: Snowflake, title: "Higienização do Ar-Condicionado", desc: "Elimina odores e bactérias, com recarga de gás quando necessário." },
  { icon: Droplet, title: "Troca de Óleo e Filtros", desc: "Óleo, filtro de óleo, ar e combustível trocados com produtos originais." },
  { icon: Settings, title: "Troca de Correia Dentada", desc: "Troca preventiva de correia e tensores, evitando quebras no motor." },
  { icon: Zap, title: "Revisão do Sistema de Injeção", desc: "Testes e ajustes no sistema para performance e economia de combustível." },
  { icon: Search, title: "Diagnóstico Completo", desc: "Scanner automotivo lê códigos e identifica falhas com precisão." },
  { icon: CircleDot, title: "Pneus Novos", desc: "Pneus das melhores marcas com garantia e montagem na loja." },
  { icon: Droplet, title: "Limpeza de Bico", desc: "Limpeza por ultrassom para restabelecer a vazão correta dos bicos." },
  { icon: Gauge, title: "Alinhamento 3D e Balanceamento", desc: "Alinhamento computadorizado 3D e balanceamento eletrônico de rodas." },
];

const faqs = [
  {
    q: "Vocês vendem apenas pneus?",
    a: "Não. Somos um centro automotivo completo com serviços de manutenção mecânica, elétrica e revisões.",
  },
  {
    q: "Preciso agendar?",
    a: "Não necessariamente. Mas pelo WhatsApp conseguimos agilizar o seu atendimento.",
  },
  {
    q: "Vocês possuem pneus para todos os veículos?",
    a: "Trabalhamos com diversas medidas e marcas. Consulte a disponibilidade para o seu modelo pelo WhatsApp.",
  },
  {
    q: "Posso parcelar?",
    a: "Sim. Temos condições de pagamento em até 10x sem juros.",
  },
  {
    q: "Os pneus têm garantia?",
    a: "Sim. Trabalhamos com pneus novos com garantia, montados na loja.",
  },
  {
    q: "Vocês fazem revisão antes de trocar peças?",
    a: "Sim. Prezamos pela transparência e indicamos apenas o que realmente for necessário.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Header />
      <Hero />
      <TireOffers />
      <Brands />
      <Services />
      <WhyUs />
      <HowItWorks />
      <About />
      <Reviews />
      <FinalCTA />
      <Contact />
      <FAQ />
      <Footer />
      <FloatingWhats />
    </div>
  );
}

function TopBar() {
  return (
    <div className="w-full border-b border-border/70 bg-background/95">
      <div className="mx-auto flex max-w-7xl justify-end px-4 py-2.5 sm:py-3">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <a href="https://www.instagram.com/pneuz_araucaria" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-primary">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="https://www.facebook.com/pneuzaraucaria/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-primary">
            <Facebook className="h-4 w-4" />
          </a>
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
          <img src={iconAsset} alt="PneuZ Araucária" className="h-11 w-11" />
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
            href={waLink("Olá, gostaria de solicitar um orçamento.")}
            target="_blank"
            rel="noopener noreferrer"
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
            <a
              href={waLink("Olá, gostaria de solicitar um orçamento.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[var(--accent-yellow)] px-5 py-2 text-center text-sm font-bold text-primary"
            >
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
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={heroTiresImg}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, oklch(0.08 0.02 260 / 0.94) 0%, oklch(0.16 0.06 264 / 0.9) 45%, oklch(0.22 0.1 265 / 0.6) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      </div>
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[var(--accent-yellow)] opacity-15 blur-[110px]" aria-hidden="true" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent-red opacity-20 blur-[120px]" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 pb-24 pt-16 sm:pb-28 sm:pt-20 lg:grid-cols-[1.1fr_1fr] lg:pb-32 lg:pt-28">
        <div className="flex flex-col items-start">
          <span className="animate-hero-rise mb-5 inline-flex items-center gap-2 rounded-full border border-accent-red/40 bg-accent-red/15 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.25em] text-white sm:text-xs">
            <Zap className="h-3.5 w-3.5 text-[var(--accent-yellow)]" /> Oferta por tempo limitado
          </span>
          <h1
            className="animate-hero-rise max-w-xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
            style={{ animationDelay: "90ms" }}
          >
            Pneus novos. <span className="text-[var(--accent-yellow)]">Preço imbatível.</span> Instalação na hora.
          </h1>
          <p
            className="animate-hero-rise mt-5 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg"
            style={{ animationDelay: "180ms" }}
          >
            As melhores marcas do mercado, montagem especializada e condições facilitadas para você sair rodando com segurança hoje mesmo, no nosso centro automotivo completo em Araucária.
          </p>

          <ul
            className="animate-hero-rise mt-7 grid w-full grid-cols-1 gap-2.5 sm:grid-cols-2"
            style={{ animationDelay: "270ms" }}
          >
            {heroBenefits.map((b) => (
              <li
                key={b.label}
                className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs font-semibold text-white/90 backdrop-blur"
              >
                <b.icon className="h-4 w-4 shrink-0 text-[var(--accent-yellow)]" /> {b.label}
              </li>
            ))}
          </ul>

          <div
            className="animate-hero-rise mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            style={{ animationDelay: "360ms" }}
          >
            <a
              href={waLink("Olá, vim pelo site e quero solicitar um orçamento de pneus.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent-red px-8 py-4 text-sm font-black uppercase tracking-wide text-white shadow-[0_20px_45px_-15px_oklch(0.57_0.22_27_/_0.75)] transition-all hover:-translate-y-1 hover:shadow-[0_28px_55px_-15px_oklch(0.57_0.22_27_/_0.9)]"
            >
              <MessageCircle className="h-4 w-4 transition-transform group-hover:scale-110" /> Solicitar orçamento no WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Ver todos os serviços
            </a>
          </div>

          <div
            className="animate-hero-rise mt-8 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60 sm:text-xs"
            style={{ animationDelay: "440ms" }}
          >
            <Star className="h-4 w-4 fill-[var(--accent-yellow)] text-[var(--accent-yellow)]" /> +1.000 avaliações no Google
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[28rem] items-center justify-center py-4 lg:mx-0">
          <div className="absolute inset-4 -z-10 rounded-[2.5rem] bg-[var(--accent-yellow)]/25 blur-[80px]" aria-hidden="true" />
          <div className="absolute inset-4 -z-10 translate-x-8 translate-y-8 rounded-[2.5rem] bg-accent-red/20 blur-[100px]" aria-hidden="true" />
          <div className="absolute left-1/3 top-[-10%] -z-10 h-[120%] w-24 -rotate-[18deg] bg-gradient-to-b from-white/20 via-white/5 to-transparent blur-2xl" aria-hidden="true" />
          <div className="absolute right-1/3 top-[-10%] -z-10 h-[120%] w-24 rotate-[18deg] bg-gradient-to-b from-white/10 via-white/5 to-transparent blur-2xl" aria-hidden="true" />

          <div className="animate-tire-float relative w-full overflow-hidden rounded-[2rem] border border-white/15 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/10">
            <img
              src={oficinaAsset}
              alt="Fachada da unidade PneuZ Araucária"
              className="aspect-[4/5] w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/5 to-transparent" aria-hidden="true" />
          </div>

          <div className="animate-badge-glow absolute -left-2 top-2 flex items-center gap-2 rounded-2xl border border-white/10 bg-primary/85 px-3.5 py-2.5 shadow-2xl backdrop-blur sm:-left-8 sm:top-6">
            <ShieldCheck className="h-5 w-5 shrink-0 text-[var(--accent-yellow)]" />
            <div className="leading-tight">
              <div className="text-sm font-black text-white">5 anos</div>
              <div className="text-[9px] font-bold uppercase tracking-widest text-white/60">de garantia</div>
            </div>
          </div>

          <div className="absolute -right-2 top-1/3 flex items-center gap-2 rounded-2xl border border-white/10 bg-primary/85 px-3.5 py-2.5 shadow-2xl backdrop-blur sm:-right-6">
            <CreditCard className="h-5 w-5 shrink-0 text-[var(--accent-yellow)]" />
            <div className="text-sm font-black text-white">10x sem juros</div>
          </div>

          <div className="animate-price-glow absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-2xl bg-[var(--accent-yellow)] px-5 py-3 text-center shadow-[var(--shadow-yellow)] sm:-bottom-4">
            <div className="text-[9px] font-black uppercase tracking-widest text-primary/70">a partir de</div>
            <div className="text-2xl font-black leading-none text-primary">R$ 189,90</div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 leading-[0] text-white" aria-hidden="true">
        <svg viewBox="0 0 1440 110" className="h-16 w-full sm:h-24" preserveAspectRatio="none">
          <path d="M0,50 C240,110 480,0 720,35 C960,70 1200,110 1440,55 L1440,110 L0,110 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}

const tirePromoPhotos = [tireKelly2, tireGoodyear4, tireKelly4, tireKellyEdge4, tireWheelProfile];

function TireOfferCard({ t, photo }: { t: { aro: number; price: string }; photo: string }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative flex h-36 w-full items-center justify-center overflow-hidden bg-radial-brand sm:h-40">
        <img
          src={photo}
          alt={`Pneu novo aro ${t.aro} disponível para instalação na PneuZ Araucária`}
          loading="lazy"
          className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" aria-hidden="true" />
        <span
          className="absolute -left-8 top-3 w-32 -rotate-45 bg-accent-red py-1 text-center text-[8px] font-black uppercase tracking-wider text-white shadow-md"
          aria-hidden="true"
        >
          Pneus novos
        </span>
        <span className="absolute right-2 top-2 flex h-10 w-10 flex-col items-center justify-center rounded-full bg-[var(--accent-yellow)]/95 text-center leading-none text-primary shadow-md">
          <span className="text-[6px] font-bold uppercase">até</span>
          <span className="text-xs font-black">10x</span>
        </span>
        <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full border border-primary/15 bg-white/70 px-2.5 py-1 text-[8px] font-black uppercase tracking-wide text-primary shadow-sm backdrop-blur-md">
          <ShieldCheck className="h-3 w-3 text-primary" /> Garantia de 5 anos
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center px-4 pb-5 pt-4 text-center">
        <div className="text-xs font-black uppercase tracking-widest text-primary">Aro {t.aro}</div>
        <div className="mt-2 rounded-2xl bg-primary px-4 py-2">
          <div className="text-[9px] font-bold uppercase tracking-wide text-white/60">a partir de</div>
          <div className="text-2xl font-black leading-none text-[var(--accent-yellow)]">R$ {t.price}</div>
        </div>
        <p className="mt-3 text-[10px] font-semibold leading-snug text-muted-foreground">
          Preço exclusivo para instalação em loja
        </p>
        <p className="text-[10px] font-semibold leading-snug text-muted-foreground">
          Parcelamento em até 10x no cartão
        </p>
        <a
          href={waLink(`Olá, vim pelo site e quero solicitar um orçamento do pneu Aro ${t.aro} a partir de R$ ${t.price}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-accent-red px-3 py-3 text-xs font-bold uppercase tracking-wide text-white shadow-md transition-colors hover:bg-primary"
        >
          <MessageCircle className="h-4 w-4" /> Solicitar orçamento
        </a>
      </div>
    </div>
  );
}

function TireOffers() {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);
  const autoplay = useRef(true);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setSelected(api.selectedScrollSnap());
    const onSelect = () => setSelected(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const id = window.setInterval(() => {
      if (autoplay.current) api.scrollNext();
    }, 4200);
    return () => window.clearInterval(id);
  }, [api]);

  const pause = useCallback(() => {
    autoplay.current = false;
  }, []);
  const resume = useCallback(() => {
    autoplay.current = true;
  }, []);

  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-10 sm:pb-20 sm:pt-14">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-red/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-accent-red">
            <Tag className="h-3.5 w-3.5" /> Ofertas da semana
          </span>
          <h2 className="mt-3 text-2xl font-black text-primary sm:text-3xl md:text-4xl">Preços exclusivos por aro</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm font-semibold text-muted-foreground">
            Preço exclusivo para instalação em nossa loja em Araucária. Parcelamento em até 10x no cartão.
          </p>
        </Reveal>

        <Carousel
          setApi={setApi}
          opts={tireCarouselOpts}
          onMouseEnter={pause}
          onMouseLeave={resume}
          onTouchStart={pause}
          className="mx-auto"
        >
          <CarouselContent className="-ml-4 py-2">
            {tirePromos.map((t, i) => (
              <CarouselItem key={t.aro} className="basis-[80%] pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <TireOfferCard t={t} photo={tirePromoPhotos[i % tirePromoPhotos.length]} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden border-accent-red text-accent-red hover:bg-accent-red hover:text-white sm:-left-4 sm:flex" />
          <CarouselNext className="hidden border-accent-red text-accent-red hover:bg-accent-red hover:text-white sm:-right-4 sm:flex" />
        </Carousel>

        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir para oferta ${i + 1}`}
              onClick={() => api?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all ${i === selected ? "w-6 bg-accent-red" : "w-1.5 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${visible ? "animate-hero-rise" : "opacity-0"} ${className}`}>
      {children}
    </div>
  );
}

function Brands() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-radial-brand py-12">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mb-6 text-center">
          <h3 className="text-sm font-black uppercase tracking-widest text-primary">
            Trabalhamos com as melhores marcas
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Pneus de qualidade para cada tipo de veículo, escolhemos considerando modelo, uso, orçamento e segurança.
          </p>
        </Reveal>
        <div className="marquee-mask overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-10 sm:gap-14">
            {[...brands, ...brands].map((b, i) => (
              <div
                key={`${b.name}-${i}`}
                className="flex h-20 w-40 shrink-0 items-center justify-center rounded-xl bg-card px-4 shadow-sm ring-1 ring-border sm:h-24 sm:w-48"
              >
                <img
                  src={b.src}
                  alt={b.name}
                  loading="lazy"
                  className="max-h-12 max-w-full object-contain sm:max-h-14"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <a
            href={waLink("Olá, quero ajuda para encontrar o pneu ideal para o meu carro.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-primary px-7 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-brand)] transition-transform hover:-translate-y-0.5"
          >
            Encontrar o pneu ideal para meu carro
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-dots" />
      <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(180deg, oklch(1 0 0) 0%, oklch(0.98 0.01 260) 100%)" }} />
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mb-14 text-center">
          <div className="mb-3 inline-block rounded-full bg-[var(--accent-yellow)] px-5 py-1.5 text-xs font-black uppercase tracking-widest text-primary">
            Serviços
          </div>
          <h2 className="text-3xl font-black text-primary md:text-4xl">O que fazemos por você</h2>
          <p className="mt-3 text-muted-foreground">Do pneu novo à revisão completa, cuidamos de cada detalhe.</p>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-brand)] sm:p-7"
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
            href={waLink("Olá, gostaria de agendar uma avaliação do meu veículo.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-brand)] transition-transform hover:-translate-y-0.5"
          >
            Agendar avaliação do meu veículo
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: MapPin, title: "Localização estratégica", desc: "Centro de Araucária/PR (CEP 83702-040), em avenida de grande movimento e fácil acesso." },
    { icon: Wrench, title: "Especialistas no segmento automotivo", desc: "Equipe com experiência e conhecimento técnico para indicar a melhor solução." },
    { icon: CircleDot, title: "Estoque competitivo", desc: "Mais opções de pneus e maior agilidade para atender sua necessidade." },
    { icon: ShieldCheck, title: "Preço competitivo", desc: "Condições especiais e parcelamento em até 10x sem juros." },
    { icon: MessageCircle, title: "Atendimento transparente", desc: "Você entende o que seu carro precisa antes de aprovar qualquer serviço." },
  ];
  return (
    <section className="relative overflow-hidden py-20 sm:py-24" style={{ background: "linear-gradient(160deg, oklch(0.32 0.16 267) 0%, oklch(0.22 0.14 267) 100%)" }}>
      <div className="absolute inset-0 -z-0 opacity-30 bg-grid" />
      <div className="relative">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mb-14 text-center">
          <div className="mb-3 inline-block rounded-full bg-[var(--accent-yellow)] px-5 py-1.5 text-xs font-black uppercase tracking-widest text-primary">
            Diferenciais
          </div>
          <h2 className="text-2xl font-black text-white sm:text-3xl md:text-4xl">Por que escolher a PneuZ Araucária?</h2>
          <p className="mt-3 text-white/70">Uma loja local com estrutura de grande rede, franquia reconhecida, atendimento próximo e personalizado.</p>
        </Reveal>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 [&>*:nth-child(1)]:lg:col-span-2 [&>*:nth-child(2)]:lg:col-span-2 [&>*:nth-child(3)]:lg:col-span-2 [&>*:nth-child(4)]:lg:col-span-3 [&>*:nth-child(5)]:lg:col-span-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/10">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)] text-primary">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-white/70">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: MessageCircle, title: "Chame pelo WhatsApp", desc: "Informe seu veículo ou necessidade." },
    { icon: MapPin, title: "Venha até nossa loja", desc: "Realizamos uma avaliação completa." },
    { icon: Search, title: "Receba seu orçamento", desc: "Nossa equipe apresenta as melhores opções." },
    { icon: Wrench, title: "Faça o serviço com segurança", desc: "Seu carro recebe o cuidado necessário com transparência." },
  ];
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 bg-radial-brand">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mb-14 text-center">
          <div className="mb-3 inline-block rounded-full bg-[var(--accent-yellow)] px-5 py-1.5 text-xs font-black uppercase tracking-widest text-primary">
            Como funciona
          </div>
          <h2 className="text-2xl font-black text-primary sm:text-3xl md:text-4xl">Resolver o problema do seu carro é simples</h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-black text-[var(--accent-yellow)]">
                {i + 1}
              </div>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-[var(--accent-yellow)]">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href={waLink("Olá, quero receber meu orçamento agora.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-brand)] transition-transform hover:-translate-y-0.5"
          >
            Receber meu orçamento agora
          </a>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const perks = [
    "Avaliação especializada",
    "Melhores opções para seu veículo",
    "Condições facilitadas",
    "Atendimento rápido pelo WhatsApp",
  ];
  return (
    <section className="relative overflow-hidden py-20 sm:py-24" style={{ background: "var(--gradient-hero)" }}>
      <Reveal className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-2xl font-black leading-tight text-white sm:text-3xl md:text-4xl">
          Precisa trocar pneus ou revisar seu carro? <span className="text-[var(--accent-yellow)]">Faça uma cotação agora.</span>
        </h2>
        <ul className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 text-left sm:grid-cols-2">
          {perks.map((p) => (
            <li key={p} className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur">
              <ShieldCheck className="h-5 w-5 text-[var(--accent-yellow)]" /> {p}
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <a
            href={waLink("Olá, quero meu orçamento, por favor.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-yellow)] px-10 py-4 text-base font-black uppercase tracking-wide text-primary shadow-[var(--shadow-yellow)] transition-transform hover:-translate-y-0.5"
          >
            Quero meu orçamento
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="relative overflow-hidden py-20 sm:py-24" style={{ background: "linear-gradient(135deg, oklch(0.98 0.01 260) 0%, oklch(0.94 0.03 90 / 0.4) 100%)" }}>
      <div className="absolute inset-0 -z-0 opacity-40 bg-dots" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:items-center">
        <Reveal className="relative">
          <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[var(--accent-yellow)] opacity-70 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-brand)]">
            <img
              src={oficinaAsset}
              alt="Fachada da unidade PneuZ Araucária"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent" aria-hidden="true" />
          </div>
        </Reveal>
        <Reveal>
          <div className="mb-3 inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--accent-yellow)]">
            Sobre nós
          </div>
          <h2 className="text-3xl font-black leading-tight text-primary md:text-4xl">
            Referência em pneus e reparação automotiva
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
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            <Stat n="Transparência" label="Você sabe o que seu carro precisa" />
            <Stat n="Honestidade" label="Indicamos só o necessário" />
            <Stat n="Qualidade" label="Produtos e serviços de primeira" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 text-center">
      <div className="text-lg font-black text-primary md:text-xl">{n}</div>
      <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

function Contact() {
  return <ContactSection />;
}

function Reviews() {
  return (
    <section id="depoimentos" className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(180deg, oklch(0.98 0.01 260) 0%, oklch(1 0 0) 100%)" }} />
      <div className="absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-[var(--accent-yellow)] opacity-20 blur-3xl" />
      <div className="absolute -right-24 bottom-24 -z-10 h-72 w-72 rounded-full bg-primary opacity-10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[var(--accent-yellow)] px-5 py-1.5 text-xs font-black uppercase tracking-widest text-primary">
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
              <path fill="#4285F4" d="M22 12.2c0-.7-.06-1.4-.18-2H12v3.8h5.6a4.8 4.8 0 0 1-2.08 3.15v2.6h3.36C20.9 18 22 15.4 22 12.2Z"/>
              <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.68-2.45l-3.36-2.6c-.93.63-2.13 1-3.32 1-2.55 0-4.72-1.72-5.5-4.05H3.05v2.55A10 10 0 0 0 12 22Z"/>
              <path fill="#FBBC05" d="M6.5 13.9a6 6 0 0 1 0-3.8V7.55H3.05a10 10 0 0 0 0 8.9L6.5 13.9Z"/>
              <path fill="#EA4335" d="M12 5.95a5.4 5.4 0 0 1 3.83 1.5l2.87-2.87A9.6 9.6 0 0 0 12 2a10 10 0 0 0-8.95 5.55L6.5 10.1c.78-2.33 2.95-4.15 5.5-4.15Z"/>
            </svg>
            Avaliações Google
          </div>
          <h2 className="text-2xl font-black text-primary sm:text-3xl md:text-4xl">O que nossos clientes dizem</h2>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-5 w-5 fill-[#FBBC05] text-[#FBBC05]" />
              ))}
            </div>
            <span className="text-sm font-bold text-primary">4,8</span>
            <span className="text-sm text-muted-foreground">· Avaliações verificadas</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">Mais de 1.000 clientes já avaliaram nossa loja no Google.</p>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-brand)]"
            >
              <div className="flex items-start justify-between gap-3">
                <header className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-base font-bold text-[var(--accent-yellow)]">
                    {r.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate font-bold text-primary">{r.name}</div>
                    <div className="truncate text-xs text-muted-foreground">{r.meta}</div>
                  </div>
                </header>
                <span className="rounded-full bg-[var(--accent-yellow)]/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  Google
                </span>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{r.when}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">{r.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={waLink("Olá, vi as avaliações no site e quero ser o próximo cliente satisfeito da PneuZ.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-yellow)] px-8 py-3.5 text-sm font-bold text-primary shadow-[var(--shadow-yellow)] transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" /> Quero um atendimento assim, falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contato" className="relative overflow-hidden py-20 sm:py-24 bg-radial-brand">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mb-14 text-center">
          <div className="mb-3 inline-block rounded-full bg-[var(--accent-yellow)] px-5 py-1.5 text-xs font-black uppercase tracking-widest text-primary">
            Contato
          </div>
          <h2 className="text-2xl font-black text-primary sm:text-3xl md:text-4xl">Entre em contato</h2>
          <p className="mt-3 text-muted-foreground">Estamos prontos para atender você em Araucária.</p>
        </Reveal>
        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          <ContactCard
            icon={MapPin}
            title="Endereço"
            lines={["Av. Dr. Vítor do Amaral, 1380", "Centro, Araucária, PR", "CEP 83702-040"]}
          />
          <ContactCard
            icon={Phone}
            title="Telefone / WhatsApp"
            lines={[PHONE_DISPLAY, "Atendimento com especialista"]}
          />
          <ContactCard
            icon={Clock}
            title="Horário"
            lines={["Seg a Sex: 08h às 18h", "Sábado: 08h às 12h"]}
          />
        </div>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={waLink("Olá, gostaria de falar com a PneuZ Araucária pelo WhatsApp.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent-yellow)] px-7 py-3.5 text-sm font-bold text-primary shadow-[var(--shadow-yellow)] transition-transform hover:-translate-y-0.5 sm:px-8"
          >
            <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
          </a>
          <a
            href={waLink("Olá, gostaria de saber como chegar até a loja e confirmar o endereço.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-7 py-3.5 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:px-8"
          >
            <MapPin className="h-4 w-4" /> Como chegar
          </a>
        </div>
        <div className="mt-10 overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-brand)]">
          <iframe
            title="Mapa da PneuZ Araucária"
            src="https://www.google.com/maps?q=Av.+Dr.+V%C3%ADtor+do+Amaral,+1380,+Centro,+Arauc%C3%A1ria+-+PR,+83702-040&output=embed"
            width="100%"
            height="360"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, title, lines }: { icon: typeof MapPin; title: string; lines: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-brand)] sm:p-7">
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
    <section className="relative overflow-hidden py-20 sm:py-24" style={{ background: "linear-gradient(180deg, oklch(1 0 0) 0%, oklch(0.96 0.02 267) 100%)" }}>
      <div className="mx-auto max-w-3xl px-4">
        <Reveal className="mb-10 text-center">
          <div className="mb-3 inline-block rounded-full bg-primary px-5 py-1.5 text-xs font-black uppercase tracking-widest text-[var(--accent-yellow)]">
            FAQ
          </div>
          <h2 className="text-2xl font-black text-primary sm:text-3xl md:text-4xl">Perguntas frequentes</h2>
        </Reveal>
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
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <img src={logoAsset} alt="PneuZ Araucária" className="h-14 w-auto rounded-lg bg-white p-2" />
          <p className="mt-4 text-sm text-white/70">
            Centro automotivo em Araucária, pneus, alinhamento, balanceamento e serviços para o seu carro.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-[var(--accent-yellow)]">Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="#servicos" className="hover:text-[var(--accent-yellow)]">Serviços</a></li>
            <li><a href="#sobre" className="hover:text-[var(--accent-yellow)]">Sobre nós</a></li>
            <li><a href="#depoimentos" className="hover:text-[var(--accent-yellow)]">Avaliações</a></li>
            <li><a href="#contato" className="hover:text-[var(--accent-yellow)]">Contato</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-[var(--accent-yellow)]">Contato</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> Av. Dr. Vítor do Amaral, 1380, Centro, Araucária/PR</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> {PHONE_DISPLAY}</li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4" /> Seg a Sex 08 às 18h · Sáb 08 às 12h</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-[var(--accent-yellow)]">Redes sociais</h4>
          <div className="flex gap-3">
            <a href="https://www.instagram.com/pneuz_araucaria" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full bg-white/10 p-2.5 hover:bg-[var(--accent-yellow)] hover:text-primary"><Instagram className="h-5 w-5" /></a>
            <a href="https://www.facebook.com/pneuzaraucaria/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full bg-white/10 p-2.5 hover:bg-[var(--accent-yellow)] hover:text-primary"><Facebook className="h-5 w-5" /></a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="rounded-full bg-white/10 p-2.5 hover:bg-[var(--accent-yellow)] hover:text-primary"><MessageCircle className="h-5 w-5" /></a>
          </div>
          <a href="#" className="mt-4 inline-block text-xs text-white/60 hover:text-[var(--accent-yellow)]">Política de privacidade</a>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} PneuZ Araucária, Todos os direitos reservados. · Desenvolvido por <a href="#" className="font-semibold text-[var(--accent-yellow)]">Conceito Prime Marketing Digital</a>
      </div>
    </footer>
  );
}

function FloatingWhats() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir chat do WhatsApp"
      className="animate-wa-pulse fixed bottom-4 right-4 z-50 flex h-16 w-16 items-center justify-center rounded-full transition-transform hover:scale-110 sm:bottom-6 sm:right-6"
    >
      <img src={whatsappIcon} alt="WhatsApp" width={64} height={64} className="h-16 w-16" loading="lazy" />
    </a>
  );
}
