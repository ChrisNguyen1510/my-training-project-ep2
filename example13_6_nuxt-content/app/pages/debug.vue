<script setup lang="ts">
declare const queryContent: any;

const { data: all } = await useAsyncData(() => queryContent().find());

watchEffect(() => console.log("All content:", all.value));
</script>

<template>
  <div>
    <h1>Debug</h1>
    <pre>{{ all }}</pre>
  </div>
</template>
