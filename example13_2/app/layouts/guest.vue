<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-100"
  >
    <header class="mb-6">
      <h1 class="text-2xl font-bold text-gray-700">Guest Layout</h1>
    </header>

    <main class="w-full max-w-md bg-white p-6 rounded shadow">
      <slot />
    </main>
  </div>
</template>
