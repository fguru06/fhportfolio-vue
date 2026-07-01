<template>
  <nav class="navbar">
    <div class="navbar-inner">
      <a href="#" class="navbar-brand">
        <span class="brand-mark">FH</span>
        <span class="brand-text">Fareed Hassan</span>
      </a>

      <button class="nav-toggle" @click="mobileOpen = !mobileOpen" aria-label="Toggle menu">
        <span :class="['hamburger', { open: mobileOpen }]"></span>
      </button>

      <ul :class="['navbar-links', { open: mobileOpen }]">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            :class="{ active: activeSection === link.href.substring(1) }"
            @click.prevent="navigate(link.href)"
          >{{ link.label }}</a>
        </li>
        <li class="nav-cta-item">
          <a href="#contact" class="nav-cta" @click.prevent="navigate('#contact')">Hire Me</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Why Me', href: '#why-hire-me' },
  { label: 'Featured', href: '#featured' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const mobileOpen = ref(false);
const activeSection = ref('');

function navigate(href) {
  mobileOpen.value = false;
  const id = href.substring(1);
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, { rootMargin: '-80px 0px -50% 0px', threshold: 0 });

  document.querySelectorAll('section[id], header').forEach(el => observer.observe(el));
});

onUnmounted(() => {
  // Cleanup handled automatically
});
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border-bottom: 1px solid rgba(226, 232, 240, 0.6);
  box-shadow: 0 1px 3px rgba(0,0,0,0.03);
}
.navbar-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 0 24px;
}

/* ── Brand ── */
.navbar-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}
.brand-mark {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: -0.02em;
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.2);
}
.brand-text {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.01em;
}

/* ── Links ── */
.navbar-links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 0;
  padding: 0;
}
.navbar-links a {
  color: var(--text-muted);
  font-size: 0.88rem;
  font-weight: 500;
  text-decoration: none;
  padding: 6px 14px;
  border-radius: 8px;
  transition: all 0.2s;
}
.navbar-links a:hover {
  color: var(--text);
  background: #f1f5f9;
}
.navbar-links a.active {
  color: var(--accent);
  background: var(--accent-light);
}

/* ── CTA ── */
.nav-cta-item {
  margin-left: 8px;
}
.nav-cta {
  background: linear-gradient(135deg, #2563eb, #4f46e5) !important;
  color: #fff !important;
  padding: 8px 20px !important;
  border-radius: 8px !important;
  font-weight: 600 !important;
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.25);
}
.nav-cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35) !important;
  background: linear-gradient(135deg, #2563eb, #4f46e5) !important;
  color: #fff !important;
}

/* ── Hamburger ── */
.nav-toggle {
  display: none;
  background: none;
  border: none;
  width: 32px;
  height: 32px;
  cursor: pointer;
  padding: 4px;
  position: relative;
}
.hamburger,
.hamburger::before,
.hamburger::after {
  content: '';
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: all 0.25s;
  position: absolute;
  left: 5px;
}
.hamburger { top: 15px; }
.hamburger::before { top: -7px; }
.hamburger::after { top: 7px; }
.hamburger.open { background: transparent; }
.hamburger.open::before { transform: translateY(7px) rotate(45deg); }
.hamburger.open::after { transform: translateY(-7px) rotate(-45deg); }

/* ── Mobile ── */
@media (max-width: 768px) {
  .navbar-inner { height: 56px; padding: 0 16px; }
  .brand-text { display: none; }
  .nav-toggle { display: block; }

  .navbar-links {
    position: fixed;
    top: 56px;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.96);
    backdrop-filter: blur(16px);
    flex-direction: column;
    gap: 0;
    padding: 8px 0;
    border-bottom: 1px solid var(--border);
    transform: translateY(-110%);
    opacity: 0;
    transition: all 0.3s;
    pointer-events: none;
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  }
  .navbar-links.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }
  .navbar-links a {
    display: block;
    padding: 12px 24px;
    border-radius: 0;
    font-size: 0.95rem;
  }
  .nav-cta-item { margin-left: 0; padding: 8px 16px; }
  .nav-cta { text-align: center !important; }
}
</style>
