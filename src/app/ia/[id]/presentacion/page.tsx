"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const classes = {
  "ia-1": {
    name: "Clase 1 · Pedir bien para obtener algo útil",
    goal: "Que el alumno aprenda a usar ChatGPT desde el celular para crear, revisar y mejorar un mensaje real.",
    product: "Mensaje final listo para WhatsApp, con método para repetirlo solo.",
    blocks: [
      {
        time: "0–15 min",
        title: "Arranque: primero hacemos, después corregimos",
        teacher: "Abra fuerte: aquí nadie viene a escuchar teoría. Hoy cada persona va a crear un mensaje real desde el celular. Explique que el primer resultado no tiene que salir perfecto; tiene que existir para poder trabajarlo.",
        student: "Abre ChatGPT en el celular y pide un primer mensaje para algo real que quiera comunicar.",
        prompt: "Escríbame un mensaje para ofrecer [producto o servicio] a [tipo de persona], con tono amable y claro.",
        example: "Producto: comida casera. Público: personas que trabajan cerca. Canal: WhatsApp.",
        review: "Revise que todos tengan una primera respuesta. No corrija todavía. El objetivo de este bloque es arrancar y quitar miedo.",
      },
      {
        time: "15–30 min",
        title: "Golpe de realidad: se ve bonito, pero no necesariamente sirve",
        teacher: "Explique que ChatGPT casi siempre entrega algo que suena correcto, pero eso no significa que funcione. Haga énfasis en que un texto bonito no siempre vende, informa o provoca respuesta.",
        student: "Lee su primer mensaje y detecta si es genérico, largo, frío o poco claro.",
        prompt: "Revise este mensaje y dígame si es claro, concreto y si invita a responder. Señale qué está flojo.",
        example: "Malo: “Disfrute comida deliciosa en un ambiente agradable”. Eso lo puede decir cualquiera.",
        review: "Debe quedar claro que el problema no es la IA. El problema es pedir sin dirección.",
      },
      {
        time: "30–45 min",
        title: "Diagnóstico: qué le falta a un mensaje útil",
        teacher: "Guíe al grupo con una lista simple: qué vendo, a quién le hablo, qué beneficio doy, qué quiero que haga la persona y por dónde se usará el mensaje. Eso forma criterio.",
        student: "Marca qué elementos le faltan a su mensaje actual.",
        prompt: "Analice este mensaje usando esta lista: producto, público, beneficio, tono, canal y acción final.",
        example: "Si vendo repostería, no basta decir “hay queques”. Mejor: “Hoy tengo queques caseros listos para entregar en la tarde”.",
        review: "El alumno debe entender que revisar es parte del uso de IA. No se copia la primera respuesta como si fuera magia.",
      },
      {
        time: "45–60 min",
        title: "Pedir mejor: darle contexto a la IA",
        teacher: "Explique que la IA responde mejor cuando recibe contexto. Use una frase clave: la IA no adivina, obedece. Si el alumno da poca información, recibe algo pobre.",
        student: "Reescribe el pedido agregando quién es, qué ofrece, a quién se dirige y qué quiere lograr.",
        prompt: "Actúe como experto en comunicación por WhatsApp. Soy [quién soy]. Ofrezco [producto o servicio]. Mi público es [tipo de persona]. Quiero que el mensaje logre [acción]. Use tono [tono].",
        example: "Soy una persona que vende comida casera. Mi público son personas que trabajan cerca y quieren almorzar sin cocinar. Quiero que me pidan el menú por WhatsApp.",
        review: "Compare el primer resultado contra el segundo. Aquí debe verse la primera mejora fuerte.",
      },
      {
        time: "60–75 min",
        title: "Construcción guiada: el prompt completo",
        teacher: "Ahora cada alumno arma su propio prompt completo. No permita que copien exactamente el ejemplo. La clase debe aterrizar en casos reales de ellos.",
        student: "Completa su prompt maestro para crear mensajes útiles.",
        prompt: "Soy [quién soy]. Necesito comunicar [qué]. Mi público es [quién]. Lo voy a usar en [WhatsApp/redes/estado]. Quiero un tono [cercano/profesional/directo]. El mensaje debe terminar invitando a [acción].",
        example: "Soy una persona que da clases de repostería. Quiero invitar a personas interesadas a inscribirse en un taller básico. Lo usaré por WhatsApp.",
        review: "El prompt debe tener contexto, público, canal, tono y acción. Si falta una de esas piezas, se corrige antes de seguir.",
      },
      {
        time: "75–90 min",
        title: "Mejoras por capas: no arregle todo de una vez",
        teacher: "Explique que mejorar con IA se hace por capas. Primero claridad, luego brevedad, luego tono, luego acción. Eso enseña control.",
        student: "Mejora su mensaje paso a paso con instrucciones cortas.",
        prompt: "1. Hágalo más claro.\n2. Hágalo más corto.\n3. Hágalo más cercano.\n4. Agregue una invitación clara para responder.\n5. Déjeme una versión final lista para WhatsApp.",
        example: "Antes: “Tenemos comida disponible”. Después: “Hola, hoy tengo comida casera lista para el almuerzo. Si quiere apartar, escríbame y le paso el menú.”",
        review: "El mensaje final debe ser corto, humano y fácil de enviar desde el celular.",
      },
      {
        time: "90–105 min",
        title: "Usar ChatGPT como corrector, no solo como escritor",
        teacher: "Aquí está el salto de calidad. Enseñe que la IA también puede revisar, criticar y mejorar. El alumno no debe depender de que usted le diga si está bien.",
        student: "Pega su versión final y le pide crítica a ChatGPT.",
        prompt: "Revise este mensaje como si usted fuera la persona que lo recibe. Dígame qué está flojo, qué sobra, qué no se entiende y cómo hacerlo más efectivo.",
        example: "La IA puede decir: falta una acción clara, está muy largo o no se entiende el beneficio.",
        review: "El alumno decide qué acepta. Recalque: la IA sugiere, pero el criterio final lo tiene la persona.",
      },
      {
        time: "105–115 min",
        title: "Versión final: dejarlo listo para usar",
        teacher: "Pida que todos lleguen a una versión final. No permita que se queden en borrador. El aprendizaje se cierra cuando hay producto terminado.",
        student: "Pide a ChatGPT una versión final limpia y la copia en notas o WhatsApp propio.",
        prompt: "Con las mejoras anteriores, déjeme una versión final corta, clara, cercana y lista para enviar por WhatsApp.",
        example: "Hola, hoy tengo almuerzos caseros listos para entregar. Si quiere comer rico sin cocinar, escríbame y le paso el menú disponible.",
        review: "Debe tener saludo, oferta clara, beneficio y acción. Si no tiene acción, no está terminado.",
      },
      {
        time: "115–120 min",
        title: "Cierre: esto se usa hoy",
        teacher: "Cierre con fuerza. Si el mensaje se queda guardado, la clase no cumplió. Cada alumno debe definir una aplicación inmediata.",
        student: "Define dónde usará el mensaje, con quién y para qué.",
        prompt: "Voy a usar este mensaje hoy en [WhatsApp/estado/grupo] con [persona o público] para lograr [acción].",
        example: "Lo enviaré hoy a tres clientes conocidos para ofrecerles el menú de almuerzo.",
        review: "El alumno sale con un mensaje real, una forma de mejorarlo y un método que puede repetir sin ayuda.",
      },
    ],
  },

  "ia-2": {
    name: "Clase 2 · Controlar la IA para obtener mejores resultados",
    goal: "Que el alumno aprenda a dirigir la IA con intención, no solo a pedir cosas sueltas.",
    product: "Prompt maestro reutilizable.",
    blocks: [
      {
        time: "0–15 min",
        title: "La IA no adivina",
        teacher: "La IA no lee la mente. Si usted no da contexto, ella rellena con cualquier cosa.",
        student: "Hace una pregunta simple y luego una pregunta con contexto.",
        prompt: "Explíqueme cómo vender más. Luego: Soy [persona], vendo [producto], mi cliente es [tipo], quiero [objetivo]. Déme 5 ideas prácticas.",
        example: "Vender más repostería a vecinos vs. vender más en general.",
        review: "Comparar calidad de respuesta con y sin contexto.",
      },
      {
        time: "15–35 min",
        title: "Dar rol a la IA",
        teacher: "Cuando usted le da un rol, la IA responde desde una posición más útil.",
        student: "Pide la misma tarea con distintos roles.",
        prompt: "Actúe como vendedor. / Actúe como profesor. / Actúe como asesor de WhatsApp. / Actúe como cliente exigente.",
        example: "Un mismo mensaje cambia si lo revisa un vendedor o un cliente molesto.",
        review: "Ver cuál rol ayuda más según el objetivo.",
      },
      {
        time: "35–55 min",
        title: "Contexto que sí importa",
        teacher: "No todo dato sirve. Sirve el dato que cambia la respuesta.",
        student: "Agrega datos útiles: público, lugar, canal, tono, objetivo.",
        prompt: "Mi público es [edad/tipo], estoy en [lugar], lo usaré en [canal], quiero que la persona [acción].",
        example: "No es igual vender a estudiantes, mamás, adultos mayores o empresas.",
        review: "El alumno aprende qué información cambia el resultado.",
      },
      {
        time: "55–80 min",
        title: "Formato de salida",
        teacher: "Si no pide formato, la IA entrega como quiere. Usted manda el formato.",
        student: "Pide respuesta en lista, tabla, mensaje corto o guion.",
        prompt: "Déjelo en formato de WhatsApp, máximo 5 líneas, con saludo, beneficio y cierre.",
        example: "Formato WhatsApp: saludo + beneficio + oferta + acción.",
        review: "El formato debe facilitar copiar y usar desde el celular.",
      },
      {
        time: "80–100 min",
        title: "Prompt maestro",
        teacher: "Hoy cada alumno construye su fórmula reusable. Esto vale más que memorizar prompts.",
        student: "Crea su prompt maestro para futuros usos.",
        prompt: "Actúe como [rol]. Ayúdeme a crear [resultado]. Mi contexto es [contexto]. El público es [público]. El tono debe ser [tono]. Entregue en formato [formato].",
        example: "Actúe como asesor de comunicación para pequeños negocios...",
        review: "Debe servir para repetirlo después con otros casos.",
      },
      {
        time: "100–115 min",
        title: "Prueba de estrés",
        teacher: "Ahora lo probamos. Si solo funciona una vez, no sirve.",
        student: "Cambia el producto, público o canal y prueba su prompt maestro.",
        prompt: "Use este mismo prompt, pero ahora para [nuevo caso].",
        example: "De comida casera a servicios de limpieza.",
        review: "El prompt debe adaptarse sin romperse.",
      },
      {
        time: "115–120 min",
        title: "Cierre: mi fórmula",
        teacher: "Lo importante no es una respuesta. Es tener una forma de pedir bien siempre.",
        student: "Guarda su prompt maestro en notas del celular.",
        prompt: "Copie su prompt maestro y guárdelo como: Mi fórmula para pedirle bien a la IA.",
        example: "Notas del celular o WhatsApp propio.",
        review: "Sale con una herramienta personal reutilizable.",
      },
    ],
  },

  "ia-3": {
    name: "Clase 3 · Crear contenido completo desde el celular",
    goal: "Que el alumno use IA para crear una pieza de contenido completa: texto, imagen e idea de audio/video.",
    product: "Mini pieza de contenido lista para publicar o presentar.",
    blocks: [
      {
        time: "0–20 min",
        title: "Elegir una idea real",
        teacher: "No vamos a crear por crear. Todo contenido debe tener intención.",
        student: "Escoge qué quiere comunicar.",
        prompt: "Ayúdeme a definir una idea de contenido para [producto/servicio] dirigida a [público].",
        example: "Promocionar café entre semana, repostería de fin de semana o servicio profesional.",
        review: "La idea debe tener público y objetivo.",
      },
      {
        time: "20–40 min",
        title: "Crear el texto base",
        teacher: "El texto es la columna vertebral. Sin texto claro, la imagen queda bonita pero vacía.",
        student: "Genera copy corto para redes o WhatsApp.",
        prompt: "Cree un texto corto para publicar en redes sobre [idea]. Que sea claro, cercano y termine invitando a responder.",
        example: "Hoy hay café rápido para los que trabajan cerca del centro.",
        review: "Debe entenderse en menos de 10 segundos.",
      },
      {
        time: "40–65 min",
        title: "Crear prompt para imagen",
        teacher: "Una imagen con IA también se pide bien. No basta con decir: haga una cafetería.",
        student: "Construye prompt visual.",
        prompt: "Cree un prompt para generar una imagen de [escena], estilo realista, ambiente [emoción], sin texto en la imagen.",
        example: "Cafetería pequeña en Costa Rica, luz cálida, persona trabajando con café, ambiente profesional.",
        review: "Debe describir escena, ambiente, estilo y evitar texto dentro de imagen.",
      },
      {
        time: "65–85 min",
        title: "Mejorar la imagen desde el prompt",
        teacher: "Si la imagen sale floja, se corrige el prompt, no se culpa la herramienta.",
        student: "Ajusta el prompt visual con más detalle.",
        prompt: "Mejore este prompt para que la imagen se vea más profesional, natural y útil para redes sociales.",
        example: "Agregar luz natural, composición vertical, celular-friendly, sin logos raros.",
        review: "La imagen debe servir como apoyo visual real.",
      },
      {
        time: "85–105 min",
        title: "Idea de audio o video corto",
        teacher: "El contenido actual no es solo texto. Puede convertirse en audio, guion o video corto.",
        student: "Transforma el mensaje en guion.",
        prompt: "Convierta este mensaje en un guion de video de 15 segundos para celular.",
        example: "Escena 1: persona cansada. Escena 2: café listo. Escena 3: invitación.",
        review: "Debe ser simple, grabable y entendible.",
      },
      {
        time: "105–115 min",
        title: "Armar la pieza final",
        teacher: "Ahora unimos todo: texto, imagen y guion. Eso ya es producción.",
        student: "Ordena su pieza final.",
        prompt: "Organice mi contenido final con: texto para publicar, idea de imagen y guion corto.",
        example: "Post + imagen + reel simple.",
        review: "Debe quedar listo para copiar, generar o grabar.",
      },
      {
        time: "115–120 min",
        title: "Cierre: publicar o guardar",
        teacher: "El contenido que no se usa es decoración. Hoy se deja listo.",
        student: "Decide dónde lo usará.",
        prompt: "Voy a usar este contenido en [WhatsApp/Facebook/Instagram] para [objetivo].",
        example: "Estado de WhatsApp para clientes conocidos.",
        review: "Sale con una pieza completa, no con teoría.",
      },
    ],
  },

  "ia-4": {
    name: "Clase 4 · Aplicar IA a un caso real personal",
    goal: "Que el alumno use IA para resolver una necesidad propia de trabajo, negocio o vida diaria.",
    product: "Solución práctica personalizada.",
    blocks: [
      {
        time: "0–15 min",
        title: "Elegir problema real",
        teacher: "Hoy cada uno trabaja en algo suyo. Si no es real, no sirve.",
        student: "Define un problema o necesidad.",
        prompt: "Ayúdeme a ordenar esta necesidad: [explicar problema]. Hágame preguntas para entender mejor.",
        example: "Necesito vender más, explicar un servicio, organizar una actividad, responder clientes.",
        review: "Debe ser algo que pueda usar esta semana.",
      },
      {
        time: "15–35 min",
        title: "Convertir problema en tarea",
        teacher: "La IA trabaja mejor cuando el problema se convierte en una tarea concreta.",
        student: "Transforma su necesidad en una tarea pedible.",
        prompt: "Convierta este problema en una tarea clara para pedirle ayuda a la IA.",
        example: "Problema: nadie responde. Tarea: crear 3 mensajes de seguimiento.",
        review: "Debe quedar una tarea clara, no una queja general.",
      },
      {
        time: "35–60 min",
        title: "Crear primera solución",
        teacher: "Ahora sí pedimos la solución. Pero con contexto completo.",
        student: "Genera una primera solución.",
        prompt: "Actúe como asistente práctico. Mi situación es [contexto]. Necesito [resultado]. Déme una solución simple que pueda aplicar desde el celular.",
        example: "Plan de seguimiento por WhatsApp para clientes interesados.",
        review: "La solución debe ser aplicable, no teórica.",
      },
      {
        time: "60–85 min",
        title: "Mejorar con restricciones reales",
        teacher: "La vida real tiene límites: tiempo, dinero, herramientas, celular. Se lo decimos a la IA.",
        student: "Agrega restricciones.",
        prompt: "Ajuste la solución considerando que solo tengo celular, poco tiempo y necesito algo fácil de aplicar hoy.",
        example: "Reducir un plan de 10 pasos a 3 acciones posibles.",
        review: "Debe quedar simple y ejecutable.",
      },
      {
        time: "85–105 min",
        title: "Crear material final",
        teacher: "Toda solución necesita material: mensaje, lista, plan, guion o checklist.",
        student: "Pide el material concreto.",
        prompt: "Convierta esta solución en [mensaje/checklist/plan/guion] listo para usar.",
        example: "Checklist de atención al cliente por WhatsApp.",
        review: "El producto debe poder copiarse o guardarse.",
      },
      {
        time: "105–115 min",
        title: "Revisión de calidad",
        teacher: "Antes de usarlo, revisamos si realmente sirve.",
        student: "Le pide crítica a la IA.",
        prompt: "Revise esta solución y dígame qué puede fallar, qué falta y cómo hacerla más práctica.",
        example: "Detectar si el mensaje es muy largo o si la acción no está clara.",
        review: "El alumno decide ajustes finales.",
      },
      {
        time: "115–120 min",
        title: "Compromiso de uso",
        teacher: "El cierre no es felicitar. Es comprometer uso.",
        student: "Define acción inmediata.",
        prompt: "Mi acción después de esta clase será: [acción], hoy a las [hora], usando [material creado].",
        example: "Enviaré el mensaje a 3 clientes hoy a las 5 p.m.",
        review: "Debe salir con una acción concreta y medible.",
      },
    ],
  },
};

