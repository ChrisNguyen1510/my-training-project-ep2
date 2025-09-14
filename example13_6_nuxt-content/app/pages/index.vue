<script setup lang="ts">
interface HomeData {
  title?: string;
  description?: string;
}

// Nếu TypeScript báo lỗi queryCollection
declare const queryCollection: any;

const { data: home } = await useAsyncData<HomeData>(() =>
  queryCollection("content").path("/").first()
);

useSeoMeta({
  title: home.value?.title || "Default Title",
  description: home.value?.description || "Default Description",
});
</script>

<template>
  <div class="p-6 max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold mb-4">{{ home?.title }}</h1>
    <p class="text-gray-700 mb-6">{{ home?.description }}</p>

    <!-- Nếu muốn hiển thị nội dung Markdown, dùng ContentRenderer -->
    <ContentRenderer v-if="home" :value="home" />
  </div>
</template>
