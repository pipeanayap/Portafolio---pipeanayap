export const content = {
  es: {
    meta: { title: 'Luis Felipe Anaya | Portafolio', description: 'Portafolio de Luis Felipe Anaya, estudiante de Ingeniería de Software y desarrollador Full Stack con experiencia en Android, backend e inteligencia artificial aplicada.' },
    nav: { about: 'Acerca de', stack: 'Tecnologías', projects: 'Proyectos', contact: 'Contacto', language: 'Cambiar idioma a inglés' },
    hero: {
      badge: 'Ingeniería de Software · Full Stack', greeting: 'HOLA, SOY', intro: 'Desarrollo productos digitales que conectan aplicaciones móviles, servicios backend e inteligencia artificial aplicada.', cta: 'Ver experiencia', explorer: 'ARCHIVOS DEL CV',
      files: {
        'Luis.json': `{
  "nombre": "Luis Felipe Anaya Parada",
  "perfil": "Desarrollador Full Stack",
  "ubicacion": "León, Guanajuato, México",
  "formacion": "Ingeniería de Software",
  "enfoque": ["Android", "Backend y APIs REST", "IA aplicada", "Sistemas RAG"]
}`,
        'Habilidades.js': `const mobile = ["Kotlin", "Android SDK", "Jetpack Compose"];
const backend = ["Python", "FastAPI", "Node.js", "ASP.NET"];
const ai = ["OpenAI API", "LangChain", "RAG", "Milvus"];
const tools = ["Docker", "Terraform", "GitHub Actions", "Linux"];

export const perfil = { mobile, backend, ai, tools };`,
        'Perfil.md': `# Perfil profesional

Estudiante de Ingeniería de Software con experiencia
en desarrollo Full Stack, Android, backend e IA aplicada.

- Automatización móvil y servicios de accesibilidad
- APIs REST y arquitecturas backend
- Procesamiento de documentos y sistemas RAG
- Investigación en Inteligencia Híbrida`,
      },
    },
    about: {
      label: 'Acerca de mí', title: 'Tecnología aplicada a problemas reales',
      paragraphs: ['Soy estudiante de Ingeniería de Software y Sistemas Computacionales con experiencia en desarrollo Full Stack, Android, backend e Inteligencia Artificial aplicada.', 'He trabajado con automatización móvil, APIs REST, procesamiento de documentos, sistemas RAG y plataformas asistidas por IA.', 'Me interesa construir software útil, claro y confiable, combinando investigación, diseño de sistemas y desarrollo práctico.'],
      stats: [['4', 'Experiencias profesionales'], ['1', 'Ponencia internacional'], ['B2', 'Inglés profesional'], ['Full Stack', 'Perfil técnico']],
      journeyLabel: 'Trayectoria', journeyTitle: 'Experiencia',
      timeline: [
        { year: 'Mayo 2026 - Actualidad', role: 'Desarrollador de Software', company: 'Gastroart · León, México', desc: 'Desarrollo soluciones web y de comercio electrónico, y participo en el diseño, desarrollo y evolución del ERP interno de la empresa.' },
        { year: 'Jun 2026 - Jul 2026', role: 'Estancia de Investigación en Inteligencia Artificial', company: 'Universidad EAFIT · Medellín, Colombia', desc: 'Desarrollé una plataforma experimental de Inteligencia Híbrida para asistir el ensamblaje de circuitos, convirtiendo esquemáticos interpretados por IA en configuraciones válidas sobre protoboard e instrucciones paso a paso.' },
        { year: 'Ene 2025 - Oct 2025', role: 'Practicante de Ingeniería de Software', company: 'Inventer · León, México', desc: 'Desarrollé aplicaciones Android con Kotlin, Jetpack Compose, AccessibilityService y MVVM; además de servicios backend y APIs REST con Python, FastAPI, Node.js y Express.js. Colaboré en una plataforma RAG y en la contenerización de servicios con Docker.' },
        { year: 'Jun 2024 - Ago 2024', role: 'Practicante de Tecnologías de la Información', company: 'Green World School · León, México', desc: 'Brindé soporte técnico, mantenimiento preventivo y correctivo, y administré sistemas institucionales, cuentas de usuario y permisos de acceso.' },
      ],
      educationLabel: 'Formación', educationTitle: 'Educación y divulgación',
      education: [
        { year: 'Cursando', role: 'Ingeniería de Software y Sistemas Computacionales', company: 'Universidad de La Salle Bajío', desc: 'Formación profesional en desarrollo de software, arquitectura de sistemas, bases de datos e ingeniería de productos digitales.' },
        { year: '2026', role: 'Ponente internacional · Shared Reasoning', company: 'Congreso Internacional del Programa Delfín', desc: 'Presenté los resultados del proyecto de IA aplicada al ensamblaje electrónico desarrollado durante la estancia en Universidad EAFIT.' },
      ],
    },
    stack: { label: 'Habilidades', title: 'Tecnologías', all: 'TODAS', categories: { mobile: 'MÓVIL', backend: 'BACKEND Y DATOS', frontend: 'FRONTEND', ai: 'IA', devops: 'DEVOPS' } },
    projects: { label: 'Trabajo destacado', title: 'Proyectos y experiencia aplicada', items: [
      { tag: 'INTELIGENCIA HÍBRIDA', title: 'Asistente para ensamblaje de circuitos', desc: 'Plataforma experimental que transforma esquemáticos interpretados por IA en configuraciones válidas sobre protoboard y genera instrucciones paso a paso para usuarios sin experiencia previa.', tech: ['IA aplicada', 'Visión por computadora', 'Razonamiento', 'Investigación'] },
      { tag: 'ANDROID', title: 'Automatización y control móvil', desc: 'Aplicaciones Android nativas con gestos personalizados, servicios en segundo plano, interfaces flotantes y automatización del sistema mediante AccessibilityService.', tech: ['Kotlin', 'Jetpack Compose', 'MVVM', 'AccessibilityService'] },
      { tag: 'IA Y BACKEND', title: 'Plataforma RAG de documentos', desc: 'Servicios backend para ingesta, procesamiento y recuperación semántica de documentos, integrando modelos de IA, OCR y una base de datos vectorial.', tech: ['Python', 'FastAPI', 'OpenAI API', 'LangChain', 'Tesseract', 'Milvus'] },
    ] },
    contact: { label: '¿Hablamos?', title: 'Contacto', copy: 'Copiar correo', copied: '¡Copiado!', download: 'Descargar CV', cvPath: '/Luis_Felipe_Anaya_Parada_CV.pdf', cvName: 'Luis_Felipe_Anaya_Parada_CV_ES.pdf' }, footer: 'Todos los derechos reservados.',
  },
  en: {
    meta: { title: 'Luis Felipe Anaya | Portfolio', description: 'Portfolio of Luis Felipe Anaya, Software Engineering student and Full-Stack Developer experienced in Android, backend development, and applied artificial intelligence.' },
    nav: { about: 'About', stack: 'Technologies', projects: 'Projects', contact: 'Contact', language: 'Switch language to Spanish' },
    hero: {
      badge: 'Software Engineering · Full Stack', greeting: "HI, I'M", intro: 'I build digital products that connect mobile applications, backend services, and applied artificial intelligence.', cta: 'View experience', explorer: 'CV FILES',
      files: {
        'Luis.json': `{
  "name": "Luis Felipe Anaya Parada",
  "profile": "Full-Stack Developer",
  "location": "León, Guanajuato, Mexico",
  "education": "Software Engineering",
  "focus": ["Android", "Backend and REST APIs", "Applied AI", "RAG Systems"]
}`,
        'Skills.js': `const mobile = ["Kotlin", "Android SDK", "Jetpack Compose"];
const backend = ["Python", "FastAPI", "Node.js", "ASP.NET"];
const ai = ["OpenAI API", "LangChain", "RAG", "Milvus"];
const tools = ["Docker", "Terraform", "GitHub Actions", "Linux"];

export const profile = { mobile, backend, ai, tools };`,
        'Profile.md': `# Professional profile

Software Engineering student experienced in Full-Stack,
Android, backend development, and applied AI.

- Mobile automation and accessibility services
- REST APIs and backend architectures
- Document processing and RAG systems
- Hybrid Intelligence research`,
      },
    },
    about: {
      label: 'About me', title: 'Technology applied to real problems',
      paragraphs: ['I am a Software Engineering and Computer Systems student with experience in Full-Stack development, Android, backend development, and applied Artificial Intelligence.', 'I have worked with mobile automation, REST APIs, document processing, RAG systems, and AI-assisted platforms.', 'I enjoy building useful, clear, and reliable software by combining research, system design, and hands-on development.'],
      stats: [['4', 'Professional experiences'], ['1', 'International presentation'], ['B2', 'Professional English'], ['Full Stack', 'Technical profile']],
      journeyLabel: 'Career', journeyTitle: 'Experience',
      timeline: [
        { year: 'May 2026 - Present', role: 'Software Developer', company: 'Gastroart · León, Mexico', desc: 'I develop web and e-commerce solutions and contribute to the design, development, and ongoing evolution of the company’s internal ERP system.' },
        { year: 'Jun 2026 - Jul 2026', role: 'Artificial Intelligence Research Internship', company: 'Universidad EAFIT · Medellín, Colombia', desc: 'Developed an experimental Hybrid Intelligence platform for electronic circuit assembly, transforming AI-interpreted schematics into valid breadboard layouts and step-by-step instructions.' },
        { year: 'Jan 2025 - Oct 2025', role: 'Software Engineering Intern', company: 'Inventer · León, Mexico', desc: 'Developed Android applications with Kotlin, Jetpack Compose, AccessibilityService, and MVVM, as well as backend services and REST APIs with Python, FastAPI, Node.js, and Express.js. Contributed to a RAG platform and containerized services with Docker.' },
        { year: 'Jun 2024 - Aug 2024', role: 'Information Technology Intern', company: 'Green World School · León, Mexico', desc: 'Provided technical support, performed preventive and corrective maintenance, and managed institutional systems, user accounts, and access permissions.' },
      ],
      educationLabel: 'Background', educationTitle: 'Education and outreach',
      education: [
        { year: 'Ongoing', role: 'Software Engineering and Computer Systems', company: 'Universidad de La Salle Bajío', desc: 'Professional training in software development, system architecture, databases, and digital product engineering.' },
        { year: '2026', role: 'International Speaker · Shared Reasoning', company: 'International Congress of the Delfín Program', desc: 'Presented the results of the AI-assisted electronic assembly project developed during the research internship at Universidad EAFIT.' },
      ],
    },
    stack: { label: 'Skills', title: 'Technologies', all: 'ALL', categories: { mobile: 'MOBILE', backend: 'BACKEND & DATA', frontend: 'FRONTEND', ai: 'AI', devops: 'DEVOPS' } },
    projects: { label: 'Selected work', title: 'Projects and applied experience', items: [
      { tag: 'HYBRID INTELLIGENCE', title: 'Circuit assembly assistant', desc: 'Experimental platform that transforms AI-interpreted schematics into valid breadboard layouts and generates step-by-step instructions for users without prior expertise.', tech: ['Applied AI', 'Computer Vision', 'Reasoning', 'Research'] },
      { tag: 'ANDROID', title: 'Mobile automation and control', desc: 'Native Android applications featuring custom gestures, background services, floating interfaces, and system automation through AccessibilityService.', tech: ['Kotlin', 'Jetpack Compose', 'MVVM', 'AccessibilityService'] },
      { tag: 'AI & BACKEND', title: 'Document RAG platform', desc: 'Backend services for document ingestion, processing, and semantic retrieval, integrating AI models, OCR, and a vector database.', tech: ['Python', 'FastAPI', 'OpenAI API', 'LangChain', 'Tesseract', 'Milvus'] },
    ] },
    contact: { label: 'Let’s talk', title: 'Contact', copy: 'Copy email', copied: 'Copied!', download: 'Download résumé', cvPath: '/Luis_Felipe_Anaya_Parada_CV_EN.pdf', cvName: 'Luis_Felipe_Anaya_Parada_CV_EN.pdf' }, footer: 'All rights reserved.',
  },
};

