<template>
  <section id="why-hire-me" class="section reveal">
    <h2 class="section-title">Why Hire Me</h2>
    <ul class="why-list">
      <li>10+ years building interactive learning systems for universities &amp; enterprise clients</li>
      <li>4+ years modern front-end development using Vue.js and JavaScript</li>
      <li>Strong UI/UX sense with clean, accessible, mobile-first design</li>
      <li>AI expert — leveraging Copilot, VS Code & LLMs to accelerate delivery and solve complex problems</li>
      <li>Experience delivering SCORM/xAPI modules and custom LMS solutions</li>
      <li>Blend of engineering + instructional design for high-impact learning products</li>
    </ul>
  </section>
</template>

<script setup>
// Why Hire Me — instant recruiter confidence
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

.why-list {
  max-width: 700px;
  margin: auto;
  padding: 0;
  list-style: none;
}

.why-list li {
  background: #fff;
  padding: 16px 20px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 1px solid var(--border);
  font-size: 1.02rem;
  color: var(--text);
  line-height: 1.55;
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  padding-left: 44px;
}

.why-list li::before {
  content: '✓';
  position: absolute;
  left: 16px;
  top: 16px;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #2563eb, #4f46e5);
  color: #fff;
  border-radius: 50%;
  font-size: 0.7rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.why-list li:hover {
  transform: translateX(4px);
  box-shadow: var(--shadow);
}

@media (max-width: 768px) {
  .section { padding: 50px 16px; }
  .section-title { font-size: 1.5rem; }
  .why-list li { font-size: 0.92rem; padding: 14px 16px 14px 40px; }
  .why-list li::before { left: 12px; top: 14px; }
}
</style>
