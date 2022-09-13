let debounceTimer = null;

export function debounce(callback, delay) {
  // console.log("debounce");
  clearTimeout(debounceTimer);
  debounceTimer.current = setTimeout(callback, delay);
}
