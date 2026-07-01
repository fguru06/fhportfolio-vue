<template>
  <section id="about" class="section">
    <h2 class="section-title">About Me</h2>
    <div class="about-grid">
      <div class="about-visual">
        <div class="about-img-wrap">
          <img src="../assets/images/photo.png" alt="Fareed Hassan" class="about-photo" />
          <div class="about-exp-badge">10+ Years</div>
        </div>
      </div>
      <div class="about-text">
        <p class="about-intro">
          I'm <strong>Fareed Hassan</strong> — a Front-End Developer and eLearning Specialist passionate about
          building interactive, accessible, and high-performance digital experiences.
        </p>
        <p>
          With 10+ years of experience, I combine front-end engineering (React, Vue, JavaScript)
          with instructional design to create engaging learning modules, custom LMS experiences,
          and modern web applications for universities, enterprises, and training organizations.
        </p>
        <div class="about-highlights">
          <div class="highlight">
            <span class="highlight-icon">🎯</span>
            <span>Specialized in eLearning & Front-End</span>
          </div>
          <div class="highlight">
            <span class="highlight-icon">♿</span>
            <span>WCAG Accessibility advocate</span>
          </div>
          <div class="highlight">
            <span class="highlight-icon">📱</span>
            <span>Mobile-first responsive design</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Professional about section
</script>

<style scoped>
.section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 20px;
}
.section-title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 48px;
  color: var(--text);
}

.about-grid {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 48px;
  align-items: start;
}

.about-visual {
  display: flex;
  justify-content: center;
}
.about-img-wrap {
  position: relative;
  width: 220px;
  height: 260px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}
.about-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.about-exp-badge {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  color: #fff;
  padding: 6px 18px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

.about-text p {
  font-size: 1.02rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin: 0 0 16px;
}
.about-intro {
  font-size: 1.1rem !important;
  color: var(--text) !important;
}
.about-intro strong {
  color: #2563eb;
}

.about-highlights {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--border);
}
.highlight {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  color: var(--text-muted);
}
.highlight-icon {
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .section { padding: 50px 16px; }
  .section-title { font-size: 1.6rem; margin-bottom: 32px; }
  .about-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .about-img-wrap { width: 160px; height: 200px; }
}
</style>
