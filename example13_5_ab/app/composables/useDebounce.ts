import { ref } from "vue";

export function useDebounce<T extends (...args: any[]) => void>(
  fn: T,
  delay = 500
) {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}
