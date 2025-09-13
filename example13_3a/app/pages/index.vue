<template>
  <div class="space-y-6 p-6">
    <h1 class="text-2xl font-bold">Dashboard</h1>

    <!-- Normal Component -->
    <Hello />

    <!-- Client-only Chart -->
    <ClientOnly fallback="Loading chart...">
      <ChartComponent />
    </ClientOnly>

    <!-- Server-only SEO text -->
    <ServerOnly>
      <div class="p-4 bg-gray-100 rounded-lg">
        <h2>SEO Content</h2>
        <p>
          This text is rendered only on the server for SEO purposes and will not
          hydrate on client.
        </p>
      </div>
    </ServerOnly>
  </div>
</template>
