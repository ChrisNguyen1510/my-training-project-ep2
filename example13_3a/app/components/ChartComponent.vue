<script setup>
import { onMounted, ref } from "vue";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const chartRef = ref(null);

onMounted(() => {
  if (chartRef.value) {
    new Chart(chartRef.value, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
          {
            label: "Sales",
            data: [12, 19, 3, 5, 2],
            backgroundColor: "rgba(54, 162, 235, 0.6)",
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "top" },
          title: { display: true, text: "Monthly Sales" },
        },
      },
    });
  }
});
</script>

<template>
  <div class="p-4 bg-blue-100 rounded-lg">
    <h2 class="mb-2 font-bold">Chart Component</h2>
    <canvas ref="chartRef"></canvas>
  </div>
</template>
