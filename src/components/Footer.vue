<template>
  <footer class="footer">
    <p>© 2026 Fareed Hassan — MediaSurf</p>
  </footer>
</template>

<script setup>
// Footer – no logic needed
</script>

<style scoped>
.footer {
  text-align: center;
  padding: 40px 20px;
  background: #ffffff;
  border-top: 1px solid #e5e5e5;
  color: #777;
  font-size: 0.9rem;
}
.footer p {
  margin: 0;
}

@media (max-width: 768px) {
  .footer {
    padding: 24px 16px;
    font-size: 0.8rem;
  }
}
</style>
