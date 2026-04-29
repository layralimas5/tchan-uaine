import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Award,
  Globe2,
  Grape,
  Sparkles,
  Truck,
  Users,
  Wine,
  ChevronRight,
} from "lucide-react";

import heroWine from "@/assets/hero-wine.jpg";
import aboutCellar from "@/assets/about-cellar.jpg";
import importVineyards from "@/assets/import-vineyards.jpg";
import restaurant1 from "@/assets/restaurant-1.jpg";
import restaurant2 from "@/assets/restaurant-2.jpg";
import restaurant3 from "@/assets/restaurant-3.jpg";
import w4fImage from "@/assets/w4f-experience.jpg";

// 👇 AQUI ENTRAM AS LOGOS
import logoAleixo from "@/assets/aleixo-logo-branca.png";
import logoBalthazar from "@/assets/balthazar-logo-branca.png";
import logoBacco from "@/assets/bacco-logo.png";
import logoCasaDoVinho from "@/assets/casa-do-vinho.png";
import logoAleixoImobiliaria from "@/assets/aleixoimobiliaria-logo.png";
import logo1500 from "@/assets/1500-logo.png";
import logoCasaDiLuiza from "@/assets/casa-di-luiza-logo.png";
import logoPirao from "@/assets/piraorestaurante-logo.png";
import logoQpa from "@/assets/QPA_logo_branca.png";
import logoTomatto from "@/assets/tomatto-logo.png";
import logoW4F from "@/assets/logo-w4f.png";
import logoWineGarden from "@/assets/wine-garden-logo.png";

import { Header } from "@/components/uaine/Header";
import { Footer } from "@/components/uaine/Footer";
import { Counter } from "@/components/uaine/Counter";
import { RestaurantModal, type Restaurant } from "@/components/uaine/RestaurantModal";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Uaine Group · Viva o extraordinário" },
      {
        name: "description",
        content:
          "Uaine Group: importação, curadoria e experiências em vinho. Um grupo dedicado a elevar o universo do vinho a outro nível.",
      },
      { property: "og:title", content: "Uaine Group · Viva o extraordinário" },
      {
        property: "og:description",
        content: "O universo do vinho elevado a outro nível.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: UainePage,
});

// Editar aqui números, restaurantes, marcas e diferenciais facilmente
const stats = [
  { value: 2009, suffix: "", label: "Desde" },
  { value: 14, suffix: "", label: "Unidades de negócio" },
  { value: 200, suffix: "+", label: "Rótulos exclusivos" },
  { value: 3, suffix: "", label: "Estados atendidos" },
];

