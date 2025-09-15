<template>
  <div>
    <!-- Header -->
    <header class="header">
      <img src="/images/logo.png" alt="Logo" class="logo" />
      <nav>
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Contact</a>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <img src="@/assets/images/banner.png" alt="Banner" class="banner" />
      <div class="hero-text">
        <h1>Chào mừng đến với Landing Page</h1>
        <p>Xây dựng web siêu nhanh với Nuxt 3 🚀</p>
        <button class="cta">Bắt đầu ngay</button>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features container">
      <h2>Tính năng nổi bật</h2>
      <div class="feature-list">
        <div class="feature">
          <SvgIcon name="check" />
          <p>Nhanh chóng & Hiệu quả</p>
        </div>
        <div class="feature">
          <SvgIcon name="star" />
          <p>Thiết kế đẹp mắt</p>
        </div>
        <div class="feature">
          <SvgIcon name="heart" />
          <p>Dễ sử dụng & Yêu thích ❤️</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import SvgIcon from "@/components/SvgIcon.vue";
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  height: 50px;
}

.header nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #333;
}

.hero {
  position: relative;
  text-align: center;
  color: white;
}

.banner {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  filter: brightness(0.6);
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.cta {
  margin-top: 20px;
  padding: 12px 24px;
  background: #0070f3;
  border: none;
  color: white;
  font-size: 18px;
  border-radius: 6px;
  cursor: pointer;
}

.cta:hover {
  background: #005bb5;
}

.features {
  margin-top: 60px;
  text-align: center;
}

.feature-list {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 20px;
}

.feature {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
