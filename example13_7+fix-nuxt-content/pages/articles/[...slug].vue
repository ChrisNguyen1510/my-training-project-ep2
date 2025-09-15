<script setup>
const { $dayjs } = useNuxtApp();
const route = useRoute();

const { data: article } = await useAsyncData(() =>
  queryContent("articles", ...route.params.slug).findOne()
);
</script>

<template>
  <div class="p-6 max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold mb-2">{{ article.title }}</h1>
    <p class="text-gray-500 text-sm mb-6">
      {{ $dayjs(article.date).format("DD/MM/YYYY") }} • {{ article.author }}
    </p>

    <ContentRenderer :value="article" />
  </div>
</template>
