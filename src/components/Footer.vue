<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="footer-dot"></span>
        <strong>Fareed Hassan</strong>
      </div>
      <div class="footer-links">
        <a href="mailto:fhassan06@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/fhassan06/" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://mediasurf.ca" target="_blank" rel="noopener">MediaSurf</a>
      </div>
      <p class="footer-copy">© 2026 Fareed Hassan — MediaSurf. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
// Footer
</script>

<style scoped>
.footer {
  background: #0f172a;
  color: #cbd5e1;
  padding: 48px 20px 32px;
  margin-top: 0;
}
.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}
.footer-brand {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 1.1rem;
  margin-bottom: 16px;
  color: #fff;
}
.footer-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, #60a5fa, #a78bfa);
  display: inline-block;
}
.footer-links {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 20px;
}
.footer-links a {
  color: #94a3b8;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.15s;
}
.footer-links a:hover {
  color: #fff;
}
.footer-copy {
  font-size: 0.8rem;
  color: #64748b;
  margin: 0;
}

@media (max-width: 768px) {
  .footer { padding: 32px 16px 24px; }
  .footer-links { gap: 16px; }
}
</style>
