<template>
  <section id="contact" class="section">
    <h2 class="section-title">Contact</h2>
    <div class="contact-card">
      <p>Let's build something great together.</p>
      <div class="contact-links">
        <a href="mailto:fhassan06@gmail.com">📧 fhassan06@gmail.com</a>
        <a href="https://www.linkedin.com/in/fhassan06/" target="_blank" rel="noopener">🔗 LinkedIn</a>
        <a href="https://mediasurf.ca" target="_blank" rel="noopener">🌐 mediasurf.ca</a>
      </div>
    </div>
  </section>
</template>

<script setup>
// Simple contact section
</script>

<style scoped>
.section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 20px;
}
.section-title {
  font-size: 2rem;
  margin-bottom: 24px;
  text-align: center;
}
.contact-card {
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
}
.contact-card p {
  font-size: 1.1rem;
  margin-bottom: 20px;
  color: #333;
}
.contact-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}
.contact-links a {
  font-size: 1rem;
  color: #007bff;
  text-decoration: none;
}
.contact-links a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .section {
    padding: 40px 16px;
  }
  .section-title {
    font-size: 1.6rem;
  }
  .contact-card {
    padding: 20px;
  }
}
</style>