export const skills = [
  ['Kotlin', 'Lenguaje', 'Language', 'mobile'], ['Android SDK', 'Plataforma móvil', 'Mobile platform', 'mobile'], ['Jetpack Compose', 'Toolkit de interfaz', 'UI toolkit', 'mobile'],
  ['Python', 'Lenguaje', 'Language', 'backend'], ['FastAPI', 'Framework de APIs', 'API framework', 'backend'], ['Node.js', 'Entorno de ejecución', 'Runtime', 'backend'], ['ASP.NET', 'Framework backend', 'Backend framework', 'backend'], ['PostgreSQL', 'Base de datos', 'Database', 'backend'], ['MongoDB', 'Base de datos NoSQL', 'NoSQL database', 'backend'],
  ['TypeScript', 'Lenguaje', 'Language', 'frontend'], ['React', 'Biblioteca de interfaz', 'UI library', 'frontend'], ['Angular', 'Framework frontend', 'Frontend framework', 'frontend'], ['Svelte', 'Framework frontend', 'Frontend framework', 'frontend'],
  ['OpenAI API', 'Inteligencia artificial', 'Artificial intelligence', 'ai'], ['LangChain', 'Orquestación de IA', 'AI orchestration', 'ai'], ['Milvus', 'Base de datos vectorial', 'Vector database', 'ai'],
  ['Docker', 'Contenedores', 'Containers', 'devops'], ['Terraform', 'Infraestructura como código', 'Infrastructure as code', 'devops'], ['GitHub Actions', 'Integración continua', 'Continuous integration', 'devops'], ['Linux', 'Sistema operativo', 'Operating system', 'devops'],
].map(([name, es, en, category]) => ({ name, type: { es, en }, category }));
