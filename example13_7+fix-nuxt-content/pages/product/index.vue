<script setup lang="ts">
import { useProducts2 } from "@/composables/useProducts2";
import { slugify } from "@/untils/slugify";
import { formatPrice } from "@/untils/formatPrice";

const { products } = useProducts2();
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Danh sách sản phẩm</h1>

    <ul class="space-y-3">
      <li
        v-for="product in products"
        :key="product.id"
        class="p-4 border rounded-lg flex justify-between items-center"
      >
        <span
          >{{ product.name }} - <b>{{ formatPrice(product.price) }}</b></span
        >
        <NuxtLink
          :to="`/product/${slugify(product.name)}`"
          class="px-3 py-1 bg-blue-600 text-white rounded"
        >
          Xem chi tiết
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
