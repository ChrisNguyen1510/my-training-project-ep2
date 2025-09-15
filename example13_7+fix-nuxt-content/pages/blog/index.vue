<script setup>
const {
  data: articles,
  pending,
  error,
} = await useAsyncData("articles", () => queryContent("/articles").find());
console.log(articles)
</script>

<template>
  <div>
    <h1>Danh sách bài viết</h1>

    <div v-if="pending">Đang tải...</div>
    <div v-else-if="error">Có lỗi xảy ra: {{ error.message }}</div>

    <ul v-else>
      <li v-for="post in articles" :key="post._path">
        <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
