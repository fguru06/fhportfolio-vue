<template>
  <section id="about" class="section reveal">
    <h2 class="section-title">About Me</h2>
    <div class="about-card">
      <p>
        I'm <strong>Fareed Hassan</strong> — a Front-End Developer and eLearning Specialist with 10+ years building interactive learning modules, custom LMS experiences, and modern web applications.
      </p>
      <p>
        I combine <strong>front-end engineering</strong> (Vue.js, JavaScript) with <strong>instructional design</strong> and multimedia development to create engaging, accessible, and scalable digital learning products used by universities, enterprises, and training organizations. I leverage <strong>AI-powered tools</strong> including GitHub Copilot and VS Code to accelerate development, solve complex problems, and deliver high-quality solutions efficiently.
      </p>
    </div>
  </section>
</template>

<script setup>
// Clean about section — no photo, just strong copy
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
  margin-bottom: 32px;
  color: var(--text);
}

.about-card {
  background: #fff;
  padding: 36px 40px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  max-width: 760px;
  margin: 0 auto;
  box-shadow: var(--shadow-sm);
}
.about-card p {
  font-size: 1.05rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin: 0 0 16px;
}
.about-card p:last-child {
  margin-bottom: 0;
}
.about-card strong {
  color: var(--accent);
  font-weight: 600;
}

@media (max-width: 768px) {
  .section { padding: 50px 16px; }
  .section-title { font-size: 1.5rem; }
  .about-card { padding: 24px 20px; }
  .about-card p { font-size: 0.95rem; }
}
</style>