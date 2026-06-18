import { useState } from "react";

// ── Nav Links data ────────────────────────────────────────────────────────────
const NAV_LINKS = ["About", "Projects", "Skills", "Contact"];

// ── Projects data ─────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    emoji: "🗂️",
    title: "Personal Portfolio",
    desc: "A portfolio site built from scratch using HTML and CSS to showcase my work.",
  },
  {
    emoji: "🌐",
    title: "Simple Landing Page",
    desc: "A clean, single-page layout with sections and a call-to-action button.",
  },
  {
    emoji: "📬",
    title: "Contact Form",
    desc: "A styled HTML form with input validation and responsive design.",
  },
];

// ── Skills data ───────────────────────────────────────────────────────────────
const SKILLS = ["HTML", "CSS", "JavaScript"];

// ─────────────────────────────────────────────────────────────────────────────
// NAVBAR COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function Navbar() {
  // menuOpen controls whether the mobile menu is visible
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <span className="text-2xl font-bold text-blue-600 tracking-tight">
          Hari.
        </span>

        {/* Desktop nav links — hidden on mobile, shown on md+ */}
        <ul className="hidden md:flex gap-8 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-slate-600 font-medium hover:text-blue-600 transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button — only visible on mobile (md and below) */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Toggle menu"
        >
          {/* Three lines that animate into X when menu is open */}
          <span
            className={`block w-6 h-0.5 bg-slate-800 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-800 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-800 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile dropdown menu — shown only when menuOpen is true */}
      {menuOpen && (
        <ul className="md:hidden bg-white border-t border-slate-100 list-none px-6 py-4 flex flex-col gap-4 shadow-lg">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={closeMenu}
                className="block text-slate-700 font-medium text-lg hover:text-blue-600 transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT / HERO SECTION
// ─────────────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-20 px-6"
    >
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Hi, I'm{" "}
            <span className="text-blue-400">Hari</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-md mx-auto md:mx-0">
            I'm a web developer learning to build web pages using HTML, CSS,
            and JavaScript — including lists, forms, and responsive layouts.
          </p>
        </div>

        {/* Profile photo */}
        <div className="flex-shrink-0">
          <img
            src="profile.jpeg"
            alt="Hari's profile"
            className="w-44 h-44 md:w-56 md:h-56 rounded-full object-cover border-4 border-blue-400 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PROJECTS SECTION
// ─────────────────────────────────────────────────────────────────────────────
function Projects() {
  return (
    <section id="projects" className="bg-green-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 mb-10">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <div className="text-4xl mb-3">{project.emoji}</div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {project.title}
              </h3>
              <p className="text-slate-500 text-sm">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SKILLS SECTION
// ─────────────────────────────────────────────────────────────────────────────
function Skills() {
  return (
    <section id="skills" className="bg-yellow-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 mb-10">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {SKILLS.map((skill, index) => (
            <div
              key={skill}
              className="flex items-center gap-3 bg-white border-2 border-yellow-300 rounded-full px-7 py-3 shadow-sm"
            >
              <span className="text-xs font-bold text-yellow-600">
                0{index + 1}
              </span>
              <span className="text-base font-semibold text-slate-800">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT SECTION
// ─────────────────────────────────────────────────────────────────────────────
function Contact() {
  // Store what the user types in name and email fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // stops page from reloading

    // Show an alert with the submitted details
    alert(
      `✅ Message Received!\n\n` +
        `Name  : ${name}\n` +
        `Email : ${email}\n\n` +
        `Thanks for reaching out, ${name}! I'll get back to you soon.`
    );

    // Clear the form after submit
    setName("");
    setEmail("");
  }

  return (
    <section id="contact" className="bg-pink-50 py-16 px-6">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Contact</h2>
        <p className="text-slate-500 mb-8">
          Have something to say? Drop me a message below.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Name field */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-slate-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-blue-500 focus:outline-none text-slate-800 bg-white transition"
            />
          </div>

          {/* Email field */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-slate-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-blue-500 focus:outline-none text-slate-800 bg-white transition"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 text-center py-6 text-slate-400 text-sm">
      © 2025 Hari · Built with React &amp; Tailwind CSS
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ROOT APP — puts all components together
// ─────────────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