const restaurants: Restaurant[] = [
  {
    name: "Canto do Vinho",
    city: "Vila Velha · ES",
    logo: logoCasaDoVinho,
    description:
      "Casa intimista dedicada ao vinho, encontros especiais e experiências gastronômicas acolhedoras.",
    longDescription:
      "O Canto do Vinho traduz a essência da Uaine em uma experiência elegante, próxima e memorável. Um espaço pensado para quem aprecia bons rótulos, boa mesa e momentos que ficam na memória.",
    cover: restaurant1,
    gallery: [restaurant1, restaurant2, restaurant3],
  },
  {
    name: "Aleixo Restaurante",
    city: "Vitória · ES",
    logo: logoAleixo,
    description:
      "Gastronomia sofisticada, ambiente elegante e uma curadoria pensada para experiências à mesa.",
    longDescription:
      "O Aleixo Restaurante une gastronomia, atendimento refinado e atmosfera acolhedora. Uma operação voltada para experiências completas, onde cada detalhe fortalece o posicionamento premium do grupo.",
    cover: restaurant2,
    gallery: [restaurant2, restaurant1, restaurant3],
  },
  {
    name: "Bacco",
    city: "Espírito Santo",
    logo: logoBacco,
    description:
      "Experiência inspirada no universo do vinho, com sofisticação, sabor e conexão.",
    longDescription:
      "O Bacco carrega uma proposta ligada ao prazer da boa mesa e ao universo dos vinhos. Uma marca com presença, atmosfera sofisticada e forte potencial de experiência gastronômica.",
    cover: restaurant3,
    gallery: [restaurant3, restaurant1, restaurant2],
  },
  {
    name: "Casa Di Luiza",
    city: "Espírito Santo",
    logo: logoCasaDiLuiza,
    description:
      "Casa gastronômica com proposta acolhedora, elegante e cheia de identidade.",
    longDescription:
      "A Casa Di Luiza representa uma experiência gastronômica afetiva e refinada. Um espaço pensado para unir boa comida, ambiente agradável e momentos especiais.",
    cover: restaurant1,
    gallery: [restaurant1, restaurant2, restaurant3],
  },
  {
    name: "Pirão Restaurante",
    city: "Espírito Santo",
    logo: logoPirao,
    description:
      "Culinária brasileira com personalidade, tradição e sabor marcante.",
    longDescription:
      "O Pirão Restaurante valoriza a força da cozinha brasileira, trazendo sabor, identidade e tradição em uma experiência gastronômica com alma.",
    cover: restaurant2,
    gallery: [restaurant2, restaurant3, restaurant1],
  },
  {
    name: "Tomatto Trattoria",
    city: "Espírito Santo",
    logo: logoTomatto,
    description:
      "Trattoria de inspiração italiana, com massas, vinhos e atmosfera acolhedora.",
    longDescription:
      "A Tomatto Trattoria traz a essência da cozinha italiana em uma proposta charmosa e convidativa. Uma marca que combina gastronomia, vinho e aconchego.",
    cover: restaurant3,
    gallery: [restaurant3, restaurant1, restaurant2],
  },
  {
    name: "Wine Garden",
    city: "Espírito Santo",
    logo: logoWineGarden,
    description:
      "Ambiente leve e elegante para viver o vinho em momentos descontraídos.",
    longDescription:
      "O Wine Garden foi pensado como um espaço de encontro, celebração e descoberta. Uma experiência mais leve, visual e conectada ao lifestyle do vinho.",
    cover: restaurant1,
    gallery: [restaurant1, restaurant2, restaurant3],
  },
  {
    name: "Aleixo Imobiliária",
    city: "Espírito Santo",
    logo: logoAleixoImobiliaria,
    description:
      "Braço imobiliário do ecossistema, conectado à expansão e estrutura do grupo.",
    longDescription:
      "A Aleixo Imobiliária integra o ecossistema Uaine como frente estratégica ligada a expansão, patrimônio e oportunidades de negócio.",
    cover: restaurant2,
    gallery: [restaurant2, restaurant3, restaurant1],
  },
  {
    name: "QPA",
    city: "Espírito Santo",
    logo: logoQpa,
    description:
      "Marca parceira do grupo, conectada à operação e expansão do ecossistema.",
    longDescription:
      "A QPA compõe o ecossistema Uaine como uma frente estratégica de apoio, conexão e fortalecimento das operações do grupo.",
    cover: restaurant3,
    gallery: [restaurant3, restaurant1, restaurant2],
  },
  {
    name: "Alambique da Mata",
    city: "Espírito Santo",
    logo: logoBalthazar,
    description:
      "Produção artesanal com identidade brasileira, tradição e conexão com a origem.",
    longDescription:
      "O Alambique da Mata representa tradição, brasilidade e produção artesanal. Uma marca que valoriza origem, qualidade e experiência sensorial.",
    cover: restaurant1,
    gallery: [restaurant1, restaurant2, restaurant3],
  },
  {
    name: "Cachaça 1500",
    city: "Espírito Santo",
    logo: logo1500,
    description:
      "Marca de cachaça com presença forte, identidade nacional e proposta premium.",
    longDescription:
      "A Cachaça 1500 reforça o lado brasileiro do ecossistema, trazendo tradição, autenticidade e uma proposta de valor conectada à cultura nacional.",
    cover: restaurant2,
    gallery: [restaurant2, restaurant3, restaurant1],
  },
  {
    name: "Wine 4 Friends",
    city: "Brasil",
    logo: logoW4F,
    description:
      "Projeto principal da Uaine, unindo vinho, relacionamento e oportunidade de negócio.",
    longDescription:
      "O Wine 4 Friends é um dos principais projetos da Uaine Group. Ele conecta pessoas ao universo do vinho por meio de experiência, consumo inteligente e oportunidade de crescimento.",
    cover: restaurant3,
    gallery: [restaurant3, restaurant1, restaurant2],
  },
];

