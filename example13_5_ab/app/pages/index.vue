<template>
  <div class="p-6 space-y-6">
    <!-- Auth -->
    <section>
      <h2 class="text-xl font-bold">Auth Demo</h2>
      <div v-if="auth.user">
        <p>Xin chào, {{ auth.user?.value?.name }}</p>
        <button @click="auth.logout" class="btn">Logout</button>
      </div>
      <div v-else>
        <input v-model="username" placeholder="Username" class="input" />
        <button @click="auth.login(username)" class="btn">Login</button>
      </div>
    </section>

    <!-- Theme -->
    <section>
      <h2 class="text-xl font-bold">Theme</h2>
      <button @click="theme.toggle" class="btn">
        Toggle Theme ({{ theme.theme }})
      </button>
    </section>

    <!-- Posts -->
    <section>
      <h2 class="text-xl font-bold">Posts</h2>
      <input v-model="search" placeholder="Search..." class="input" />
      <button @click="loadPosts" class="btn">Search</button>
      <div v-if="loading">Loading...</div>
      <ul>
        <li v-for="p in posts" :key="p.id">{{ p.title }}</li>
      </ul>

      <div class="flex gap-2 mt-4">
        <button @click="pagination.prev" class="btn">Prev</button>
        <span>Page: {{ pagination.page }}</span>
        <button @click="pagination.next" class="btn">Next</button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useAuth } from "~/composables/useAuth";
import { useTheme } from "~/composables/useTheme";
import { useFetchPosts } from "~/composables/useFetchPosts";
import { usePagination } from "~/composables/usePagination";
import { useDebounce } from "~/composables/useDebounce";

const auth = useAuth();
const theme = useTheme();
const { posts, loading, fetchPosts } = useFetchPosts();
const pagination = usePagination();

const username = ref("");
const search = ref("");

const loadPosts = () =>
  fetchPosts(pagination.page.value, pagination.perPage.value, search.value);

watch([() => pagination.page], loadPosts);

const debounceSearch = useDebounce(loadPosts, 600);
watch(search, () => debounceSearch());
loadPosts();
</script>

<style scoped>
.btn {
  @apply px-3 py-1 bg-blue-500 text-white rounded;
}
.input {
  @apply border p-2 rounded;
}
.dark {
  background: #111;
  color: #eee;
}
</style>
