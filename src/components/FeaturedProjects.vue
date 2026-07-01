<template>
  <section id="featured" class="section">
    <h2 class="section-title">Featured Projects</h2>

    <div class="project-grid">
      <div
        v-for="project in featured"
        :key="project.title"
        class="project-card"
      >
        <h3 class="project-card-title">{{ project.title }}</h3>
        <p class="project-card-desc">{{ project.description }}</p>
        <p class="project-card-tech">
          <strong>Tech:</strong> {{ project.tech.join(', ') }}
        </p>
        <div class="project-card-actions">
          <a
            v-if="project.url"
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer"
            class="project-btn"
          >Visit Project</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const featured = [
  {
    title: 'LearnCraft — AI-Powered Learning Builder',
    description: 'A modern React + Node app for generating structured learning content using AI.',
    tech: ['React', 'Node.js', 'Firebase'],
    url: 'https://learncraft.mediasurf.ca'
  },
  {
    title: 'Pitstop — Automotive Diagnostic App',
    description: 'A Vue.js-powered diagnostic tool with clean UI and real-world automotive workflows.',
    tech: ['Vue.js', 'JavaScript'],
    url: 'https://pitstop.mediasurf.ca'
  },
  {
    title: 'AI Prompt Prototyper',
    description: 'A lightweight tool for building and testing structured AI prompts.',
    tech: ['Vue.js', 'JavaScript'],
    url: 'https://pp-ai-tool.mediasurf.ca'
  },
  {
    title: 'Emergency Department HIS Module',
    description: 'Interactive hospital information system training with workflow simulation.',
    tech: ['Storyline', 'JavaScript'],
    url: null
  },
  {
    title: 'Cybersecurity Awareness Module',
    description: 'Scenario-based learning with interactive decision points.',
    tech: ['Storyline', 'HTML5'],
    url: null
  },
  {
    title: 'Human Body Hotspots / Knee Replacement Flow',
    description: 'Custom hotspot interactions and medical workflow visualization.',
    tech: ['Storyline', 'JavaScript'],
    url: null
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
  font-size: 2rem;
  margin-bottom: 30px;
  text-align: center;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.project-card {
  background: #fff;
  padding: 24px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  transition: all 0.25s;
  box-shadow: var(--shadow-sm);
}
.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: #93c5fd;
}

.project-card-title {
  margin-top: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text);
  line-height: 1.3;
}

.project-card-desc {
  font-size: 0.92rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 14px;
  flex: 1;
}

.project-card-tech {
  font-size: 0.82rem;
  color: var(--text-light);
  margin-bottom: 16px;
}

.project-card-actions {
  margin-top: auto;
}

.project-btn {
  display: inline-block;
  padding: 9px 18px;
  background: var(--accent);
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-size: 0.88rem;
  font-weight: 600;
  transition: all 0.2s;
}
.project-btn:hover {
  background: var(--accent-hover);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
  color: #fff;
}

.project-card-title {
  margin-top: 0;
  font-size: 1.15rem;
  color: #1a1a1a;
}

.project-card-desc {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.55;
  margin-bottom: 12px;
  flex: 1;
}

.project-card-tech {
  font-size: 0.85rem;
  color: #777;
  margin-bottom: 14px;
}

.project-card-actions {
  margin-top: auto;
}

.project-btn {
  display: inline-block;
  padding: 8px 16px;
  background: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background 0.2s;
}
.project-btn:hover {
  background: #0056b3;
}

@media (max-width: 768px) {
  .section {
    padding: 40px 16px;
  }
  .section-title {
    font-size: 1.6rem;
  }
  .project-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>
