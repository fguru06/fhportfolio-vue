<template>
  <section id="contact" class="section reveal">
    <h2 class="section-title">Get In Touch</h2>
    <p class="contact-subtitle">Let's build something great together.</p>
    <div class="contact-grid">
      <a href="mailto:fhassan06@gmail.com" class="contact-card">
        <span class="contact-icon">📧</span>
        <span class="contact-label">Email</span>
        <span class="contact-value">fhassan06@gmail.com</span>
      </a>
      <a href="https://www.linkedin.com/in/fhassan06/" target="_blank" rel="noopener" class="contact-card">
        <span class="contact-icon">🔗</span>
        <span class="contact-label">LinkedIn</span>
        <span class="contact-value">linkedin.com/in/fhassan06</span>
      </a>
      <a href="https://mediasurf.ca" target="_blank" rel="noopener" class="contact-card">
        <span class="contact-icon">🌐</span>
        <span class="contact-label">Website</span>
        <span class="contact-value">mediasurf.ca</span>
      </a>
    </div>
  </section>
</template>

<script setup>
// Professional contact section
</script>

<style scoped>
.section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 20px 100px;
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
  margin: 0 auto 8px;
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
.contact-subtitle {
  text-align: center;
  color: var(--text-muted);
  font-size: 1.05rem;
  margin: 0 0 36px;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  max-width: 720px;
  margin: 0 auto;
}
.contact-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 28px 20px;
  background: #fff;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  text-decoration: none;
  color: inherit;
  transition: all 0.25s;
  box-shadow: var(--shadow-sm);
}
.contact-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
  border-color: #93c5fd;
}
.contact-icon {
  font-size: 1.8rem;
  margin-bottom: 4px;
}
.contact-label {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
}
.contact-value {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--accent);
  word-break: break-all;
}

@media (max-width: 768px) {
  .section { padding: 50px 16px 60px; }
  .section-title { font-size: clamp(1.3rem, 4vw, 1.7rem); padding: 0.65rem 1.6rem; margin-bottom: 6px; }
  .contact-grid { grid-template-columns: 1fr; max-width: 400px; }
}
</style>
