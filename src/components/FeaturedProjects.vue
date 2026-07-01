<template>
  <section id="featured" class="section">
    <h2 class="section-title">Featured Projects</h2>

    <div class="featured-grid">
      <div
        v-for="project in featured"
        :key="project.title"
        class="featured-card"
      >
        <div class="featured-thumb" :style="{ background: project.gradient }">
          <span class="thumb-letter">{{ project.initial }}</span>
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
    description: 'Modern React + Node app for generating structured learning content using AI.',
    tech: ['React', 'Node.js', 'Firebase'],
    url: 'https://learncraft.mediasurf.ca',
    gradient: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    initial: 'L'
  },
  {
    title: 'Pitstop — Automotive Diagnostic App',
    description: 'Vue.js-powered diagnostic tool with clean UI and real-world automotive workflows.',
    tech: ['Vue.js', 'JavaScript'],
    url: 'https://pitstop.mediasurf.ca',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    initial: 'P'
  },
  {
    title: 'AI Prompt Prototyper',
    description: 'Lightweight tool for building and testing structured AI prompts.',
    tech: ['Vue.js', 'JavaScript'],
    url: 'https://pp-ai-tool.mediasurf.ca',
    gradient: 'linear-gradient(135deg, #10b981, #06b6d4)',
    initial: 'A'
  },
  {
    title: 'Emergency Department HIS Module',
    description: 'Interactive hospital information system training with workflow simulation.',
    tech: ['Storyline', 'JavaScript'],
    url: null,
    gradient: 'linear-gradient(135deg, #ec4899, #f43f5e)',
    initial: 'E'
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
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.thumb-letter {
  font-size: 3.5rem;
  font-weight: 800;
  color: rgba(255,255,255,0.9);
  text-shadow: 0 2px 8px rgba(0,0,0,0.15);
  letter-spacing: -0.02em;
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
  transition: gap 0.2s;
}
.featured-link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .section { padding: 50px 16px; }
  .section-title { font-size: 1.5rem; }
  .featured-grid { grid-template-columns: 1fr; gap: 20px; }
  .featured-thumb { height: 140px; }
}
</style>
