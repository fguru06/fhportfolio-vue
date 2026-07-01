<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import WhyHireMe from './components/WhyHireMe.vue';
import FeaturedProjects from './components/FeaturedProjects.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

// Skills data
const skills = [
  'JavaScript (ES6+)', 'React', 'Vue.js', 'Node.js', 'HTML5', 'CSS3',
  'Accessibility (WCAG)', 'Storyline', 'SCORM / xAPI', 'LMS Customization',
  'Figma', 'Adobe CC'
];

// Back to top
const showBackToTop = ref(false);

function onScroll() {
  showBackToTop.value = window.scrollY > 400;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Reveal animation
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
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
      <About />
      <WhyHireMe />

      <!-- Featured Projects (4 cards with thumbnails) -->
      <FeaturedProjects />

      <!-- All Projects -->
      <Projects />

      <!-- Skills -->
      <section class="section reveal" id="skills">
        <h2 class="section-title">Skills &amp; Technologies</h2>
        <div class="skills-list">
          <span v-for="skill in skills" :key="skill" class="skill-tag">{{ skill }}</span>
        </div>
      </section>

      <!-- Contact -->
      <Contact />
    </main>
    <Footer />

    <!-- Back to top -->
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

/* Section styling */
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

/* Skills tags */
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
