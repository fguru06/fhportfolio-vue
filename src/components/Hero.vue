<template>
  <header class="hero">
    <div class="hero-bg"></div>
    <div class="hero-inner">
      <h1 class="hero-title">Front-End Developer specializing in interactive learning systems &amp; modern web applications.</h1>
      <p class="hero-desc">I build responsive, accessible, and high-performance digital experiences used by universities, enterprises, and training organizations.</p>
      <div class="hero-buttons">
        <a href="#featured" class="hero-btn hero-btn-primary">View My Top Projects</a>
        <a href="#contact" class="hero-btn hero-btn-outline">Hire Me for Front-End</a>
        <a href="#contact" class="hero-btn hero-btn-outline">Hire Me for eLearning</a>
      </div>
    </div>
  </header>
</template>

<script setup>
// Professional hero — no photo, just strong copy
</script>

<style scoped>
.hero {
  position: relative;
  padding: 100px 20px 110px;
  text-align: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 50% 0%, #dbeafe 0%, transparent 60%),
    linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  z-index: 0;
}

.hero-inner {
  position: relative;
  z-index: 1;
  max-width: 760px;
  margin: 0 auto;
}

.hero-title {
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 800;
  color: var(--text);
  margin-bottom: 16px;
  letter-spacing: -0.02em;
  line-height: 1.25;
}

.hero-desc {
  font-size: 1.15rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto 40px;
  line-height: 1.6;
}

/* Buttons */
.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}
.hero-btn {
  display: inline-block;
  padding: 13px 28px;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  transition: all 0.2s;
}
.hero-btn-primary {
  background: linear-gradient(135deg, #2563eb, #4f46e5);
  color: #fff;
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.3);
}
.hero-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(37, 99, 235, 0.4);
  color: #fff;
}
.hero-btn-outline {
  background: #fff;
  color: #2563eb;
  border: 2px solid #dbeafe;
}
.hero-btn-outline:hover {
  border-color: #2563eb;
  background: #f8fafc;
}

@media (max-width: 768px) {
  .hero { padding: 60px 16px 70px; }
  .hero-desc { font-size: 1rem; }
}
</style>