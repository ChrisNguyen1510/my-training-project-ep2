export function useProducts() {
  const products = ref<any[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchProducts = async () => {
    try {
      loading.value = true;
      error.value = null;

      // Giả sử gọi API fake store
      const { data } = await useFetch<any[]>("/products.json");
      products.value = data.value || [];
    } catch (err: any) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  return { products, loading, error, fetchProducts };
}
