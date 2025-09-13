<script setup>
const posts = [
  { slug: "hello-nuxt", title: "Hello Nuxt 3", category: "nuxt" },
  { slug: "vue-101", title: "Learn Vue Basics", category: "vue" },
  { slug: "tailwind-setup", title: "Tailwind Setup Guide", category: "css" },
];
</script>

<template>
  <div class="max-w-3xl mx-auto p-6">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Blog List</h1>

    <ul class="space-y-4">
      <li
        v-for="post in posts"
        :key="post.slug"
        class="p-4 border border-gray-200 rounded-lg hover:shadow-md transition"
      >
        <NuxtLink
          :to="`/13-example/blog/${post.slug}`"
          class="text-xl font-semibold text-blue-600 hover:underline"
        >
          {{ post.title }}
        </NuxtLink>
        <p class="text-sm text-gray-500 mt-1">Category: {{ post.category }}</p>
      </li>
    </ul>
  </div>
</template>
