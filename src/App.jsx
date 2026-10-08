import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Laptop,
  Bot,
  TrendingUp,
  Search,
  ChevronDown,
  Menu,
  X,
  ExternalLink,
  MessageSquare,
  Calendar,
  AlertCircle,
  Heart,
  User,
  Check,
} from "lucide-react";

const STRIPE_PAYMENT_URL =
  "https://buy.stripe.com/fZu6oIaSZ3Ud5o0cvRbV604";

const CALENDAR_URL =
  "https://calendar.app.google/9gcZYP4Qabtjk46C7";

const painPoints = [
  "Quiero hacer algo para mi negocio, pero no sé por dónde empezar.",
  "No entiendo cómo utilizar una herramienta.",
  "Quiero cobrar por internet.",
  "Necesito una página o sistema sencillo.",
  "Quiero usar inteligencia artificial.",
  "Tengo una idea, pero no sé cómo aterrizarla.",
  "Encontré demasiada información y ahora estoy más confundida.",
  "Llevo horas intentando resolverlo y sigo igual.",
  "Tengo un problema que no sé ni cómo explicar.",
];

const helpCategories = [
  {
    title: "DIGITAL",
    icon: <Laptop className="w-5 h-5 text-[#C88A7A]" />,
    items: [
      "Páginas web",
      "Landing pages",
      "Formularios",
      "Calendarios",
      "Catálogos",
      "Código QR",
      "Herramientas online",
      "Sistemas sencillos",
    ],
  },
  {
    title: "IA",
    icon: <Bot className="w-5 h-5 text-[#C88A7A]" />,
    items: [
      "ChatGPT",
      "Prompts",
      "Contenido",
      "Imágenes",
      "Investigación con IA",
      "Herramientas de IA",
      "Automatización básica",
    ],
  },
  {
    title: "NEGOCIOS",
    icon: <TrendingUp className="w-5 h-5 text-[#C88A7A]" />,
    items: [
      "Ideas de venta",
      "Presencia digital",
      "Marketplace",
      "Productos digitales",
      "Captación de clientes",
      "Procesos",
      "Organización",
    ],
  },
  {
    title: "INVESTIGACIÓN",
    icon: <Search className="w-5 h-5 text-[#C88A7A]" />,
    items: [
      "Encontrar información",
      "Comparar alternativas",
      "Entender procesos",
      "Investigar herramientas",
      "Organizar información",
    ],
  },
  {
    title: "TRÁMITES Y PROCESOS",
    icon: <Search className="w-5 h-5 text-[#C88A7A]" />,
    items: [
      "Entender requisitos",
      "Encontrar información oficial",
      "Organizar pasos",
      "Identificar dónde continuar",
    ],
  },
];

