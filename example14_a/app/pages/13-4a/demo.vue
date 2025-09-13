<script setup>
import banner from "~/assets/images/banner.png";
</script>

<template>
  <div class="page">
    <!-- Logo từ public/ -->
    <header class="header">
      <img src="/images/logo.png" alt="Logo" class="logo" />
    </header>

    <!-- Banner từ assets/ -->
    <section class="banner">
      <img :src="banner" alt="Banner" />
    </section>

    <!-- SVG inline -->
    <section class="icon-section">
      <h2 class="global-title">Inline SVG Example</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="icon"
      >
        <path d="M12 2L15 8H9L12 2Z" />
        <path d="M12 22L9 16H15L12 22Z" />
        <path d="M2 12L8 15V9L2 12Z" />
        <path d="M22 12L16 9V15L22 12Z" />
      </svg>
    </section>
  </div>
</template>

<style scoped>
.page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.logo {
  width: 120px;
  height: auto;
}

.banner img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.icon-section {
  text-align: center;
  margin-top: 30px;
}

.icon {
  color: #f43f5e; /* đỏ hồng */
}
</style>
