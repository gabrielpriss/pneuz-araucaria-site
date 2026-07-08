import { createFileRoute } from "@tanstack/react-router";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
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
  X,
  Send,
} from "lucide-react";
import logoAsset from "@/assets/pneuz-logo.asset.json";
import iconAsset from "@/assets/pneuz-icon.asset.json";
import heroImg from "@/assets/hero-tires.jpg";
import oficinaAsset from "@/assets/oficina-pneuz.asset.json";
import { Star } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const PHONE_DISPLAY = "(99) 99999-9999";
const ADDRESS = "Av. Dr. Vítor do Amaral, 1380, Centro, Araucária, PR, 83702-040";
const MAPS_URL =
  "https://www.google.com/maps?daddr=Av.+Dr.+V%C3%ADtor+do+Amaral,+1380+-+Centro,+Arauc%C3%A1ria+-+PR,+83702-040";

const WA_PHONE = "5599999999999";
const waLink = (msg: string) =>
  `https://api.whatsapp.com/send?phone=${WA_PHONE}&text=${encodeURIComponent(msg)}`;

const WHATSAPP = waLink(
  "Olá, vim pelo site e gostaria de mais informações. Envie este cupom para ter descontos.",
);

import bridgestoneAsset from "@/assets/brands/bridgestone.png.asset.json";
import continentalAsset from "@/assets/brands/continental.png.asset.json";
import dunlopAsset from "@/assets/brands/dunlop.png.asset.json";
import firestoneAsset from "@/assets/brands/firestone.png.asset.json";
import goodyearAsset from "@/assets/brands/goodyear.png.asset.json";
import pirelliAsset from "@/assets/brands/pirelli.png.asset.json";
import linglongAsset from "@/assets/brands/linglong.png.asset.json";
import xbriAsset from "@/assets/brands/xbri.png.asset.json";
import importadosAsset from "@/assets/brands/importados.png.asset.json";

