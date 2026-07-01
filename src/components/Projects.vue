<template>
  <section id="projects" class="section">
    <h2 class="section-title">All Projects</h2>

    <!-- Category filters -->
    <div class="filter-bar">
      <button
        v-for="cat in categories"
        :key="cat"
        :class="['filter-btn', { active: activeFilter === cat }]"
        @click="activeFilter = cat"
      >{{ cat }}</button>
    </div>

    <!-- Toggle button -->
    <div class="toggle-wrap">
      <button class="toggle-btn" @click="showAll = !showAll">
        {{ showAll ? '▲ Hide' : '▼ Show' }} All Projects ({{ filteredProjects.length }})
      </button>
    </div>

    <!-- Project grid (collapsible) -->
    <transition name="fade">
      <div v-if="showAll" class="project-grid">
        <div
          v-for="(project, idx) in filteredProjects"
          :key="project.title + idx"
          class="project-card"
        >
          <span class="project-card-category">{{ categoryMap[project.title] || 'Other' }}</span>
          <h3 class="project-card-title">{{ project.title }}</h3>
          <p class="project-card-desc">{{ truncateDesc(project.description) }}</p>
          <p v-if="project.tech && project.tech.length" class="project-card-tech">
            <strong>Tech:</strong> {{ project.tech.slice(0, 5).join(', ') }}
          </p>
          <div class="project-card-actions">
            <a
              v-if="project.demo"
              :href="project.demo"
              target="_blank"
              rel="noopener noreferrer"
              class="project-btn"
            >View Demo</a>
          </div>
        </div>
      </div>
    </transition>

    <p v-if="showAll && filteredProjects.length === 0" class="no-results">No projects match this category.</p>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import projectsData from '../data/projects.json'

// ── Category mapping ──
const categoryMap = {
  'Emergency Department Health Information Systems': 'eLearning Modules',
  'Interactive Human Body with Hotspots & Quiz': 'eLearning Modules',
  'AutoTech Logic Engine': 'eLearning Modules',
  'Cybersecurity Module for Corporate Training': 'eLearning Modules',
  'Knee Replacement Procedure Flow': 'eLearning Modules',
  'Scenario-Based Decision Tree': 'eLearning Modules',
  'Scenario-Based Activity': 'eLearning Modules',
  'Interactive Flashcard Health Learning Tool': 'Interactive Tools',
  'Likert Scale Health Survey Interactive': 'Interactive Tools',
  'Peer Evaluation (Self & Peer with Analytics)': 'Interactive Tools',
  'Complex Survey Activity': 'Interactive Tools',
  'Interactive Maps': 'Interactive Tools',
  'Interactive Presentation': 'Interactive Tools',
  'Drag-and-Drop Activity': 'Interactive Tools',
  'Printable PDF Functionality for LMS': 'Front-End Apps',
  'Custom LMS Themes': 'Front-End Apps'
};

const categories = ['All', 'Front-End Apps', 'eLearning Modules', 'Interactive Tools'];

// ── State ──
const showAll = ref(false);
const activeFilter = ref('All');

// ── Path resolution ──
const resolveInteractivePath = (value) => {
  if (!value) return value
  if (typeof value !== 'string') return value
  if (/^https?:\/\//i.test(value)) return value

  let normalized = value.replace(/^\/+/, '')
  if (normalized.startsWith('assets/')) {
    normalized = normalized.replace(/^assets\//, '')
  }
  if (!normalized.startsWith('interactives/')) {
    normalized = `interactives/${normalized}`
  }

  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
  return `${base}/${normalized}`
}

const normalizeProject = (project) => {
  const normalized = { ...project }
  if (project.demo) {
    normalized.demo = resolveInteractivePath(project.demo)
  }
  return normalized
}

const allProjects = projectsData.map(normalizeProject)

// ── Computed ──
const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return allProjects
  return allProjects.filter(p => categoryMap[p.title] === activeFilter.value)
})

// ── Helpers ──
const truncateDesc = (desc) => {
  if (!desc) return ''
  return desc.length > 140 ? desc.slice(0, 140).trimEnd() + '…' : desc
}
</script>

<style scoped>
.section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 20px;
}
.section-title {
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
}

/* ── Category filters ── */
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-bottom: 24px;
}
.filter-btn {
  padding: 8px 20px;
  border: 1.5px solid var(--border);
  background: #fff;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}
.filter-btn:hover {
  border-color: #93c5fd;
  color: var(--accent);
}
.filter-btn.active {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.3);
}

/* ── Toggle ── */
.toggle-wrap {
  text-align: center;
  margin-bottom: 28px;
}
.toggle-btn {
  padding: 11px 32px;
  background: #fff;
  border: 1.5px solid var(--border);
  border-radius: 8px;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--text);
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
  box-shadow: var(--shadow-sm);
}
.toggle-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
  box-shadow: var(--shadow);
}

/* ── Grid ── */
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
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
  border-color: #93c5fd;
}

.project-card-category {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--accent);
  background: var(--accent-light);
  padding: 4px 10px;
  border-radius: 999px;
  margin-bottom: 10px;
  align-self: flex-start;
}

.project-card-title {
  margin-top: 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text);
  line-height: 1.3;
}

.project-card-desc {
  font-size: 0.9rem;
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

.no-results {
  text-align: center;
  color: #999;
  font-size: 0.95rem;
  margin-top: 20px;
}

/* ── Transition ── */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .section {
    padding: 50px 16px;
  }
  .section-title {
    font-size: 1.6rem;
  }
  .filter-bar {
    gap: 6px;
  }
  .filter-btn {
    padding: 6px 14px;
    font-size: 0.8rem;
  }
  .project-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>
