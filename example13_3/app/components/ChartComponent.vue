<script setup>
import { onMounted, ref } from "vue";
import { Chart } from "chart.js/auto";

const canvas = ref(null);

onMounted(() => {
  new Chart(canvas.value, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [
        {
          label: "Votes",
          data: [12, 19, 3],
          borderWidth: 1,
        },
        {
          label: "Options",
          data: [12, 19, 3],
          borderWidth: 1,
        },
        {
          label: "Interview",
          data: [12, 19, 3],
          borderWidth: 1,
        },
      ],
    },
  });
});
</script>

<template>
  <canvas ref="canvas" width="300" height="100"></canvas>
</template>
