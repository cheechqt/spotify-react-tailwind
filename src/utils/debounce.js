let debounceTimer = null;

export function debounce(callback, delay) {
  clearTimeout(debounceTimer);
  debounceTimer.current = setTimeout(callback, delay);
}
