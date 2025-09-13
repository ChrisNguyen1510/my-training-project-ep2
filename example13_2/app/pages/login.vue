<script setup>
definePageMeta({
  layout: "guest",
});
</script>

<template>
  <div>
    <h2 class="text-xl font-semibold mb-4">Login Page</h2>
    <form class="space-y-4">
      <input
        type="text"
        placeholder="Username"
        class="w-full border p-2 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        class="w-full border p-2 rounded"
      />
      <button
        type="submit"
        class="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Login
      </button>
    </form>
  </div>
</template>
