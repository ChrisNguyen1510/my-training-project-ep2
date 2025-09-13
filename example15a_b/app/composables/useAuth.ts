import { ref } from "vue";

const user = ref<{ name: string } | null>({ name: "Minh Huy" });

export function useAuth() {
  const login = (username: string) => {
    user.value = { name: username };
  };

  const logout = () => {
    user.value = null;
  };

  return { user, login, logout };
}
