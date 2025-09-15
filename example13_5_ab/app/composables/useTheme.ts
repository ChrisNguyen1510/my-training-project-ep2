import { ref, watchEffect } from "vue";

const theme = ref<"light" | "dark">("light");

export function useTheme() {
  const toggle = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
  };

  watchEffect(() => {
    if (import.meta.client) {
      document.documentElement.className = theme.value;
    }
  });

  return { theme, toggle };
}
