export const translations = {
  es: {
    "nav.about": "Sobre mí",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "aboutme.subtitle": "Desarrollador web junior",
    "aboutme.description": "Soy estudiante de primer año del grado de <strong>Ingeniería de Software</strong>. Después de finalizar el grado superior de Desarrollo de aplicaciones web, he decidido enfocar mi carrera a desarrollo enfocado al cliente. Me considero una persona proactiva, con ganas de aprender y crecer profesionalmente. Tengo experiencia trabajando en equipo y me adapto fácilmente a nuevos entornos de trabajo.",
    "projects.title": "Proyectos",
    "projects.gamermatch": "Trabajo final del grado superior en desarrollo de aplicaciones web.",
    "projects.keytariner": "Aplicación para mejorar la capacidad de mecanografía a través de niveles de dificultad y sistema de puntaje.",
    "projects.wedding": "Web personal tipo invitación digital de bodas",
    "projects.more": "Saber más",
    "experience.title": "Experiencia Laboral",
    "experience.item1.title": "Desarrollador Web Junior",
    "experience.item1.date": "Septiembre 2024 - Presente",
    "experience.item1.desc": "Desarrollo de aplicaciones de forma autodidacta para proyectos propios.",
    "experience.item2.title": "Desarrollador Web Junior - SubeyBajaBikes.com",
    "experience.item2.date": "Abril 2025 - Junio 2025",
    "experience.item2.desc": "Estudiante en prácticas. Desarrollo e implementación de módulos de PrestaShop y diseño de nuevos temas para la plataforma.",
    "contact.title": "Contacto",
    "contact.name": "Nombre:",
    "contact.email": "Correo Electrónico:",
    "contact.message": "Mensaje:",
    "contact.send": "Enviar"
  },
  en: {
    "nav.about": "About me",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "aboutme.subtitle": "Junior Web Developer",
    "aboutme.description": "I am a first-year <strong>Software Engineering</strong> student. After completing a Higher Degree in Web Application Development, I decided to focus my career on client-centric development. I consider myself a proactive person, eager to learn and grow professionally. I have experience working in teams and adapt easily to new work environments.",
    "projects.title": "Projects",
    "projects.gamermatch": "Final project for the Higher Degree in Web Application Development.",
    "projects.keytariner": "Application to improve typing skills through difficulty levels and a scoring system.",
    "projects.wedding": "Personal wedding invitation website.",
    "projects.more": "Learn more",
    "experience.title": "Work Experience",
    "experience.item1.title": "Junior Web Developer",
    "experience.item1.date": "September 2024 - Present",
    "experience.item1.desc": "Self-taught application development for personal projects.",
    "experience.item2.title": "Junior Web Developer - SubeyBajaBikes.com",
    "experience.item2.date": "April 2025 - June 2025",
    "experience.item2.desc": "Intern student. Development and implementation of PrestaShop modules and design of new themes for the platform.",
    "contact.title": "Contact",
    "contact.name": "Name:",
    "contact.email": "Email:",
    "contact.message": "Message:",
    "contact.send": "Send"
  },
  de: {
    "nav.about": "Über mich",
    "nav.experience": "Erfahrung",
    "nav.projects": "Projekte",
    "nav.contact": "Kontakt",
    "aboutme.subtitle": "Junior Webentwickler",
    "aboutme.description": "Ich bin Student im ersten Jahr des Studiengangs <strong>Softwaretechnik</strong>. Nach Abschluss meines höheren Abschlusses in Webanwendungsentwicklung habe ich beschlossen, meine Karriere auf kundenorientierte Entwicklung zu konzentrieren. Ich betrachte mich als proaktive Person, die bereit ist zu lernen und sich beruflich weiterzuentwickeln. Ich habe Erfahrung in der Teamarbeit und passe mich leicht an neue Arbeitsumgebungen an.",
    "projects.title": "Projekte",
    "projects.gamermatch": "Abschlussprojekt des höheren Abschlusses in Webanwendungsentwicklung.",
    "projects.keytariner": "Anwendung zur Verbesserung der Tippfähigkeiten durch Schwierigkeitsgrade und ein Punktesystem.",
    "projects.wedding": "Persönliche Website als digitale Hochzeitseinladung.",
    "projects.more": "Mehr erfahren",
    "experience.title": "Berufserfahrung",
    "experience.item1.title": "Junior Webentwickler",
    "experience.item1.date": "September 2024 - Heute",
    "experience.item1.desc": "Autodidaktische Anwendungsentwicklung für eigene Projekte.",
    "experience.item2.title": "Junior Webentwickler - SubeyBajaBikes.com",
    "experience.item2.date": "April 2025 - Juni 2025",
    "experience.item2.desc": "Praktikant. Entwicklung und Implementierung von PrestaShop-Modulen und Design neuer Themes für die Plattform.",
    "contact.title": "Kontakt",
    "contact.name": "Name:",
    "contact.email": "E-Mail:",
    "contact.message": "Nachricht:",
    "contact.send": "Senden"
  }
};

export function changeLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (t[key]) {
        // Si el elemento ya tiene HTML dentro (como strong tags), usar innerHTML podría ser necesario
        // Pero textContent es más seguro. Para descripciones con HTML, usaremos innerHTML si detectamos tags.
        if (element.innerHTML !== element.textContent) {
             element.innerHTML = t[key];
        } else {
             element.textContent = t[key];
        }
    }
  });

  // Guardar preferencia
  localStorage.setItem('preferredLanguage', lang);
}