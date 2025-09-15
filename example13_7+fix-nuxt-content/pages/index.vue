<template>
    <h1>This is index</h1>
    <ul>
        <li><nuxt-link to="/blog">Blog</nuxt-link></li>
    </ul>
     <div>
    <p>Giá: {{ price }}</p>
    <p>Hôm nay: {{ today }}</p>
  </div>
  <div class="p-4 space-y-2">
    <p><b>Original:</b> {{ rawText }}</p>
    <p><b>Capitalize:</b> {{ capitalized }}</p>
    <p><b>Slugify:</b> {{ slug }}</p>
  </div>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Danh sách sản phẩm</h1>

    <div v-if="loading">⏳ Đang tải...</div>
    <div v-else-if="error" class="text-red-500">❌ {{ error }}</div>
    <div v-else class="grid grid-cols-2 md:grid-cols-4 gap-4" style="display: flex; text-align: center;">
      <div v-for="p in products" :key="p.id" class="border rounded-xl p-4 shadow">
        <img style="width: 50%;" :src="p.image" :alt="p.title" class="h-32 mx-auto object-contain" />
        <h2 class="text-lg font-semibold mt-2">{{ p.title }}</h2>
        <p class="text-gray-600">{{ formatCurrency(p.price, 'USD') }}</p>
        <NuxtLink
          :to="`/product/${slugify(p.title)}`"
          class="text-blue-500 hover:underline"
        >
          Xem chi tiết
        </NuxtLink>
      </div>
    </div>
  </div>
</template>     
<script setup>
import { formatCurrency,formatDate } from '~/untils/format';
import { capitalize,slugify } from '~/untils/string';
const { products, loading, error, fetchProducts } = useProducts()

const price = formatCurrency(1999, 'USD')
const today = formatDate(new Date())

const rawText = 'hello world nuxt 3 🚀'
const capitalized = capitalize(rawText)
const slug = slugify(rawText)

onMounted(async () => {
  await fetchProducts()
  console.log("Products:", products.value)
})

</script>