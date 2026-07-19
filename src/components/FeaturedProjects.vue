<template>
  <section id="featured" class="section reveal">
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
            class="featured-btn"
          >
            <span>Visit Project</span>
            <span class="btn-arrow">→</span>
          </a>
          <span v-else class="featured-btn featured-btn-disabled">
            <span>Coming Soon</span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import learncraftImg from '../assets/images/screenshot/learncraft.png'
import pitstopImg from '../assets/images/screenshot/pitstop.png'
import promptPrototyperImg from '../assets/images/screenshot/prompt-prototyper.png'

const featured = [
  {
    title: 'LearnCraft — AI-Powered Learning Builder',
    description: 'LearnCraft is an AI-powered course creation platform that helps instructors and enterprise teams build structured learning content in minutes. It generates course outlines, lessons, quizzes, and learning paths using AI, supported by a clean, intuitive editor and seamless publishing to a branded LMS or marketplace.',
    tech: ['Vue.js', 'Node.js', 'Firebase', 'AI Integration'],
    url: 'https://learncraftedu.ca',
    image: learncraftImg
  },
  {
    title: 'Pitstop — Automotive Diagnostic App',
    description: 'Pitstop is a modern automotive service platform that connects drivers with certified mechanics in minutes. It offers guided diagnostics, instant matching with trusted technicians, appointment booking, and a mobile-first interface for managing repairs and bids — all built with a clean, responsive Vue.js front end.',
    tech: ['Vue.js', 'JavaScript'],
    url: 'https://pitstopservices.ca',
    image: pitstopImg
  },
  {
    title: 'AI Slide Prototyper',
    description: 'AI Slide Prototyper is an intelligent presentation builder that transforms ideas into interactive learning experiences. It lets creators design drag‑and‑drop slides, branching paths, quizzes, and games — all powered by AI for fast iteration and creative freedom. Built for educators, trainers, and teams who want presentations that feel alive and adaptive.',
    tech: ['Vue.js', 'JavaScript'],
    url: 'https://pp-ai-tool.mediasurf.ca',
    image: promptPrototyperImg
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
  position: relative;
  display: block;
  width: fit-content;
  padding: 0.85rem 2.4rem;
  font-size: clamp(1.9rem, 2.3vw, 2.6rem);
  font-weight: 800;
  color: var(--color-heading);
  letter-spacing: -0.015em;
  background: rgba(247, 249, 255, 0.92);
  border-radius: 999px;
  border: 1px solid rgba(76, 111, 255, 0.14);
  box-shadow: 0 24px 50px rgba(15, 23, 42, 0.1);
  backdrop-filter: blur(14px);
  isolation: isolate;
  margin: 0 auto 36px;
  text-align: center;
}
.section-title::before {
  content: '';
  position: absolute;
  inset: -30% -28%;
  background: linear-gradient(135deg, rgba(76, 111, 255, 0.22) 0%, rgba(139, 92, 246, 0.16) 40%, rgba(34, 211, 238, 0.2) 100%);
  border-radius: inherit;
  z-index: -1;
  filter: blur(14px);
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

/* ── Modern Button ── */
.featured-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: linear-gradient(135deg, #2563eb, #4f46e5);
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  overflow: hidden;
  isolation: isolate;
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
  letter-spacing: 0.3px;
  animation: btn-glow-pulse 3s ease-in-out infinite;
}
.featured-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1d4ed8, #4338ca);
  opacity: 0;
  transition: opacity 0.35s ease;
  z-index: -1;
}
.featured-btn::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -60%;
  width: 60%;
  height: 200%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transform: rotate(25deg);
  transition: left 0.6s ease;
  z-index: -1;
}
.featured-btn:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 10px 28px rgba(37, 99, 235, 0.45);
  animation: none;
}
.featured-btn:hover::before {
  opacity: 1;
}
.featured-btn:hover::after {
  left: 120%;
}
.featured-btn:active {
  transform: translateY(-1px) scale(0.98);
}
.featured-btn .btn-arrow {
  display: inline-flex;
  align-items: center;
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  font-size: 1.15em;
  font-weight: 800;
  line-height: 1;
}
.featured-btn:hover .btn-arrow {
  transform: translateX(5px);
}

@keyframes btn-glow-pulse {
  0%, 100% { box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3); }
  50% { box-shadow: 0 4px 20px rgba(37, 99, 235, 0.5); }
}

.featured-btn-disabled {
  background: linear-gradient(135deg, #cbd5e1, #94a3b8);
  color: #475569;
  cursor: not-allowed;
  opacity: 0.7;
  box-shadow: none;
  animation: none;
}
.featured-btn-disabled::before,
.featured-btn-disabled::after {
  display: none;
}
.featured-btn-disabled:hover {
  transform: none;
  box-shadow: none;
  background: linear-gradient(135deg, #cbd5e1, #94a3b8);
}

@media (max-width: 768px) {
  .section { padding: 50px 16px; }
  .section-title { font-size: 1.5rem; }
  .featured-grid { grid-template-columns: 1fr; gap: 20px; }
  .featured-thumb { height: 180px; }
}
</style>