const brands = [
  { name: "Bridgestone", src: bridgestoneAsset.url },
  { name: "Continental", src: continentalAsset.url },
  { name: "Dunlop", src: dunlopAsset.url },
  { name: "Firestone", src: firestoneAsset.url },
  { name: "Goodyear", src: goodyearAsset.url },
  { name: "Pirelli", src: pirelliAsset.url },
  { name: "Linglong", src: linglongAsset.url },
  { name: "XBRI", src: xbriAsset.url },
  { name: "Importados", src: importadosAsset.url },
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

type WhatsIntent = { subject?: string; message?: string; headline?: string };
const WhatsContext = createContext<(intent?: WhatsIntent) => void>(() => {});
const useOpenWhats = () => useContext(WhatsContext);

function Index() {
  const [intent, setIntent] = useState<WhatsIntent | null>(null);
  const open = useCallback((i?: WhatsIntent) => setIntent(i ?? {}), []);
  return (
    <WhatsContext.Provider value={open}>
      <div className="min-h-screen bg-background text-foreground">
        <TopBar />
        <Header />
        <Hero />
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
        {intent && <WhatsAppModal intent={intent} onClose={() => setIntent(null)} />}
      </div>
    </WhatsContext.Provider>
  );
}

function TopBar() {
  return (
    <div className="w-full border-b border-border/70 bg-background/95">
      <div className="mx-auto flex max-w-7xl justify-end px-4 py-2.5 sm:py-3">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <a href="#" aria-label="Instagram" className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-primary">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Facebook" className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-primary">
            <Facebook className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const openWhats = useOpenWhats();
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
          <button
            type="button"
            onClick={() => openWhats({ subject: "Orçamento de pneus", message: "gostaria de solicitar um orçamento." })}
            className="rounded-full bg-[var(--accent-yellow)] px-5 py-2 text-sm font-bold text-primary shadow-[var(--shadow-yellow)] transition-transform hover:-translate-y-0.5"
          >
            Orçamento
          </button>
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
            <button
              type="button"
              onClick={() => { setOpen(false); openWhats({ subject: "Orçamento de pneus", message: "gostaria de solicitar um orçamento." }); }}
              className="mt-2 rounded-full bg-[var(--accent-yellow)] px-5 py-2 text-center text-sm font-bold text-primary"
            >
              Orçamento
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const openWhats = useOpenWhats();
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, oklch(0.22 0.14 267 / 0.92) 0%, oklch(0.32 0.16 267 / 0.75) 60%, oklch(0.22 0.14 267 / 0.6) 100%)" }} />
      </div>
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:py-24 md:py-32 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div className="flex flex-col items-start">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--accent-yellow)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-primary sm:text-xs">
            <CircleDot className="h-3.5 w-3.5" /> Centro Automotivo
          </span>
          <h1 className="max-w-3xl text-3xl font-black leading-[1.05] tracking-tight text-white sm:text-4xl md:text-6xl">
            Seu carro merece <span className="text-[var(--accent-yellow)]">cuidado de especialista</span>. Pneus e serviços automotivos completos em Araucária.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg">
            Tenha acesso às melhores marcas de pneus, serviços de manutenção e uma equipe especializada perto de você. Faça seu orçamento e receba as melhores condições sem precisar sair de Araucária.
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <button
              type="button"
              onClick={() => openWhats({ subject: "Informações comerciais", message: "gostaria de falar com um especialista." })}
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent-yellow)] px-7 py-3.5 text-sm font-bold text-primary shadow-[var(--shadow-yellow)] transition-transform hover:-translate-y-0.5"
            >
              Fale com um especialista
            </button>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Nossos serviços
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 sm:mt-10 sm:gap-6 sm:text-xs">
            <span className="flex items-center gap-2"><Star className="h-4 w-4 fill-[var(--accent-yellow)] text-[var(--accent-yellow)]" /> +1.000 avaliações no Google</span>
            <span className="flex items-center gap-2"><CircleDot className="h-4 w-4 text-[var(--accent-yellow)]" /> Até 10x sem juros</span>
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[var(--accent-yellow)]" /> Garantia em produtos e serviços</span>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-[var(--accent-yellow)] opacity-40 blur-3xl" />
          <div className="absolute -bottom-6 -right-6 h-48 w-48 rounded-full bg-primary-glow opacity-40 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/20 shadow-[var(--shadow-brand)] ring-1 ring-white/10">
            <img
              src={oficinaAsset.url}
              alt="Fachada da sede PneuZ em Araucária"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent p-5">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--accent-yellow)]">Nossa sede</div>
                  <div className="mt-1 text-lg font-black leading-tight text-white">Av. Dr. Vítor do Amaral, 1380</div>
                  <div className="text-xs text-white/80">Centro, Araucária/PR</div>
                </div>
                <div className="rounded-xl bg-[var(--accent-yellow)] px-3 py-2 text-center text-primary">
                  <div className="text-lg font-black leading-none">+1k</div>
                  <div className="text-[9px] font-bold uppercase tracking-widest">Clientes</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-brand)]">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-[var(--accent-yellow)]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-black text-primary">Estrutura de grande rede</div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Atendimento local</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Brands() {
  const openWhats = useOpenWhats();
  return (
    <section className="relative overflow-hidden border-y border-border bg-radial-brand py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 text-center">
          <h3 className="text-sm font-black uppercase tracking-widest text-primary">
            Trabalhamos com as melhores marcas
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Pneus de qualidade para cada tipo de veículo, escolhemos considerando modelo, uso, orçamento e segurança.
          </p>
        </div>
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
          <button
            type="button"
            onClick={() => openWhats({ subject: "Orçamento de pneus", message: "quero ajuda para encontrar o pneu ideal para o meu carro." })}
            className="inline-block rounded-full bg-primary px-7 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-brand)] transition-transform hover:-translate-y-0.5"
          >
            Encontrar o pneu ideal para meu carro
          </button>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const openWhats = useOpenWhats();
  return (
    <section id="servicos" className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-dots" />
      <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(180deg, oklch(1 0 0) 0%, oklch(0.98 0.01 260) 100%)" }} />
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 text-center">
          <div className="mb-3 inline-block rounded-full bg-[var(--accent-yellow)] px-5 py-1.5 text-xs font-black uppercase tracking-widest text-primary">
            Serviços
          </div>
          <h2 className="text-3xl font-black text-primary md:text-4xl">O que fazemos por você</h2>
          <p className="mt-3 text-muted-foreground">Do pneu novo à revisão completa, cuidamos de cada detalhe.</p>
        </div>
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
          <button
            type="button"
            onClick={() => openWhats({ subject: "Revisão / mecânica", message: "gostaria de agendar uma avaliação do meu veículo." })}
            className="inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-brand)] transition-transform hover:-translate-y-0.5"
          >
            Agendar avaliação do meu veículo
          </button>
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
        <div className="mb-14 text-center">
          <div className="mb-3 inline-block rounded-full bg-[var(--accent-yellow)] px-5 py-1.5 text-xs font-black uppercase tracking-widest text-primary">
            Diferenciais
          </div>
          <h2 className="text-2xl font-black text-white sm:text-3xl md:text-4xl">Por que escolher a PneuZ Araucária?</h2>
          <p className="mt-3 text-white/70">Uma loja local com estrutura de grande rede, franquia reconhecida, atendimento próximo e personalizado.</p>
        </div>
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
  const openWhats = useOpenWhats();
  const steps = [
    { icon: MessageCircle, title: "Chame pelo WhatsApp", desc: "Informe seu veículo ou necessidade." },
    { icon: MapPin, title: "Venha até nossa loja", desc: "Realizamos uma avaliação completa." },
    { icon: Search, title: "Receba seu orçamento", desc: "Nossa equipe apresenta as melhores opções." },
    { icon: Wrench, title: "Faça o serviço com segurança", desc: "Seu carro recebe o cuidado necessário com transparência." },
  ];
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 bg-radial-brand">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 text-center">
          <div className="mb-3 inline-block rounded-full bg-[var(--accent-yellow)] px-5 py-1.5 text-xs font-black uppercase tracking-widest text-primary">
            Como funciona
          </div>
          <h2 className="text-2xl font-black text-primary sm:text-3xl md:text-4xl">Resolver o problema do seu carro é simples</h2>
        </div>
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
          <button
            type="button"
            onClick={() => openWhats({ subject: "Orçamento de pneus", message: "quero receber meu orçamento agora." })}
            className="inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-brand)] transition-transform hover:-translate-y-0.5"
          >
            Receber meu orçamento agora
          </button>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const openWhats = useOpenWhats();
  const perks = [
    "Avaliação especializada",
    "Melhores opções para seu veículo",
    "Condições facilitadas",
    "Atendimento rápido pelo WhatsApp",
  ];
  return (
    <section className="relative overflow-hidden py-20 sm:py-24" style={{ background: "var(--gradient-hero)" }}>
      <div className="mx-auto max-w-4xl px-4 text-center">
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
          <button
            type="button"
            onClick={() => openWhats({ subject: "Orçamento de pneus", message: "quero meu orçamento, por favor." })}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-yellow)] px-10 py-4 text-base font-black uppercase tracking-wide text-primary shadow-[var(--shadow-yellow)] transition-transform hover:-translate-y-0.5"
          >
            Quero meu orçamento
          </button>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="relative overflow-hidden py-20 sm:py-24" style={{ background: "linear-gradient(135deg, oklch(0.98 0.01 260) 0%, oklch(0.94 0.03 90 / 0.4) 100%)" }}>
      <div className="absolute inset-0 -z-0 opacity-40 bg-dots" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:items-center">
        <div className="relative">
          <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[var(--accent-yellow)] opacity-70 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-brand)]">
            <img
              src={oficinaAsset.url}
              alt="Fachada da oficina PneuZ Araucária"
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
        </div>
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
        <div className="mb-12 text-center">
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
        </div>
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
            href="https://www.google.com/search?q=PneuZ+Arauc%C3%A1ria"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Ver todas as avaliações no Google
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
        <div className="mb-14 text-center">
          <div className="mb-3 inline-block rounded-full bg-[var(--accent-yellow)] px-5 py-1.5 text-xs font-black uppercase tracking-widest text-primary">
            Contato
          </div>
          <h2 className="text-2xl font-black text-primary sm:text-3xl md:text-4xl">Entre em contato</h2>
          <p className="mt-3 text-muted-foreground">Estamos prontos para atender você em Araucária.</p>
        </div>
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
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent-yellow)] px-7 py-3.5 text-sm font-bold text-primary shadow-[var(--shadow-yellow)] transition-transform hover:-translate-y-0.5 sm:px-8"
          >
            <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
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
        <div className="mb-10 text-center">
          <div className="mb-3 inline-block rounded-full bg-primary px-5 py-1.5 text-xs font-black uppercase tracking-widest text-[var(--accent-yellow)]">
            FAQ
          </div>
          <h2 className="text-2xl font-black text-primary sm:text-3xl md:text-4xl">Perguntas frequentes</h2>
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
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <img src={logoAsset.url} alt="PneuZ Araucária" className="h-14 w-auto rounded-lg bg-white p-2" />
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
            <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 p-2.5 hover:bg-[var(--accent-yellow)] hover:text-primary"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="rounded-full bg-white/10 p-2.5 hover:bg-[var(--accent-yellow)] hover:text-primary"><Facebook className="h-5 w-5" /></a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="rounded-full bg-white/10 p-2.5 hover:bg-[var(--accent-yellow)] hover:text-primary"><MessageCircle className="h-5 w-5" /></a>
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
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir chat do WhatsApp"
        className="animate-wa-pulse fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-brand)] transition-transform hover:scale-110 sm:bottom-6 sm:right-6"
      >
        <MessageCircle className="h-7 w-7" />
      </button>
      {open && <WhatsAppModal onClose={() => setOpen(false)} />}
    </>
  );
}

