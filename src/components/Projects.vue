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
  padding: 8px 18px;
  border: 1px solid #d0d5dd;
  background: #fff;
  border-radius: 999px;
  font-size: 0.9rem;
  color: #555;
  cursor: pointer;
  transition: all 0.15s;
  font-weight: 500;
}
.filter-btn:hover {
  border-color: #007bff;
  color: #007bff;
}
.filter-btn.active {
  background: #007bff;
  color: #fff;
  border-color: #007bff;
}

/* ── Toggle ── */
.toggle-wrap {
  text-align: center;
  margin-bottom: 28px;
}
.toggle-btn {
  padding: 10px 28px;
  background: #fff;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  font-size: 0.95rem;
  color: #333;
  cursor: pointer;
  transition: all 0.15s;
  font-weight: 500;
}
.toggle-btn:hover {
  border-color: #007bff;
  color: #007bff;
}

/* ── Grid ── */
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.project-card {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
}

.project-card-category {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #007bff;
  background: #e8f0fe;
  padding: 3px 10px;
  border-radius: 999px;
  margin-bottom: 8px;
  align-self: flex-start;
}

.project-card-title {
  margin-top: 0;
  font-size: 1.1rem;
  color: #1a1a1a;
}

.project-card-desc {
  font-size: 0.92rem;
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
