<template>
  <div>
    <!-- Header -->
    <header class="p-4 bg-gray-800 text-white text-center text-4xl">
      <h1>My Nuxt Blog</h1>
      <nav>
        <NuxtLink to="/13-example/blog">Blog</NuxtLink>
      </nav>
    </header>

    <!-- Main content -->
    <main class="p-4">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="p-4 bg-gray-100 text-center">
      <p>© 2025 My Blog</p>
    </footer>
  </div>
</template>