function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

const SUBJECTS = [
  "Orçamento de pneus",
  "Alinhamento e balanceamento",
  "Revisão / mecânica",
  "Informações comerciais",
  "Suporte técnico",
  "Outros",
];

function WhatsAppModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState(SUBJECTS[0]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const canSend = name.trim().length >= 2 && phone.replace(/\D/g, "").length >= 10;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSend) return;
    const msg =
      `Olá, PneuZ! Meu nome é ${name.trim()}.` +
      `\nAssunto: ${subject}.` +
      `\nMeu WhatsApp: ${phone}.` +
      `\nGostaria de mais informações, obrigado!`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm animate-fade-in sm:items-center sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md overflow-hidden rounded-t-3xl bg-[#ECE5DD] shadow-2xl sm:rounded-3xl"
      >
        <div className="flex items-center justify-between gap-3 bg-[#075E54] px-5 py-4 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366]">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold">PneuZ Araucária</div>
              <div className="flex items-center gap-1.5 text-[11px] text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" /> Online agora
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="rounded-full p-1.5 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div
          className="px-5 py-4"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        >
          <div className="mb-4 max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-sm text-gray-800 shadow-sm">
            Olá! 👋 Preencha seus dados para iniciarmos o atendimento no WhatsApp.
          </div>

          <form onSubmit={handleSend} className="space-y-3">
            <div>
              <label className="mb-1 block text-xs font-semibold text-gray-700">Primeiro nome</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value.slice(0, 40))}
                placeholder="Seu nome"
                required
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/30"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-gray-700">Número de WhatsApp</label>
              <input
                type="tel"
                inputMode="tel"
                value={phone}
                onChange={(e) => setPhone(maskPhone(e.target.value))}
                placeholder="(41) 99999-9999"
                required
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/30"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-gray-700">Assunto de interesse</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/30"
              >
                {SUBJECTS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              disabled={!canSend}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-md transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              <Send className="h-4 w-4" /> Iniciar conversa no WhatsApp
            </button>
            <p className="text-center text-[10px] text-gray-500">
              Ao continuar você será redirecionado para o WhatsApp.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
