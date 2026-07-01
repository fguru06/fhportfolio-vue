<template>
  <header class="hero">
    <div class="hero-bg"></div>
    <div class="hero-inner">
      <div class="hero-img-wrap">
        <img src="../assets/images/photo.png" alt="Fareed Hassan" class="hero-photo" />
      </div>
      <p class="hero-greeting">Hello, I'm</p>
      <h1 class="hero-name">Fareed Hassan</h1>
      <h2 class="hero-title">Front-End Developer &amp; eLearning Specialist</h2>
      <p class="hero-desc">I build responsive, accessible, and high-performance digital experiences used by universities, enterprises, and training organizations.</p>
      <div class="hero-stats">
        <div class="stat">
          <span class="stat-number">10+</span>
          <span class="stat-label">Years Experience</span>
        </div>
        <div class="stat">
          <span class="stat-number">15+</span>
          <span class="stat-label">Projects Delivered</span>
        </div>
        <div class="stat">
          <span class="stat-number">2</span>
          <span class="stat-label">Specialties</span>
        </div>
      </div>
      <div class="hero-buttons">
        <a href="#featured" class="hero-btn hero-btn-primary">View My Top Projects</a>
        <a href="#contact" class="hero-btn hero-btn-outline">Get In Touch</a>
      </div>
    </div>
  </header>
</template>

<script setup>
// Professional hero
</script>

<style scoped>
.hero {
  position: relative;
  padding: 80px 20px 90px;
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
  max-width: 720px;
  margin: 0 auto;
}

.hero-img-wrap {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin: 0 auto 24px;
  padding: 3px;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  box-shadow: 0 8px 32px rgba(37, 99, 235, 0.25);
}
.hero-photo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #fff;
}

.hero-greeting {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 4px;
}

.hero-name {
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  font-weight: 800;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
  letter-spacing: -0.03em;
}

.hero-title {
  font-size: clamp(1.1rem, 2.2vw, 1.35rem);
  font-weight: 600;
  color: var(--text);
  margin-bottom: 16px;
}

.hero-desc {
  font-size: 1.05rem;
  color: var(--text-muted);
  max-width: 560px;
  margin: 0 auto 32px;
  line-height: 1.6;
}

/* Stats */
.hero-stats {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 36px;
  flex-wrap: wrap;
}
.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.stat-number {
  font-size: 2rem;
  font-weight: 800;
  color: #2563eb;
  line-height: 1;
}
.stat-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-top: 4px;
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
  .hero { padding: 50px 16px 60px; }
  .hero-img-wrap { width: 90px; height: 90px; }
  .hero-stats { gap: 24px; }
  .stat-number { font-size: 1.5rem; }
}
</style>
