<template>
  <section id="featured" class="section">
    <h2 class="section-title">Featured Projects</h2>

    <div class="featured-grid">
      <div
        v-for="project in featured"
        :key="project.title"
        class="featured-card"
      >
        <div class="featured-thumb">
          <img :src="project.image" :alt="project.title" loading="lazy" />
        </div>
        <div class="featured-body">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <p class="featured-tech"><strong>Tech:</strong> {{ project.tech.join(', ') }}</p>
          <a
            v-if="project.url"
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer"
            class="featured-link"
          >Visit Project →</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const featured = [
  {
    title: 'LearnCraft — AI-Powered Learning Builder',
    description: 'Modern Vue.js + Node app for generating structured learning content using AI.',
    tech: ['Vue.js', 'Node.js', 'Firebase', 'AI Integration'],
    url: 'https://learncraft.mediasurf.ca',
    image: new URL('../assets/images/screenshot/learncraft.png', import.meta.url).href
  },
  {
    title: 'Pitstop — Automotive Diagnostic App',
    description: 'Vue.js-powered diagnostic tool with clean UI and real-world automotive workflows.',
    tech: ['Vue.js', 'JavaScript'],
    url: 'https://pitstop.mediasurf.ca',
    image: new URL('../assets/images/screenshot/pitstop.png', import.meta.url).href
  },
  {
    title: 'AI Prompt Prototyper',
    description: 'Lightweight tool for building and testing structured AI prompts.',
    tech: ['Vue.js', 'JavaScript'],
    url: 'https://pp-ai-tool.mediasurf.ca',
    image: new URL('../assets/images/screenshot/prompt-prototyper.png', import.meta.url).href
  },
  {
    title: 'Emergency Department HIS Module',
    description: 'Interactive hospital information system training with workflow simulation.',
    tech: ['Storyline', 'JavaScript'],
    url: null,
    image: new URL('../assets/images/screenshot/mc1.png', import.meta.url).href
  }
];
</script>

<style scoped>
.section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 20px;
}
.section-title {
  font-size: 1.85rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 36px;
  color: var(--text);
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.featured-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  transition: all 0.25s;
}
.featured-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.featured-thumb {
  height: 200px;
  overflow: hidden;
  background: #f1f5f9;
}
.featured-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s;
}
.featured-card:hover .featured-thumb img {
  transform: scale(1.05);
}

.featured-body {
  padding: 20px 24px 24px;
}
.featured-body h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 8px;
  line-height: 1.3;
}
.featured-body p {
  font-size: 0.92rem;
  color: var(--text-muted);
  line-height: 1.55;
  margin: 0 0 10px;
}
.featured-tech {
  font-size: 0.82rem !important;
  color: var(--text-light) !important;
  margin-bottom: 14px !important;
}
.featured-link {
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--accent);
  text-decoration: none;
}
.featured-link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .section { padding: 50px 16px; }
  .section-title { font-size: 1.5rem; }
  .featured-grid { grid-template-columns: 1fr; gap: 20px; }
  .featured-thumb { height: 180px; }
}
</style>
