<script setup>
const route = useRoute();

const allPosts = [
  { slug: "hello-nuxt", title: "Hello Nuxt 3", category: "nuxt" },
  { slug: "vue-101", title: "Learn Vue Basics", category: "vue" },
  { slug: "tailwind-setup", title: "Tailwind Setup Guide", category: "css" },
  { slug: "vue-advanced", title: "Advanced Vue Tricks", category: "vue" },
  { slug: "nuxt-modules", title: "Nuxt Modules", category: "nuxt" },
];

// filter by category
const filtered = allPosts.filter((p) => p.category === route.params.name);

// pagination
const pageSize = 2;
const pageNum = parseInt(route.params.num);
const start = (pageNum - 1) * pageSize;
const paginated = filtered.slice(start, start + pageSize);
</script>

<template>
  <div class="max-w-2xl mx-auto p-6">
    <h1 class="text-3xl font-bold text-gray-800 mb-2">
      Category: {{ route.params.name }}
    </h1>
    <h2 class="text-lg text-gray-500 mb-6">Page {{ route.params.num }}</h2>

    <ul class="space-y-4">
      <li
        v-for="post in paginated"
        :key="post.slug"
        class="p-4 bg-white shadow rounded-lg hover:shadow-md transition"
      >
        <NuxtLink
          :to="`/13-example/blog/${post.slug}`"
          class="text-xl font-semibold text-blue-600 hover:underline"
        >
          {{ post.title }}
        </NuxtLink>
      </li>
    </ul>

    <!-- pagination -->
    <div class="mt-8 flex justify-between items-center">
      <NuxtLink
        v-if="pageNum > 1"
        :to="`/13-example/blog/category/${route.params.name}/page/${
          pageNum - 1
        }`"
        class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
      >
        ← Prev
      </NuxtLink>

      <NuxtLink
        v-if="start + pageSize < filtered.length"
        :to="`/13-example/blog/category/${route.params.name}/page/${
          pageNum + 1
        }`"
        class="ml-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Next →
      </NuxtLink>
    </div>
  </div>
</template>
