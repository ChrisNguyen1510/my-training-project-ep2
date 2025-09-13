<script setup>
useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "My Training Project",
        url: "https://example.com",
      }),
    },
  ],
});
</script>

<template>
  <div>
    <h1>Demo ClientOnly & ServerOnly</h1>

    <ClientOnly fallback="Loading chart...">
      <ChartComponent />
    </ClientOnly>

    <!-- JSON-LD không cần để trong template -->
  </div>
</template>
