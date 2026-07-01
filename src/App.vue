<script setup>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import FeaturedProjects from './components/FeaturedProjects.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

// Skills data
const skills = [
  'JavaScript (ES6+)', 'React', 'Vue', 'Node.js', 'HTML5', 'CSS3',
  'Accessibility (WCAG)', 'Storyline', 'SCORM / xAPI', 'LMS Customization',
  'Figma', 'Adobe CC'
];
</script>

<template>
  <div class="app-layout">
    <Navbar />
    <main class="main-content">
      <Hero />
      <About />

      <!-- Featured Projects (6 cards from prompt) -->
      <FeaturedProjects />

      <!-- All Projects -->
      <Projects />

      <!-- Skills -->
      <section class="section" id="skills">
        <h2 class="section-title">Skills</h2>
        <div class="skills-list">
          <span v-for="skill in skills" :key="skill" class="skill-tag">{{ skill }}</span>
        </div>
      </section>

      <!-- Contact -->
      <Contact />
    </main>
    <Footer />
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
  font-size: 2rem;
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
  background: #e8eef7;
  padding: 10px 16px;
  border-radius: 6px;
  font-size: 0.95rem;
  color: var(--text);
}

@media (max-width: 768px) {
  .section {
    padding: 40px 16px;
  }
  .section-title {
    font-size: 1.6rem;
  }
  .skills-list {
    gap: 8px;
  }
  .skill-tag {
    padding: 8px 12px;
    font-size: 0.85rem;
  }
}
</style>
