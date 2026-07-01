<template>
  <nav class="navbar">
    <div class="navbar-inner">
      <a href="#" class="navbar-brand">
        <span class="brand-dot"></span>
        Fareed Hassan
      </a>
      <ul class="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#featured">Featured</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
// Professional navbar
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}
.navbar-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 20px;
}
.navbar-brand {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
}
.brand-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  display: inline-block;
}
.navbar-links {
  list-style: none;
  display: flex;
  gap: 28px;
  margin: 0;
  padding: 0;
}
.navbar-links a {
  color: var(--text-muted);
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.15s;
  position: relative;
}
.navbar-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent);
  border-radius: 1px;
  transition: width 0.2s;
}
.navbar-links a:hover {
  color: var(--accent);
}
.navbar-links a:hover::after {
  width: 100%;
}

@media (max-width: 768px) {
  .navbar-inner {
    flex-wrap: wrap;
    height: auto;
    padding: 12px 16px;
    gap: 8px;
  }
  .navbar-brand { font-size: 1rem; }
  .navbar-links {
    gap: 16px;
    width: 100%;
    justify-content: center;
  }
  .navbar-links a { font-size: 0.82rem; }
}
</style>
