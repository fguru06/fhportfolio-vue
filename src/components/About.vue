<template>
  <section id="about" class="section">
    <h2 class="section-title">About Me</h2>
    <div class="about-card">
      <p>
        I'm Fareed Hassan — a Front-End Developer and eLearning Specialist with 10+ years building interactive learning modules,
        custom LMS experiences, and modern web applications. I combine front-end engineering (React, Vue, JavaScript)
        with instructional design and multimedia development to create engaging, accessible, and scalable digital learning products.
      </p>
    </div>
  </section>
</template>

<script setup>
// Static about section
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
.about-card {
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  max-width: 800px;
  margin: 0 auto;
}
.about-card p {
  font-size: 1.05rem;
  color: #555;
  line-height: 1.7;
  margin: 0;
}

@media (max-width: 768px) {
  .section {
    padding: 40px 16px;
  }
  .section-title {
    font-size: 1.6rem;
  }
  .about-card {
    padding: 20px;
  }
  .about-card p {
    font-size: 0.95rem;
  }
}
</style>
```
