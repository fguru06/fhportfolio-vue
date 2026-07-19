<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Navbar from '../components/Navbar.vue';
import Hero from '../components/Hero.vue';
import About from '../components/About.vue';
import WhyHireMe from '../components/WhyHireMe.vue';
import Experience from '../components/Experience.vue';
import FeaturedProjects from '../components/FeaturedProjects.vue';
import Projects from '../components/Projects.vue';
import Contact from '../components/Contact.vue';
import Footer from '../components/Footer.vue';

const skills = [
  'JavaScript (ES6+)', 'Vue.js', 'Node.js', 'HTML5', 'CSS3',
  'Accessibility (WCAG)', 'Storyline', 'SCORM / xAPI', 'LMS Customization',
  'AI-Powered Development', 'GitHub Copilot', 'VS Code', 'Figma', 'Adobe CC'
];

const showBackToTop = ref(false);

function onScroll() {
  showBackToTop.value = window.scrollY > 400;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
    // Immediately show elements already in viewport (prevents flash)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('visible');
    }
  });
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
  initReveal();
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>

<template>
  <div class="app-layout">
    <Navbar />
    <main class="main-content">
      <Hero />
      <div class="section-wrap section-tint"><About /></div>
      <div class="section-wrap"><WhyHireMe /></div>
      <div class="section-wrap section-tint"><Experience /></div>
      <div class="section-wrap"><FeaturedProjects /></div>
      <div class="section-wrap section-tint"><Projects /></div>

      <div class="section-wrap">
        <section class="section reveal" id="skills">
          <h2 class="section-title">Skills & Technologies</h2>
          <div class="skills-list">
            <span v-for="skill in skills" :key="skill" class="skill-tag">{{ skill }}</span>
          </div>
        </section>
      </div>

      <div class="section-wrap section-tint"><Contact /></div>
    </main>
    <Footer />

    <button
      v-show="showBackToTop"
      class="back-to-top"
      @click="scrollToTop"
      aria-label="Back to top"
    >↑</button>
  </div>
</template>

<style>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-content {
  flex: 1;
}

/* ── Full-width section wrappers with subtle alternating tints ── */
.section-wrap {
  width: 100%;
}
.section-tint {
  background: linear-gradient(180deg, #f8faff 0%, #f0f4ff 50%, #f8faff 100%);
  border-top: 1px solid rgba(37, 99, 235, 0.06);
  border-bottom: 1px solid rgba(37, 99, 235, 0.06);
}

.section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 20px;
}
.section-title {
  font-size: 1.85rem;
  font-weight: 700;
  margin-bottom: 24px;
  text-align: center;
  color: var(--text);
}

/* ── Old-style section heading with gradient text + colored underline ── */
.section-heading {
  text-align: center;
  margin-bottom: 2.25rem;
  position: relative;
}
.section-heading h2 {
  display: inline-block;
  margin: 0 0 0.75rem;
  font-size: 2.25rem;
  line-height: 1.06;
  font-weight: 800;
  letter-spacing: 0.2px;
  background: linear-gradient(90deg, var(--accent) 0%, #1e3a5f 60%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: transform 220ms ease;
}
.section-heading hr {
  width: 88px;
  height: 6px;
  margin: 0 auto;
  border: none;
  border-radius: 6px;
  background: linear-gradient(90deg, var(--accent), #f59e0b);
  opacity: 0.95;
  transform-origin: center;
  transition: transform 260ms cubic-bezier(.2,.9,.2,1), opacity 180ms;
}
.section-heading:hover h2 {
  transform: translateY(-2px);
}
.section-heading:hover hr {
  transform: scaleX(1.06);
  opacity: 1;
}
@media (max-width: 768px) {
  .section-heading h2 { font-size: 1.6rem; }
  .section-heading hr { width: 64px; height: 5px; }
}
@media (prefers-reduced-motion: reduce) {
  .section-heading h2, .section-heading hr { transition: none !important; transform: none !important; }
}
.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}
.skill-tag {
  background: var(--accent-light);
  color: var(--accent);
  padding: 10px 20px;
  border-radius: 999px;
  font-size: 0.92rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: default;
}
.skill-tag:hover {
  background: var(--accent);
  color: #fff;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
}
@media (max-width: 768px) {
  .section { padding: 50px 16px; }
  .section-title { font-size: 1.5rem; }
  .skills-list { gap: 8px; }
  .skill-tag { padding: 8px 14px; font-size: 0.82rem; }
}
</style>