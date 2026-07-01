<template>
  <header class="hero">
    <h2 class="hero-subtitle">Fareed Hassan</h2>
    <h1 class="hero-title">Front-End Developer specializing in interactive learning systems &amp; modern web applications.</h1>
    <p class="hero-desc">I build responsive, accessible, and high-performance digital experiences used by universities, enterprises, and training organizations.</p>
    <div class="hero-buttons">
      <a href="#featured" class="hero-btn">View My Top Projects</a>
      <a href="#contact" class="hero-btn">Hire Me for Front-End</a>
      <a href="#contact" class="hero-btn">Hire Me for eLearning</a>
    </div>
  </header>
</template>

<script setup>
// Clean hero – no script needed
</script>

<style scoped>
.hero {
  padding: 80px 20px;
  text-align: center;
  background: #ffffff;
  border-bottom: 1px solid #e5e5e5;
}

.hero-title {
  font-size: 2.4rem;
  margin-bottom: 10px;
  color: #1a1a1a;
  font-weight: 700;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.hero-subtitle {
  font-size: 1rem;
  color: #555;
  font-weight: 600;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.hero-desc {
  font-size: 1.2rem;
  color: #555;
  max-width: 600px;
  margin: 0 auto 30px;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.hero-btn {
  display: inline-block;
  padding: 12px 22px;
  margin: 4px;
  background: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  transition: background 0.2s, transform 0.15s;
}

.hero-btn:hover {
  background: #0056b3;
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .hero {
    padding: 50px 16px;
  }
  .hero-title {
    font-size: 1.5rem;
  }
  .hero-desc {
    font-size: 1rem;
  }
  .hero-btn {
    padding: 10px 18px;
    font-size: 0.9rem;
  }
}
</style>
