<template>
  <header class="hero">
    <h1 class="hero-title">
      Front-End Developer building modern web applications &amp; interactive learning systems.
    </h1>
    <p class="hero-subtitle">
      I create responsive, accessible, and high-performance digital experiences used by universities, enterprises, and training organizations.
    </p>
    <div class="hero-cta">
      <a href="#featured" class="btn-primary">View My Best Work</a>
      <a href="#contact" class="btn-secondary">Hire Me</a>
    </div>
  </header>
</template>

<script setup>
// Premium hero — SaaS landing page style
</script>

<style scoped>
.hero {
  padding: 100px 20px;
  text-align: center;
  background: linear-gradient(135deg, #f7f9fc 0%, #eef3ff 100%);
}

.hero-title {
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 800;
  color: var(--text);
  max-width: 760px;
  margin: 0 auto 16px;
  letter-spacing: -0.02em;
  line-height: 1.25;
}

.hero-subtitle {
  font-size: 1.15rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto 40px;
  line-height: 1.6;
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.btn-primary {
  position: relative;
  display: inline-block;
  padding: 14px 30px;
  background: linear-gradient(135deg, #2563eb, #4f46e5);
  color: #fff;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  overflow: hidden;
  isolation: isolate;
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.3);
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.btn-primary::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1d4ed8, #4338ca);
  opacity: 0;
  transition: opacity 0.35s ease;
  z-index: -1;
}
.btn-primary::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -60%;
  width: 60%;
  height: 200%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transform: rotate(25deg);
  transition: left 0.6s ease;
  z-index: -1;
}
.btn-primary:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 10px 28px rgba(37, 99, 235, 0.45);
  color: #fff;
}
.btn-primary:hover::before {
  opacity: 1;
}
.btn-primary:hover::after {
  left: 120%;
}
.btn-primary:active {
  transform: translateY(-1px) scale(0.98);
}

.btn-secondary {
  position: relative;
  display: inline-block;
  padding: 14px 30px;
  background: #fff;
  color: #2563eb;
  border: 2px solid #dbeafe;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  overflow: hidden;
  isolation: isolate;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.btn-secondary::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -60%;
  width: 60%;
  height: 200%;
  background: linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.08), transparent);
  transform: rotate(25deg);
  transition: left 0.6s ease;
  z-index: -1;
}
.btn-secondary:hover {
  border-color: #2563eb;
  background: #f0f5ff;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.2);
}
.btn-secondary:hover::after {
  left: 120%;
}

@media (max-width: 768px) {
  .hero { padding: 60px 16px 70px; }
  .hero-subtitle { font-size: 1rem; }
}
</style>