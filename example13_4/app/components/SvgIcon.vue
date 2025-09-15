<template>
  <svg
    v-if="name === 'check'"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="green"
    viewBox="0 0 24 24"
  >
    <path
      d="M20.285 6.709l-11.285 11.291-5.285-5.291 1.41-1.418 
              3.875 3.877 9.875-9.877z"
    />
  </svg>

  <svg
    v-else-if="name === 'star'"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="gold"
    viewBox="0 0 24 24"
  >
    <path
      d="M12 .587l3.668 7.57 8.332 1.151-6.064 
              5.799 1.48 8.303-7.416-3.967-7.417 
              3.967 1.481-8.303-6.064-5.799 
              8.332-1.151z"
    />
  </svg>

  <svg
    v-else-if="name === 'heart'"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="red"
    viewBox="0 0 24 24"
  >
    <path
      d="M12 21.35l-1.45-1.32c-5.15-4.68-8.55-7.78-8.55-11.54 
              0-2.99 2.42-5.49 5.4-5.49 1.74 
              0 3.41.81 4.6 2.09 1.19-1.28 
              2.86-2.09 4.6-2.09 2.98 
              0 5.4 2.5 5.4 5.49 
              0 3.76-3.4 6.86-8.55 11.54z"
    />
  </svg>
</template>

<script setup>
defineProps({
  name: String,
});
</script>
