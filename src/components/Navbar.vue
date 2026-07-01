<template>
  <nav class="navbar">
    <div class="navbar-inner">
      <a href="#" class="navbar-brand">Fareed Hassan</a>
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
// Clean navbar – no complex logic needed
</script>

<style scoped>
.navbar {
  background: #ffffff;
  border-bottom: 1px solid #e5e5e5;
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0 20px;
}
.navbar-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
}
.navbar-brand {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1a1a1a;
  text-decoration: none;
}
.navbar-links {
  list-style: none;
  display: flex;
  gap: 24px;
  margin: 0;
  padding: 0;
}
.navbar-links a {
  color: #555;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.15s;
}
.navbar-links a:hover {
  color: #007bff;
}

/* Mobile hamburger */
.navbar-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #1a1a1a;
}

@media (max-width: 768px) {
  .navbar-inner {
    flex-wrap: wrap;
    height: auto;
    padding: 12px 0;
  }
  .navbar-brand {
    font-size: 1.05rem;
  }
  .navbar-links {
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
    justify-content: center;
    padding-top: 8px;
  }
  .navbar-links a {
    font-size: 0.85rem;
  }
}
</style>