const differentiators = [
  {
    icon: Award,
    title: "Curadoria Estratégica",
    text: "Seleção criteriosa de vinhos com foco em qualidade, posicionamento e competitividade.",
  },
  {
    icon: Sparkles,
    title: "Estrutura Consolidada",
    text: "Operação empresarial estruturada nas frentes de importação, distribuição e experiência.",
  },
  {
    icon: Wine,
    title: "Modelo Escalável",
    text: "Negócio desenhado para crescer junto com parceiros, clientes e embaixadores.",
  },
  {
    icon: Globe2,
    title: "Posicionamento Premium",
    text: "Marca construída para gerar autoridade, desejo e percepção de valor.",
  },
];

const ecosystem = [
  {
    icon: Truck,
    label: "Importação",
    text: "Trazemos vinhos selecionados, com procedência e exclusividade garantidas.",
  },
  {
    icon: Grape,
    label: "Distribuição",
    text: "Operação estruturada para escalar o produto certo até o cliente certo.",
  },
  {
    icon: Wine,
    label: "Experiência",
    text: "Restaurantes, wine bar e eventos privados que materializam a marca.",
  },
  {
    icon: Users,
    label: "Parcerias",
    text: "Modelo de negócio que conecta pessoas a oportunidades reais de crescimento.",
  },
];


function UainePage() {
  useReveal();
  const [openRestaurant, setOpenRestaurant] = useState<Restaurant | null>(null);

  return (
    <div id="top" className="relative bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      {/* ========== HERO ========== */}
      <section className="relative min-h-screen w-full overflow-hidden grain text-[var(--cream)]">
        <img
          src={heroWine}
          alt="Taça de vinho elevada"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover scale-110 animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.14_0.06_18/0.85)] via-[oklch(0.14_0.06_18/0.55)] to-[oklch(0.14_0.06_18/0.95)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.14_0.06_18/0.6)_100%)]" />

        <div className="container-luxe relative z-10 min-h-screen flex flex-col justify-end pb-24 pt-40">
          <div className="max-w-4xl">
            <p className="eyebrow text-[var(--accent)] animate-fade-in">— Uaine Group · Est. Brasil</p>
            <h1 className="display-xl mt-6 text-[var(--cream)] animate-fade-up" style={{ animationDelay: "0.15s" }}>
              Viva o<br />
              <em>extraordinário.</em>
            </h1>
            <p
              className="mt-8 max-w-xl text-lg md:text-xl text-[oklch(0.97_0.008_60/0.8)] leading-relaxed animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              Um ecossistema completo que conecta vinho, experiências e oportunidades de negócio.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.45s" }}>
              <a href="#sobre" className="btn-base btn-cream">
                Conhecer o grupo <ArrowRight size={14} />
              </a>
              <a href="#contato" className="btn-base btn-outline-cream">
                Seja um parceiro
              </a>
            </div>
          </div>
        </div>

        {/* Vertical decorative label */}
        <div className="absolute right-6 bottom-24 hidden md:flex items-center gap-3 text-[oklch(0.97_0.008_60/0.55)]">
          <span className="vertical-text">Scroll · Descubra</span>
          <div className="w-px h-20 bg-[oklch(0.97_0.008_60/0.3)] animate-pulse" />
        </div>
      </section>

      {/* ========== STATS ========== */}
