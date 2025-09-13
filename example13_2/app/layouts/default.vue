<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-blue-600 text-white p-4">
      <h1 class="text-xl font-bold">Default Layout</h1>
    </header>

    <main class="flex-1 p-6 bg-gray-50">
      <slot />
    </main>

    <footer class="bg-gray-800 text-white p-4 text-center">
      Default Footer
    </footer>
  </div>
</template>
