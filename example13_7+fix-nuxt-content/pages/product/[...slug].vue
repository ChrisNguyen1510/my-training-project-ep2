<script setup lang="ts">
import { useRoute } from "vue-router";
import { useProducts2 } from "@/composables/useProducts2";
import { formatPrice } from "@/untils/formatPrice";

const route = useRoute();
const { getProductBySlug } = useProducts2();

const product = computed(() => {
  // vì dùng [...slug] nên route.params.slug là array
  const slug = Array.isArray(route.params.slug)
    ? route.params.slug[0]
    : route.params.slug;
  return getProductBySlug(slug as string);
});
</script>

<template>
  <div class="p-6">
    <NuxtLink to="/product" class="text-blue-600 underline">
      ⬅ Quay lại
    </NuxtLink>

    <div v-if="product" class="mt-6">
      <h1 class="text-3xl font-bold">{{ product.name }}</h1>
      <p class="text-xl text-green-600 mt-2">
        {{ formatPrice(product.price) }}
      </p>
    </div>

    <div v-else class="text-red-600 mt-6">❌ Không tìm thấy sản phẩm</div>
  </div>
</template>
