<script setup>
const route = useRoute();

// fake db
const posts = {
  "hello-nuxt": { title: "Hello Nuxt 3", content: "Welcome to Nuxt 3!" },
  "vue-101": { title: "Vue Basics", content: "Learn Vue step by step." },
  "tailwind-setup": {
    title: "Tailwind Setup",
    content: "Guide to TailwindCSS.",
  },
};

const post = posts[route.params.slug];
</script>

<template>
  <div class="max-w-2xl mx-auto p-6">
    <h1 class="text-4xl font-bold text-gray-800 mb-4">
      {{ post?.title }}
    </h1>
    <p class="text-lg text-gray-600 leading-relaxed mb-8">
      {{ post?.content }}
    </p>

    <NuxtLink
      to="/13-example/blog"
      class="inline-block text-blue-600 hover:text-blue-800 font-medium hover:underline"
    >
      ← Back to list
    </NuxtLink>
  </div>
</template>
