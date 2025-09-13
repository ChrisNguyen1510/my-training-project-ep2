import { ref } from "vue";

export function useFetchPosts() {
  const posts = ref<any[]>([]);
  const loading = ref(false);

  const fetchPosts = async (page = 1, limit = 5, search = "") => {
    loading.value = true;
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}&q=${search}`
    );
    posts.value = await res.json();
    loading.value = false;
  };

  return { posts, loading, fetchPosts };
}