<section className="bg-[var(--wine)] text-[var(--cream)] py-8 md:py-9">        <div className="container-luxe">
          <div className="grid gap-y-10 gap-x-8 grid-cols-2 lg:grid-cols-4 reveal-on-scroll">
            {stats.map((s, i) => (
              <div
                key={i}
                className="text-center md:text-left md:border-l md:border-[oklch(0.97_0.008_60/0.15)] md:pl-6 md:first:border-l-0 md:first:pl-0"
              >
                <div
                  className="text-5xl md:text-6xl font-light text-[var(--accent)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  +<Counter to={s.value} suffix={s.suffix.replace("+", "")} />
                </div>
                <p className="mt-3 text-[0.7rem] tracking-[0.28em] uppercase text-[oklch(0.97_0.008_60/0.7)]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SOBRE ========== */}
      <section id="sobre" className="py-20 md:py-28 bg-[var(--background)]">
        <div className="container-luxe grid gap-12 lg:gap-16 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 reveal-on-scroll">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={aboutCellar}
                alt="Cave de vinhos da Uaine"
                width={1280}
                height={1600}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] hover:scale-105"
              />
              <div className="absolute -bottom-px left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-7 reveal-on-scroll">
            <p className="eyebrow">— Sobre a Uaine</p>
            <h2 className="display-lg mt-6">
              Mais que vinho.<br />
              <em>Ecossistema</em>.
            </h2>
            <p className="mt-8 text-lg text-[var(--muted-foreground)] leading-relaxed max-w-xl">
              A Uaine Group nasceu com o propósito de transformar o mercado de vinhos
              em uma experiência mais acessível, sofisticada e estratégica.
            </p>
            <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed max-w-xl">
              Atuamos conectando importação, distribuição e experiências, criando um
              ecossistema sólido que une qualidade, posicionamento e oportunidade
              de crescimento.
            </p>
            <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed max-w-xl">
              Mais do que comercializar vinhos, entregamos valor, conexão e construção de marca.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
              <div>
                <p className="eyebrow">Visão</p>
                <p className="mt-2 text-[var(--foreground)]">
                  Ser referência em luxo acessível no universo do vinho.
                </p>
              </div>
              <div>
                <p className="eyebrow">Posicionamento</p>
                <p className="mt-2 text-[var(--foreground)]">
                  Premium, contemporâneo e profundamente humano.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== IMPORTAÇÃO ========== */}
      <section id="importacao" className="relative py-20 md:py-28 bg-[var(--wine)] text-[var(--cream)] overflow-hidden">
        <img
          src={importVineyards}
          alt=""
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--wine)] via-[oklch(0.22_0.09_18/0.9)] to-[var(--wine)]" />

        <div className="container-luxe relative">
          <div className="reveal-on-scroll max-w-3xl">
            <p className="eyebrow">— Importação</p>
            <h2 className="display-lg mt-6 text-[var(--cream)]">
              Vinhos selecionados,<br /> <em>procedência</em> garantida.
            </h2>
            <p className="mt-6 text-lg text-[oklch(0.97_0.008_60/0.85)] leading-relaxed">
              Trabalhamos com a importação de vinhos selecionados, garantindo qualidade,
              procedência e exclusividade. Nossa curadoria é focada em entregar produtos que
              unem sabor, sofisticação e competitividade no mercado — com uma estrutura
              pensada para garantir eficiência logística e posicionamento estratégico.
            </p>
          </div>

          <div className="mt-12 md:mt-16 grid gap-6 md:grid-cols-3 reveal-on-scroll">
            {[
              {
                title: "Curadoria",
                text: "Seleção criteriosa de rótulos com foco em qualidade e diferencial.",
              },
              {
                title: "Qualidade",
                text: "Procedência garantida e padrão internacional em cada garrafa.",
              },
              {
                title: "Logística",
                text: "Estrutura pensada para eficiência e posicionamento estratégico.",
              },
            ].map((c, i) => (
              <div
                key={i}
                className="bg-[var(--cream)] text-[var(--wine)] p-7 md:p-9 luxe-card"
              >
                <p className="text-[0.7rem] tracking-[0.32em] uppercase text-[var(--accent)]">
                  0{i + 1}
                </p>
                <h3 className="mt-3 text-2xl md:text-3xl" style={{ fontFamily: "var(--font-display)" }}>
                  {c.title}
                </h3>
                <p className="mt-3 text-[var(--wine)]/75 leading-relaxed text-sm md:text-base">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WINE 4 FRIENDS ========== */}
      <section id="wine4friends" className="py-20 md:py-28 bg-[var(--background)]">
        <div className="container-luxe grid gap-12 lg:gap-16 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 reveal-on-scroll">
  <img
  src={logoW4F}
  alt="Wine 4 Friends"
  className="h-5 md:h-5 object-contain mb-5 drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)]"
/>
            <h2 className="display-lg mt-6">
              Wine 4 Friends.<br /> <em>Experiência</em> que vira oportunidade.
            </h2>
            <p className="mt-8 text-lg text-[var(--muted-foreground)] leading-relaxed">
              O Wine 4 Friends é um dos nossos principais projetos, criado para unir
              experiência, relacionamento e oportunidade.
            </p>
            <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
              Através dele, pessoas comuns conseguem entrar no universo do vinho de
              forma estratégica — seja para consumo ou construção de renda. Um modelo
              acessível e escalável que conecta produto, marca e crescimento pessoal.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Acesso ao portfólio importado da Uaine",
                "Modelo de renda recorrente e escalável",
                "Treinamentos e suporte da equipe",
                "Construção de marca pessoal junto ao vinho",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <ChevronRight size={18} className="mt-1 text-[var(--accent)] shrink-0" />
                  <span className="text-[var(--foreground)]">{b}</span>
                </li>
              ))}
            </ul>

            <a href="https://www.wine4friend.com.br/" className="mt-10 btn-base btn-wine">
              Seja um amigo <ArrowRight size={14} />
            </a>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 reveal-on-scroll">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={w4fImage}
                alt="Sommelier examinando taça de vinho"
                width={1600}
                height={1200}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] hover:scale-105"
              />
              <div className="absolute top-6 left-6 bg-[var(--cream)] text-[var(--wine)] px-5 py-3">
                <p className="text-[0.65rem] tracking-[0.32em] uppercase">Programa</p>
                <p className="text-2xl" style={{ fontFamily: "var(--font-display)" }}>
                  Wine 4 Friends
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== DIFERENCIAIS ========== */}
      <section className="py-20 md:py-28 bg-[oklch(0.97_0.008_60)]">
        <div className="container-luxe">
          <div className="reveal-on-scroll max-w-2xl">
            <p className="eyebrow">— Diferenciais</p>
            <h2 className="display-lg mt-6">
              Por que escolhem<br /> a <em>Uaine</em>.
            </h2>
          </div>

          <div className="mt-12 md:mt-16 grid gap-px bg-[var(--border)] md:grid-cols-2 lg:grid-cols-4 reveal-on-scroll">
            {differentiators.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.title}
                  className="bg-[oklch(0.97_0.008_60)] p-7 md:p-9 transition-all duration-500 hover:bg-[var(--cream)] group"
                >
                  <div className="h-11 w-11 grid place-items-center bg-[var(--wine)] text-[var(--cream)] group-hover:bg-[var(--accent)] group-hover:text-[var(--wine)] transition-colors">
                    <Icon size={18} />
                  </div>
                  <h3
                    className="mt-5 text-xl md:text-2xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {d.title}
                  </h3>
                  <p className="mt-3 text-[var(--muted-foreground)] leading-relaxed text-sm">
                    {d.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

{/* ========== MARCAS ========== */}
<section
  id="marcas"
  className="py-20 md:py-28 bg-[var(--background)] overflow-hidden"
>
  <div className="container-luxe">
    <div className="text-center reveal-on-scroll">
      <p className="eyebrow">— O Grupo</p>
      <h2 className="display-lg mt-6">
        Nossas <em>experiências</em>.
      </h2>
      <p className="mt-5 max-w-xl mx-auto text-[var(--muted-foreground)]">
        Restaurantes e projetos que compõem o ecossistema Uaine Group.
      </p>
      <div className="hairline w-32 mx-auto mt-8" />
    </div>

    <div className="mt-12 md:mt-14 overflow-hidden reveal-on-scroll">
      <div className="flex w-max items-center gap-10 md:gap-14 animate-[marquee_32s_linear_infinite] hover:[animation-play-state:paused]">
        {[...restaurants, ...restaurants].map((r, i) => (
<button
  key={`${r.name}-${i}`}
  type="button"
  onClick={() => setOpenRestaurant(r)}
className="h-16 md:h-20 w-[180px] md:w-[220px] object-contain opacity-95 transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] group-hover:drop-shadow-[0_0_20px_rgba(199,154,69,0.35)]"  aria-label={`Abrir ${r.name}`}
>
  {r.logo ? (
    <img
      src={r.logo}
      alt={`Logo ${r.name}`}
      loading="lazy"
      className="h-16 md:h-20 w-[180px] md:w-[220px] object-contain opacity-90 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100 group-hover:drop-shadow-[0_0_24px_rgba(199,154,69,0.45)]"
    />
  ) : (
    <span
      className="text-lg md:text-xl text-[var(--wine)] transition-all duration-500 group-hover:scale-110"
      style={{ fontFamily: "var(--font-display)" }}
    >
      {r.name}
    </span>
  )}
</button>

        ))}
      </div>
    </div>
    <div className="flex justify-center mt-10">
  <div className="hairline w-32"></div>
</div>
  </div>
</section>

      {/* ========== EXPERIÊNCIAS ========== */}
      <section id="experiencias" className="py-20 md:py-28 bg-[oklch(0.97_0.008_60)]">
        <div className="container-luxe">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal-on-scroll">
            <div>
              <p className="eyebrow">— Restaurantes & Experiências</p>
              <h2 className="display-lg mt-6 max-w-2xl">
                Onde o vinho<br /> vira <em>experiência</em>.
              </h2>
            </div>
            <p className="max-w-md text-[var(--muted-foreground)]">
              Nossos restaurantes são extensões da experiência Uaine, onde o vinho se
              conecta com gastronomia, ambiente e momentos únicos.
            </p>
          </div>

          {/* Magazine layout: 1 grande + 2 médios */}
          <div className="mt-12 md:mt-16 grid gap-5 lg:grid-cols-12 reveal-on-scroll">
            <button
              type="button"
              onClick={() => setOpenRestaurant(restaurants[0])}
              className="lg:col-span-7 group relative aspect-[4/3] overflow-hidden text-left cursor-pointer"
            >
              <img
                src={restaurants[0].cover}
                alt={restaurants[0].name}
                width={1280}
                height={960}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-105 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.06_18/0.9)] via-[oklch(0.14_0.06_18/0.25)] to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 text-[var(--cream)] pointer-events-none">
                <p className="eyebrow text-[var(--accent)]">{restaurants[0].city}</p>
                <h3
                  className="mt-2 text-3xl md:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {restaurants[0].name}
                </h3>
                <p className="mt-2 max-w-md text-sm md:text-base text-[oklch(0.97_0.008_60/0.85)]">
                  {restaurants[0].description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-[0.7rem] tracking-[0.22em] uppercase text-[var(--accent)] group-hover:gap-4 transition-all">
                  Ver experiência <ArrowRight size={14} />
                </span>
              </div>
            </button>

        <div className="lg:col-span-5 grid gap-5">
  {restaurants.slice(1, 3).map((r) => (
                <button
                  key={r.name}
                  type="button"
                  onClick={() => setOpenRestaurant(r)}
                  className="group relative aspect-[4/3] lg:aspect-auto lg:flex-1 overflow-hidden text-left cursor-pointer"
                >
                  <img
                    src={r.cover}
                    alt={r.name}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-105 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.06_18/0.9)] via-[oklch(0.14_0.06_18/0.25)] to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 p-5 md:p-6 text-[var(--cream)] pointer-events-none">
                    <p className="eyebrow text-[var(--accent)]">{r.city}</p>
                    <h3
                      className="mt-1 text-2xl md:text-3xl"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {r.name}
                    </h3>
                    <p className="mt-2 max-w-xs text-xs md:text-sm text-[oklch(0.97_0.008_60/0.85)]">
                      {r.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== ECOSSISTEMA ========== */}
      <section className="relative py-20 md:py-28 overflow-hidden text-[var(--cream)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--wine-deep)] via-[var(--wine)] to-[oklch(0.18_0.09_15)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.68_0.13_70/0.25),transparent_60%)]" />
        <div className="absolute inset-0 grain" />

        <div className="container-luxe relative">
          <div className="reveal-on-scroll max-w-3xl">
            <p className="eyebrow">— Ecossistema</p>
            <h2 className="display-lg mt-6 text-[var(--cream)]">
              Um ecossistema<br /> <em>completo</em>.
            </h2>
            <p className="mt-6 text-lg text-[oklch(0.97_0.008_60/0.85)] max-w-2xl leading-relaxed">
              A Uaine Group opera como um ecossistema completo, integrando diferentes áreas
              para gerar valor de forma estratégica. Da importação à experiência final,
              cada etapa é pensada para fortalecer a marca e ampliar oportunidades.
            </p>
          </div>

          <div className="mt-12 md:mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4 reveal-on-scroll">
            {ecosystem.map((e) => {
              const Icon = e.icon;
              return (
                <div
                  key={e.label}
                  className="border border-[oklch(0.97_0.008_60/0.15)] p-7 transition-all duration-500 hover:border-[var(--accent)] hover:bg-[oklch(0.97_0.008_60/0.04)] hover:-translate-y-1"
                >
                  <Icon size={26} className="text-[var(--accent)]" />
                  <p className="mt-5 text-[0.7rem] tracking-[0.32em] uppercase text-[oklch(0.97_0.008_60/0.6)]">
                    Vertical
                  </p>
                  <h3
                    className="mt-2 text-2xl md:text-3xl text-[var(--cream)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {e.label}
                  </h3>
                  <p className="mt-3 text-sm text-[oklch(0.97_0.008_60/0.75)] leading-relaxed">
                    {e.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== CTA FINAL ========== */}
      <section className="py-20 md:py-32 bg-[var(--background)]">
        <div className="container-luxe text-center reveal-on-scroll">
          <p className="eyebrow">— Conecte-se</p>
          <h2 className="display-xl mt-6 max-w-4xl mx-auto">
            Faça parte do<br /> universo <em>Uaine</em>.
          </h2>
          <p className="mt-8 max-w-xl mx-auto text-lg text-[var(--muted-foreground)] leading-relaxed">
            Conecte-se a um modelo que une produto, experiência e crescimento.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a href="https://api.whatsapp.com/send/?phone=5527999561971&text=Ol%C3%A1%21+Tenho+interesse+em+conhecer+o+Uaine+Group.&type=phone_number&app_absent=0" className="btn-base btn-wine">
              Quero ser parceiro <ArrowRight size={14} />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=5527999561971&text=Ol%C3%A1%21+Tenho+interesse+em+conhecer+o+Uaine+Group.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-outline-wine"
            >
              Falar no WhatsApp
            </a>
          </div>
          <div className="hairline w-40 mx-auto mt-14" />
        </div>
      </section>

      <Footer />

      <RestaurantModal restaurant={openRestaurant} onClose={() => setOpenRestaurant(null)} />
    </div>
  );
}