const faqs = [
  {
    question: "¿Tengo que saber exactamente qué necesito?",
    answer:
      "No. Puedes llegar simplemente con el problema y partimos desde ahí.",
  },
  {
    question: "¿Puedo preguntar algo que no aparece en la página?",
    answer:
      "Sí. Cuéntame qué necesitas conseguir y veremos si GIUNOVA puede ayudarte a investigarlo y encontrar opciones.",
  },
  {
    question: "¿Me vas a hacer el trabajo completo?",
    answer:
      "Depende del problema. La sesión está diseñada principalmente para entenderlo, investigar opciones y definir un camino de acción. Si posteriormente necesitas implementación, se puede valorar por separado.",
  },
  {
    question: "¿Y si no sé usar tecnología?",
    answer:
      "No importa. No necesitas conocimientos técnicos ni hablar con palabras complejas. Solo explícame qué quieres conseguir.",
  },
  {
    question: "¿GIUNOVA sustituye a un abogado, contador, médico u otro profesional?",
    answer:
      "No. Cuando un asunto requiera asesoría profesional especializada, GIUNOVA te ayudará a organizar la información y te indicará acudir con el profesional correspondiente.",
  },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [clientNotes, setClientNotes] = useState("");
  const [notesSaved, setNotesSaved] = useState(false);

  const isThanksPage = window.location.pathname === "/gracias";

  useEffect(() => {
    const onScroll = () => {
      setShowSticky(window.scrollY > 450);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    setMobileMenuOpen(false);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const goHome = () => {
    window.location.href = "/";
  };

  const pay = () => {
    window.location.href = STRIPE_PAYMENT_URL;
  };

  if (isThanksPage) {
    return (
      <div className="min-h-screen bg-[#F8F3ED] text-[#4A3C31] flex flex-col">
        <header className="bg-[#F8F3ED]/95 backdrop-blur-md border-b border-[#EFE5DA]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 h-20 flex items-center">
            <button
              onClick={goHome}
              className="flex items-center gap-2.5"
            >
              <div className="w-9 h-9 rounded-xl bg-[#C88A7A] text-white flex items-center justify-center font-extrabold text-lg">
                G
              </div>

              <div>
                <span className="text-xl font-black tracking-tight block leading-none">
                  GIUNOVA
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#C88A7A] font-semibold block mt-1">
                  Soluciones Prácticas
                </span>
              </div>
            </button>
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4 py-16 sm:py-24 w-full">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-[#EFE5DA] text-center">
            <div className="w-16 h-16 bg-[#C88A7A]/15 text-[#C88A7A] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 fill-[#C88A7A]" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
              ¡Listo! ❤️
            </h1>

            <p className="text-lg font-medium mb-2">
              Tu sesión de solución GIUNOVA está a un paso.
            </p>

            <p className="text-sm text-[#4A3C31]/70 max-w-md mx-auto mb-8">
              Ahora elige el día y horario que mejor te funcione.
            </p>

            <div className="bg-[#F8F3ED] p-6 sm:p-8 rounded-2xl border border-[#EFE5DA] text-left">
              <div className="flex items-center gap-3 mb-5">
                <Calendar className="w-6 h-6 text-[#C88A7A]" />

                <div>
                  <h3 className="font-bold">
                    Paso final: selecciona tu horario
                  </h3>

                  <p className="text-xs text-[#4A3C31]/70">
                    Acceso directo a Google Calendar
                  </p>
                </div>
              </div>

              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#C88A7A] hover:bg-[#B07466] text-white py-4 px-6 rounded-xl font-extrabold text-sm tracking-wider uppercase text-center shadow transition-all flex items-center justify-center gap-2"
              >
                ELEGIR MI HORARIO
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="border-t border-[#EFE5DA] pt-8 mt-8 text-left">
              <h3 className="font-bold text-sm mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#C88A7A]" />
                ¿Quieres adelantar algo? (Opcional)
              </h3>

              <p className="text-xs text-[#4A3C31]/70 mb-3">
                Puedes escribir una breve nota sobre lo que necesitas resolver.
              </p>

              <textarea
                value={clientNotes}
                onChange={(e) => setClientNotes(e.target.value)}
                placeholder="Ej. Quiero conectar mi formulario a WhatsApp..."
                rows={3}
                className="w-full p-3 bg-[#F8F3ED] border border-[#EFE5DA] rounded-xl text-xs outline-none focus:ring-2 focus:ring-[#C88A7A] resize-none"
              />

              <button
                onClick={() => setNotesSaved(true)}
                className="mt-3 bg-[#EFE5DA] text-[#4A3C31] text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-2"
              >
                {notesSaved ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    Notas guardadas
                  </>
                ) : (
                  "Guardar notas"
                )}
              </button>
            </div>

            <p className="text-sm font-serif italic text-[#C88A7A] mt-8 pt-4 border-t border-[#EFE5DA]">
              Nos vemos pronto.
            </p>

            <button
              onClick={goHome}
              className="mt-6 text-xs font-semibold text-[#4A3C31]/60 underline"
            >
              Volver a la página principal
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F3ED] text-[#4A3C31] font-sans antialiased">
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-[#F8F3ED]/90 backdrop-blur-md border-b border-[#EFE5DA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <button
            onClick={goHome}
            className="flex items-center gap-2.5 text-left"
          >
            <div className="w-9 h-9 rounded-xl bg-[#C88A7A] text-white flex items-center justify-center font-extrabold text-lg">
              G
            </div>

            <div>
              <span className="text-xl font-black tracking-tight block leading-none">
                GIUNOVA
              </span>

              <span className="text-[10px] uppercase tracking-widest text-[#C88A7A] font-semibold block mt-1">
                Soluciones Prácticas
              </span>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-7 font-medium text-sm">
            <button onClick={() => goTo("identificacion")}>
              Situaciones
            </button>

            <button onClick={() => goTo("como-funciona")}>
              ¿Cómo funciona?
            </button>

            <button onClick={() => goTo("areas")}>
              Problemas
            </button>

            <button onClick={() => goTo("faq")}>
              FAQ
            </button>

            <button
              onClick={pay}
              className="bg-[#C88A7A] hover:bg-[#B07466] text-white px-5 py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase flex items-center gap-2"
            >
              TENGO UN PROBLEMA
              <ArrowRight className="w-4 h-4" />
            </button>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#F8F3ED] border-b border-[#EFE5DA] px-4 py-6 space-y-3">
            <button
              onClick={() => goTo("identificacion")}
              className="block w-full text-left py-2"
            >
              ¿Te está pasando esto?
            </button>

            <button
              onClick={() => goTo("como-funciona")}
              className="block w-full text-left py-2"
            >
              ¿Cómo funciona?
            </button>

            <button
              onClick={() => goTo("areas")}
              className="block w-full text-left py-2"
            >
              ¿Qué tipo de problemas?
            </button>

            <button
              onClick={() => goTo("faq")}
              className="block w-full text-left py-2"
            >
              Preguntas frecuentes
            </button>

            <button
              onClick={pay}
              className="w-full bg-[#C88A7A] text-white py-3 rounded-xl font-extrabold"
            >
              TENGO UN PROBLEMA · $200
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#EFE5DA] border border-[#C88A7A]/25 px-4 py-1.5 rounded-full text-xs font-bold mb-8">
            <span className="w-2 h-2 rounded-full bg-[#C88A7A] animate-pulse" />
            Sesión de Solución · 30 minutos · $200 MXN
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.12] mb-6">
            ¿Qué necesitas resolver?
          </h1>

          <p className="text-xl sm:text-2xl text-[#C88A7A] font-serif italic mb-6">
            No necesitas saber cómo hacerlo.
            <span className="text-[#4A3C31] font-sans not-italic font-medium text-lg sm:text-xl block mt-2">
              Solo necesitas saber qué quieres conseguir.
            </span>
          </p>

          <p className="text-base sm:text-lg text-[#4A3C31]/80 max-w-xl mx-auto mb-10 leading-relaxed">
            Cuéntame qué necesitas. Juntas analizamos el problema y buscamos
            el camino más práctico para avanzar.
          </p>

          <button
            onClick={pay}
            className="bg-[#C88A7A] hover:bg-[#B07466] text-white font-black py-4 px-8 rounded-2xl shadow-md text-base tracking-wide flex items-center justify-center gap-2 mx-auto"
          >
            TENGO UN PROBLEMA
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-xs text-[#4A3C31]/60 font-medium flex items-center justify-center gap-1.5 mt-5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Pago seguro · Después eliges tu horario
          </p>
        </div>

        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -z-10 w-[500px] h-[500px] bg-[#EFE5DA]/60 rounded-full blur-3xl" />
      </section>

      {/* IDENTIFICACIÓN */}
      <section
        id="identificacion"
        className="py-20 bg-[#EFE5DA]/40 border-y border-[#EFE5DA]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C88A7A] bg-white px-3.5 py-1.5 rounded-full inline-block mb-3">
              Identificación
            </span>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Tal vez te está pasando esto…
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-[#EFE5DA] shadow-sm border-l-4 border-l-[#C88A7A]"
              >
                <p className="text-sm font-medium leading-relaxed">
                  "{point}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALIVIO */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-[#F8F3ED] px-4 py-2 rounded-full border border-[#EFE5DA] text-xs font-bold uppercase tracking-widest text-[#C88A7A] mb-6">
            El momento de alivio
          </span>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6">
            Respira.
            <br />
            <span className="text-[#C88A7A] font-serif italic font-normal">
              No tienes que saber hacerlo todo.
            </span>
          </h2>

          <div className="max-w-2xl mx-auto space-y-6 text-base sm:text-lg text-[#4A3C31]/80 leading-relaxed">
            <p>
              En internet hay miles de herramientas, tutoriales y opciones.
              El problema muchas veces no es encontrar información…
            </p>

            <div className="bg-[#F8F3ED] p-6 rounded-2xl border border-[#EFE5DA] text-xl sm:text-2xl font-black">
              Es saber cuál necesitas tú.
            </div>

            <p className="text-xl sm:text-2xl font-serif italic text-[#C88A7A]">
              Ahí es donde entra GIUNOVA.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="py-20 bg-[#EFE5DA]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C88A7A]">
              Nuestro enfoque
            </span>

            <h2 className="text-3xl sm:text-4xl font-black mt-3">
              Trae el problema. Nosotras buscamos el camino.
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EFE5DA] shadow-md">
            <ul className="space-y-4 text-base sm:text-lg font-semibold">
              {[
                "Me cuentas qué quieres conseguir.",
                "Analizamos qué estás intentando hacer.",
                "Investigamos las opciones disponibles.",
                "Buscamos herramientas o alternativas que puedan servirte.",
                "Organizamos los siguientes pasos.",
                "Y si el problema requiere un especialista, te lo digo.",
              ].map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C88A7A] mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#4A3C31] text-white p-6 sm:p-8 rounded-3xl shadow-xl mt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-center">
            {["PROBLEMA", "ENTENDER", "INVESTIGAR", "ENCONTRAR OPCIONES", "CAMINO DE ACCIÓN"].map(
              (item, index) => (
                <React.Fragment key={item}>
                  <div
                    className={`px-3 py-2 rounded-xl font-bold text-xs uppercase tracking-wider ${
                      index === 4
                        ? "bg-[#C88A7A] text-white"
                        : "bg-white/10 text-[#EFE5DA]"
                    }`}
                  >
                    {item}
                  </div>

                  {index < 4 && (
                    <ArrowRight className="w-5 h-5 text-[#C88A7A] rotate-90 md:rotate-0" />
                  )}
                </React.Fragment>
              )
            )}
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section id="areas" className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C88A7A]">
              Orientación práctica
            </span>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mt-3 mb-3">
              Algunas cosas con las que puedo ayudarte…
            </h2>

            <p className="text-sm text-[#4A3C31]/70">
              No es un catálogo rígido, es una guía de dónde solemos destrabar
              dudas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category) => (
              <div
                key={category.title}
                className="bg-white p-6 rounded-2xl border border-[#EFE5DA] shadow-sm"
              >
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#F8F3ED]">
                  <div className="p-2 bg-[#F8F3ED] rounded-xl">
                    {category.icon}
                  </div>

                  <h3 className="font-extrabold text-lg">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm font-medium text-[#4A3C31]/80"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C88A7A]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-[#F8F3ED] border border-[#EFE5DA] rounded-2xl p-6 flex gap-3.5 max-w-3xl mx-auto mt-12 text-xs sm:text-sm text-[#4A3C31]/80">
            <AlertCircle className="w-5 h-5 text-[#C88A7A] shrink-0" />

            <div>
              <strong className="font-bold block mb-1">
                Nota importante de transparencia:
              </strong>

              GIUNOVA orienta en tecnología, procesos e investigación
              práctica. No se ofrece asesoría legal, médica, fiscal o
              financiera profesional. Cuando una situación requiera un
              profesional autorizado, te lo indicaré con claridad.
            </div>
          </div>
        </div>
      </section>

      {/* MENSAJE CENTRAL */}
      <section className="py-20 bg-[#4A3C31] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#EFE5DA]">
            La idea más importante
          </span>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-6 mb-8">
            NO NECESITAS SABER EXACTAMENTE QUÉ NECESITAS.
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-10 text-xs sm:text-sm font-semibold text-[#EFE5DA]">
            {[
              "Puedes llegar con una duda.",
              "Con una idea.",
              "Con un problema.",
              'O un "no sé cómo hacer esto".',
            ].map((item) => (
              <div
                key={item}
                className="bg-white/10 p-3 rounded-xl border border-white/10"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="text-xl text-[#C88A7A] font-serif italic mb-6">
            Empezamos desde ahí.
          </p>

          <p className="text-2xl sm:text-4xl font-black leading-snug">
            TÚ TRAE EL PROBLEMA.
            <br />
            <span className="text-[#C88A7A] font-serif italic font-normal">
              GIUNOVA TE AYUDA A ENCONTRAR EL CAMINO.
            </span>
          </p>
        </div>
      </section>

      {/* OFERTA */}
      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#C88A7A] shadow-xl">
            <div className="flex justify-between items-start mb-6 gap-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#C88A7A] block mb-1">
                  GIUNOVA
                </span>

                <h2 className="text-2xl sm:text-3xl font-black">
                  SESIÓN DE SOLUCIÓN
                </h2>
              </div>

              <div className="text-right">
                <div className="text-3xl font-black">
                  $200{" "}
                  <span className="text-xs text-[#4A3C31]/60">MXN</span>
                </div>

                <span className="text-xs font-bold bg-[#F8F3ED] text-[#C88A7A] px-2.5 py-1 rounded-full">
                  30 minutos
                </span>
              </div>
            </div>

            <p className="text-base text-[#4A3C31]/85 mb-8 leading-relaxed">
              Una sesión práctica para analizar eso que llevas días intentando
              resolver y ayudarte a encontrar un camino claro para avanzar.
            </p>

            <div className="space-y-3 mb-8">
              <span className="text-xs font-extrabold uppercase tracking-wider block">
                La sesión incluye:
              </span>

              {[
                "Escuchar tu situación",
                "Entender qué quieres conseguir",
                "Analizar alternativas",
                "Investigar herramientas u opciones cuando sea necesario",
                "Definir próximos pasos",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-sm font-semibold"
                >
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <Check className="w-3 h-3" />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <div className="border-t border-[#F8F3ED] pt-4 mb-10">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#4A3C31]/50 block mb-2">
                No incluye:
              </span>

              <p className="text-xs text-[#4A3C31]/60">
                Promesas de resultados garantizados ni asesoría profesional
                especializada que corresponda a terceros.
              </p>
            </div>

            <button
              onClick={pay}
              className="w-full bg-[#C88A7A] hover:bg-[#B07466] text-white font-extrabold py-4 px-8 rounded-2xl shadow-lg text-base tracking-wider uppercase flex items-center justify-center gap-2"
            >
              QUIERO RESOLVERLO
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-xs text-center text-[#4A3C31]/60 mt-3">
              Pago primero. Después eliges tu horario.
            </p>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section
        id="como-funciona"
        className="py-20 bg-[#EFE5DA]/40 border-y border-[#EFE5DA]"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C88A7A]">
              Proceso simple
            </span>

            <h2 className="text-3xl sm:text-4xl font-black mt-3">
              Solo necesitas tres pasos.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ["01", "PAGA", "Realiza el pago de $200 MXN de forma rápida y segura."],
              ["02", "AGENDA", "Después del pago eliges el día y horario disponible."],
              ["03", "RESOLVEMOS", "Llegas a la sesión y me cuentas qué necesitas."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="bg-white p-6 rounded-2xl border border-[#EFE5DA] shadow-sm"
              >
                <span className="text-3xl font-black text-[#C88A7A]/30">
                  {number}
                </span>

                <h3 className="font-extrabold text-lg mt-2 mb-1">
                  {title}
                </h3>

                <p className="text-sm text-[#4A3C31]/80">{text}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#EFE5DA] text-center max-w-xl mx-auto mt-10">
            <p className="text-sm font-semibold">
              Puedes llegar sin saber qué herramienta necesitas.
              <br />
              <span className="text-[#C88A7A] font-serif italic">
                Ese es precisamente el punto.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* TIEMPO */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C88A7A]">
              Ahorra tiempo
            </span>

            <h2 className="text-3xl sm:text-4xl font-black mt-3">
              ¿Cuánto tiempo llevas dándole vueltas?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-[#F8F3ED] p-8 rounded-3xl border border-[#EFE5DA]">
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#4A3C31]/50 mb-4">
                La alternativa agotadora
              </div>

              <ul className="space-y-3 text-sm text-[#4A3C31]/80 font-medium">
                <li>⏳ Horas buscando tutoriales.</li>
                <li>⏳ Horas comparando herramientas.</li>
                <li>⏳ Horas intentando entender qué hacer.</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-[#C88A7A] shadow-md">
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#C88A7A] mb-2">
                Con GIUNOVA
              </div>

              <div className="text-3xl font-black mb-2">
                30 minutos conmigo
              </div>

              <p className="text-xs text-[#4A3C31]/70 leading-relaxed">
                Un espacio humano para ordenar el problema y salir con un
                camino claro de acción.
              </p>
            </div>
          </div>

          <p className="text-center text-base sm:text-lg font-medium mt-12 max-w-xl mx-auto">
            No siempre necesitas más información.
            <br />
            <strong>
              A veces necesitas que alguien te ayude a ordenar la información
              que ya existe.
            </strong>
          </p>
        </div>
      </section>

      {/* GIU */}
      <section className="py-20 bg-[#EFE5DA]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-5 sm:p-8 lg:p-12 border border-[#EFE5DA] shadow-md flex flex-col md:flex-row items-center gap-8 lg:gap-14">
            <div className="w-full md:w-[44%] shrink-0 rounded-3xl bg-[#F8F3ED] border border-[#C88A7A]/20 p-3 sm:p-4 shadow-[0_18px_45px_-28px_rgba(74,60,49,0.4)]">
              <img
                src={new URL("./image.png", import.meta.url).href}
                alt="Retrato profesional de Giu"
                className="block w-full h-[420px] sm:h-[460px] lg:h-[500px] object-contain rounded-2xl"
              />
            </div>

            <div className="w-full md:flex-1">
              <h2 className="text-2xl font-black mb-3">Soy Giu.</h2>

              <p className="text-sm sm:text-base text-[#4A3C31]/80 leading-relaxed mb-4">
                Me gusta encontrar soluciones.
              </p>

              <p className="text-sm sm:text-base text-[#4A3C31]/80 leading-relaxed mb-4">
                Cuando algo no sé hacerlo, investigo, pruebo herramientas,
                comparo opciones y busco una manera práctica de resolverlo.
                GIUNOVA nace de esa forma de trabajar.
              </p>

              <p className="text-sm sm:text-base font-bold text-[#C88A7A] italic font-serif">
                Y ahora quiero ayudarte a hacer lo mismo con eso que hoy te
                está atorando.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C88A7A]">
              Preguntas frecuentes
            </span>

            <h2 className="text-3xl sm:text-4xl font-black mt-3">
              Aclaramos tus dudas
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="bg-white rounded-2xl border border-[#EFE5DA] overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-6 text-left font-bold flex items-center justify-between gap-4"
                  >
                    {faq.question}

                    <ChevronDown
                      className={`w-5 h-5 text-[#C88A7A] shrink-0 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-[#4A3C31]/80 leading-relaxed border-t border-[#F8F3ED] pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 sm:py-28 bg-[#EFE5DA]/50 border-t border-[#EFE5DA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Deja de darle vueltas.
          </h2>

          <p className="text-base sm:text-lg text-[#4A3C31]/80 max-w-xl mx-auto mb-10">
            Ese problema que llevas días posponiendo puede empezar a tener un
            camino más claro.
          </p>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#EFE5DA] max-w-md mx-auto">
            <div className="font-black text-xl mb-1">
              SESIÓN DE SOLUCIÓN GIUNOVA
            </div>

            <div className="text-sm font-bold text-[#C88A7A] mb-6">
              30 minutos · $200 MXN
            </div>

            <button
              onClick={pay}
              className="w-full bg-[#C88A7A] hover:bg-[#B07466] text-white font-extrabold py-4 px-8 rounded-2xl shadow-md text-base tracking-wider uppercase flex items-center justify-center gap-2"
            >
              TENGO UN PROBLEMA
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-xs text-[#4A3C31]/60 mt-4">
              Pago seguro · Después eliges tu horario
            </p>
          </div>
        </div>
      </section>

      {/* STICKY MOBILE */}
      {showSticky && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-[#EFE5DA] p-3 z-30 shadow-2xl flex items-center justify-between gap-3">
          <div>
            <div className="text-xs font-black">Sesión GIUNOVA</div>
            <div className="text-xs text-[#C88A7A] font-extrabold">
              30 min · $200 MXN
            </div>
          </div>

          <button
            onClick={pay}
            className="bg-[#C88A7A] text-white px-4 py-2.5 rounded-xl font-bold text-xs"
          >
            RESOLVERLO
          </button>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-[#4A3C31] text-white pt-14 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="pb-10 border-b border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-[#C88A7A] flex items-center justify-center font-bold">
                G
              </div>

              <span className="text-lg font-black">GIUNOVA</span>
            </div>

            <p className="text-xs text-[#EFE5DA]/80 italic font-serif">
              “Tú trae el problema. Nosotras buscamos el camino.”
            </p>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#EFE5DA]/50 gap-3">
            <p>
              © {new Date().getFullYear()} GIUNOVA. Todos los derechos
              reservados.
            </p>

            <p>Sesión individual de orientación práctica · $200 MXN</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
