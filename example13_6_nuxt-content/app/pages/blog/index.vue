<script setup lang="ts">
interface Article {
  _path: string;
  title?: string;
  description?: string;
  body?: string;
}

import { queryContent } from "#content";

// Lấy tất cả bài viết trong folder articles
const { data: articles } = await useAsyncData<Article[]>(
  () =>
    queryContent()
      .where({ _path: /^\/articles\// }) // lọc folder articles
      .sort({ date: -1 }) // sắp xếp theo date giảm dần
      .find() // trả về mảng bài viết
);

watchEffect(() => console.log("Articles:", articles.value));
</script>

<template>
  <div class="p-6 max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">📚 Blog</h1>

    <div v-if="articles?.length">
      <div v-for="article in articles" :key="article._path" class="mb-6">
        <NuxtLink
          :to="article._path"
          class="text-xl font-semibold text-blue-600"
        >
          {{ article.title }}
        </NuxtLink>
        <p class="mt-1 text-gray-700">
          {{
            article.description ||
            (article.body ? article.body.slice(0, 150) + "..." : "")
          }}
        </p>
      </div>
    </div>

    <div v-else>Chưa có bài viết nào.</div>
  </div>
</template>
