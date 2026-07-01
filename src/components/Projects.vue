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
      >{{ cat }} ({{ countByCategory(cat) }})</button>
    </div>

    <!-- Project grid -->
    <div class="project-grid">
      <div
        v-for="(project, idx) in filteredProjects"
        :key="project.title + idx"
        class="project-card"
      >
        <!-- Image carousel -->
        <div class="card-image" v-if="project.images && project.images.length">
          <button
            v-if="project.images.length > 1"
            class="img-nav img-prev"
            @click.stop="prevImage(project, idx)"
          >‹</button>
          <img
            :src="project.images[project._activeImg || 0]"
            :alt="project.title"
            loading="lazy"
          />
          <button
            v-if="project.images.length > 1"
            class="img-nav img-next"
            @click.stop="nextImage(project, idx)"
          >›</button>
          <div v-if="project.images.length > 1" class="img-dots">
            <span
              v-for="(_, i) in project.images"
              :key="i"
              :class="['dot', { active: (project._activeImg || 0) === i }]"
            ></span>
          </div>
        </div>
        <div class="card-body">
          <span class="card-category">{{ categoryMap[project.title] || 'Other' }}</span>
          <h3 class="card-title">{{ project.title }}</h3>
          <p class="card-desc">{{ truncateDesc(project.description) }}</p>
          <p class="card-tech"><strong>Tech:</strong> {{ project.tech.slice(0, 5).join(', ') }}</p>
          <div class="card-actions">
            <button
              v-if="project.demo"
              class="card-btn"
              @click="openDemo(project.demo)"
            >▶ View Demo</button>
          </div>
        </div>
      </div>
    </div>

    <p v-if="filteredProjects.length === 0" class="no-results">No projects match this category.</p>

    <!-- Demo Modal -->
    <Teleport to="body">
      <div v-if="activeDemoUrl" class="modal-overlay" @click.self="closeDemo">
        <div class="modal-container">
          <div class="modal-header">
            <span class="modal-label">Live Preview</span>
            <button class="modal-close" @click="closeDemo">&times;</button>
          </div>
          <iframe :src="activeDemoUrl" class="demo-frame" title="Project Demo" allowfullscreen></iframe>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
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
const activeFilter = ref('All');
const activeDemoUrl = ref(null);

// ── Image path resolution (Vite glob for screenshot assets) ──
const screenshotAssets = import.meta.glob('../assets/images/screenshot/*.{png,jpg,jpeg,PNG,JPG,JPEG}', {
  eager: true,
  import: 'default'
});

const resolveImagePath = (path) => {
  if (!path) return null
  if (/^https?:\/\//i.test(path)) return path
  if (/^\/interactives\//i.test(path)) return path

  // Map /src/assets/images/screenshot/xxx to Vite glob key ../assets/images/screenshot/xxx
  let key = path.replace(/^\/src\//, '../').replace(/^src\//, '../')
  if (screenshotAssets[key]) return screenshotAssets[key]

  // Fallback: try without leading slash
  let altKey = path.replace(/^\//, '')
  altKey = '../' + altKey
  if (screenshotAssets[altKey]) return screenshotAssets[altKey]

  return path
}

const resolveInteractivePath = (value) => {
  if (!value) return value
  if (typeof value !== 'string') return value
  if (/^https?:\/\//i.test(value)) return value

  let normalized = value.replace(/^\/+/, '')
  if (normalized.startsWith('assets/')) normalized = normalized.replace(/^assets\//, '')
  if (!normalized.startsWith('interactives/')) normalized = `interactives/${normalized}`

  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
  return `${base}/${normalized}`
}

const normalizeProject = (project) => {
  const normalized = { ...project, _activeImg: 0 }
  if (project.images && Array.isArray(project.images)) {
    normalized.images = project.images.map(img => resolveImagePath(img)).filter(Boolean)
  }
  if (project.demo) normalized.demo = resolveInteractivePath(project.demo)
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
  return desc.length > 150 ? desc.slice(0, 150).trimEnd() + '…' : desc
}

const countByCategory = (cat) => {
  if (cat === 'All') return allProjects.length
  return allProjects.filter(p => categoryMap[p.title] === cat).length
}

// ── Image navigation ──
const prevImage = (project, idx) => {
  const len = project.images.length
  project._activeImg = ((project._activeImg || 0) - 1 + len) % len
}
const nextImage = (project, idx) => {
  project._activeImg = ((project._activeImg || 0) + 1) % project.images.length
}

// ── Modal ──
const openDemo = (url) => {
  activeDemoUrl.value = url
  document.body.style.overflow = 'hidden'
}
const closeDemo = () => {
  activeDemoUrl.value = ''
  document.body.style.overflow = ''
}
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
  margin-bottom: 20px;
  text-align: center;
  color: var(--text);
}

/* ── Filters ── */
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-bottom: 32px;
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
.filter-btn:hover { border-color: #93c5fd; color: var(--accent); }
.filter-btn.active {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.3);
}

/* ── Grid ── */
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 28px;
}

.project-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  transition: all 0.25s;
  display: flex;
  flex-direction: column;
}
.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

/* ── Card Image ── */
.card-image {
  position: relative;
  height: 200px;
  overflow: hidden;
  background: #f1f5f9;
}
.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.img-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255,255,255,0.85);
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s;
  color: #333;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}
.card-image:hover .img-nav { opacity: 1; }
.img-prev { left: 8px; }
.img-next { right: 8px; }
.img-nav:hover { background: #fff; }

.img-dots {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
}
.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(255,255,255,0.5);
  transition: all 0.2s;
}
.dot.active { background: #fff; width: 20px; border-radius: 4px; }

/* ── Card Body ── */
.card-body {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.card-category {
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
.card-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 8px;
  line-height: 1.3;
}
.card-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0 0 12px;
  flex: 1;
}
.card-tech {
  font-size: 0.82rem;
  color: var(--text-light);
  margin: 0 0 16px;
}
.card-actions { margin-top: auto; }
.card-btn {
  display: inline-block;
  padding: 9px 18px;
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}
.card-btn:hover {
  background: var(--accent-hover);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
}

.no-results {
  text-align: center;
  color: var(--text-light);
  font-size: 0.95rem;
  margin-top: 40px;
}

/* ── Modal ── */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  padding: 20px;
  animation: fadeIn 0.2s;
}
.modal-container {
  width: 100%;
  max-width: 1100px;
  height: 90vh;
  max-height: 800px;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 60px rgba(0,0,0,0.4);
  animation: slideUp 0.25s;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border-bottom: 1px solid var(--border);
  background: #fafafa;
}
.modal-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
}
.modal-close {
  background: none;
  border: none;
  font-size: 1.6rem;
  color: #666;
  cursor: pointer;
  padding: 0 4px;
  line-height: 1;
}
.modal-close:hover { color: #000; }
.demo-frame {
  flex: 1;
  width: 100%;
  border: none;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@media (max-width: 768px) {
  .section { padding: 50px 16px; }
  .section-title { font-size: 1.5rem; }
  .project-grid { grid-template-columns: 1fr; gap: 20px; }
  .card-image { height: 180px; }
  .modal-overlay { padding: 8px; }
  .modal-container { max-height: 95vh; border-radius: 8px; }
}
</style>