export default function PresentacionAlumno() {
  const params = useParams();
  const id = String(params?.id || "ia-1");
  const data = classes[id as keyof typeof classes] || classes["ia-1"];
  const [active, setActive] = useState(0);

  

  useEffect(() => {
  let interval = setInterval(async () => {
    try {
      const res = await fetch(`/api/class-session?class_id=${id}`);
      const json = await res.json();

      const next = Number(json.current_block || 0);

      setActive((prev) => {
        if (prev !== next) {
          return next;
        }
        return prev;
      });

    } catch (e) {}
  }, 1000);

  return () => clearInterval(interval);
}, [id]);

const block = data.blocks[active];

  const progress = useMemo(() => {
    return Math.round(((active + 1) / data.blocks.length) * 100);
  }, [active, data.blocks.length]);

  

  const next = () => syncSetActive(active + 1);
  const prev = () => syncSetActive(active - 1);

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div>
          <p style={styles.brand}>NOA Profesor · Modo Clase</p>
          <h1 style={styles.course}>{data.name}</h1>
          <p style={styles.goal}>{data.goal}</p>
          <p style={styles.product}>Producto final: {data.product}</p>
        </div>

        <Link href={`/ia/${id}`} style={styles.link}>
          Vista profesor →
        </Link>
      </header>

      <section style={styles.stage}>
        <div style={styles.left}>
          <div style={styles.badge}>{block.time}</div>
          <h2 style={styles.title}>{block.title}</h2>

          <div style={styles.teacherBox}>
            <p style={styles.label}>Lo que explica el profesor</p>
            <p style={styles.bigText}>{block.teacher}</p>
          </div>

          <div style={styles.actionBox}>
            <p style={styles.label}>Acción del alumno</p>
            <p style={styles.text}>{block.student}</p>
          </div>
        </div>

        <div style={styles.right}>
          <div style={styles.card}>
            <p style={styles.label}>Prompt para usar en el celular</p>
            <p style={styles.prompt}>{block.prompt}</p>
          </div>

          <div style={styles.card}>
            <p style={styles.label}>Ejemplo guía</p>
            <p style={styles.text}>{block.example}</p>
          </div>

          <div style={styles.cardStrong}>
            <p style={styles.label}>Qué debe revisar el profesor</p>
            <p style={styles.text}>{block.review}</p>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <button onClick={prev} style={styles.secondary}>← Anterior</button>

        <div style={styles.progressWrap}>
          <div style={styles.progressText}>Bloque {active + 1} de {data.blocks.length} · {progress}%</div>
          <div style={styles.bar}>
            <div style={{ ...styles.fill, width: `${progress}%` }} />
          </div>
        </div>

        <button onClick={next} style={styles.primary}>Siguiente →</button>
      </footer>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top left, rgba(56,189,248,.22), transparent 34%), linear-gradient(135deg,#020617,#0f172a,#020617)",
    color: "white",
    padding: 28,
    fontFamily: "Inter, system-ui, sans-serif",
  },
  header: {
    maxWidth: 1380,
    margin: "0 auto 22px",
    display: "flex",
    justifyContent: "space-between",
    gap: 18,
    alignItems: "flex-start",
  },
  brand: {
    margin: 0,
    color: "#38bdf8",
    fontSize: 13,
    fontWeight: 900,
    letterSpacing: ".12em",
    textTransform: "uppercase",
  },
  course: {
    margin: "8px 0",
    fontSize: 34,
    lineHeight: 1.05,
    fontWeight: 950,
  },
  goal: {
    margin: "0 0 6px",
    color: "#cbd5e1",
    fontSize: 17,
    maxWidth: 850,
  },
  product: {
    margin: 0,
    color: "#a7f3d0",
    fontWeight: 800,
  },
  link: {
    color: "#c4b5fd",
    textDecoration: "none",
    fontWeight: 900,
    border: "1px solid rgba(196,181,253,.35)",
    padding: "12px 16px",
    borderRadius: 16,
    whiteSpace: "nowrap",
  },
  stage: {
    maxWidth: 1380,
    margin: "0 auto",
    minHeight: "66vh",
    display: "grid",
    gridTemplateColumns: "1.05fr .95fr",
    gap: 22,
  },
  left: {
    background: "rgba(15,23,42,.78)",
    border: "1px solid rgba(148,163,184,.22)",
    borderRadius: 28,
    padding: 30,
    boxShadow: "0 24px 70px rgba(0,0,0,.28)",
  },
  right: {
    display: "grid",
    gap: 16,
  },
  badge: {
    display: "inline-block",
    background: "rgba(56,189,248,.14)",
    border: "1px solid rgba(56,189,248,.35)",
    color: "#7dd3fc",
    padding: "8px 12px",
    borderRadius: 999,
    fontWeight: 900,
    marginBottom: 18,
  },
  title: {
    fontSize: 46,
    lineHeight: 1,
    margin: "0 0 24px",
    fontWeight: 950,
  },
  teacherBox: {
    background: "linear-gradient(135deg, rgba(251,191,36,.16), rgba(249,115,22,.10))",
    border: "1px solid rgba(251,191,36,.28)",
    borderRadius: 22,
    padding: 22,
    marginBottom: 18,
  },
  actionBox: {
    background: "rgba(2,6,23,.72)",
    border: "1px solid rgba(148,163,184,.18)",
    borderRadius: 22,
    padding: 22,
  },
  card: {
    background: "rgba(15,23,42,.78)",
    border: "1px solid rgba(148,163,184,.22)",
    borderRadius: 24,
    padding: 24,
  },
  cardStrong: {
    background: "linear-gradient(135deg, rgba(16,185,129,.14), rgba(14,165,233,.08))",
    border: "1px solid rgba(16,185,129,.30)",
    borderRadius: 24,
    padding: 24,
  },
  label: {
    margin: "0 0 10px",
    color: "#94a3b8",
    fontSize: 13,
    fontWeight: 950,
    letterSpacing: ".10em",
    textTransform: "uppercase",
  },
  bigText: {
    margin: 0,
    fontSize: 25,
    lineHeight: 1.28,
    fontWeight: 850,
  },
  text: {
    margin: 0,
    color: "#e2e8f0",
    fontSize: 20,
    lineHeight: 1.35,
    fontWeight: 650,
  },
  prompt: {
    margin: 0,
    color: "#f8fafc",
    fontSize: 22,
    lineHeight: 1.35,
    fontWeight: 850,
    whiteSpace: "pre-wrap",
  },
  footer: {
    maxWidth: 1380,
    margin: "20px auto 0",
    display: "grid",
    gridTemplateColumns: "180px 1fr 180px",
    alignItems: "center",
    gap: 18,
  },
  secondary: {
    border: "1px solid rgba(148,163,184,.25)",
    background: "rgba(15,23,42,.75)",
    color: "white",
    padding: "15px 18px",
    borderRadius: 16,
    fontWeight: 900,
    cursor: "pointer",
  },
  primary: {
    border: "none",
    background: "white",
    color: "#020617",
    padding: "15px 18px",
    borderRadius: 16,
    fontWeight: 950,
    cursor: "pointer",
  },
  progressWrap: {
    textAlign: "center",
  },
  progressText: {
    color: "#cbd5e1",
    fontWeight: 800,
    marginBottom: 8,
  },
  bar: {
    height: 10,
    background: "rgba(148,163,184,.22)",
    borderRadius: 999,
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    background: "linear-gradient(90deg,#38bdf8,#22c55e)",
    borderRadius: 999,
  },
};
