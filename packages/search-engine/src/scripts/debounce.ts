export function debounce (func, wait) {
  let timeout;

  return function () {
    if(timeout){
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func.apply(this, arguments);
    }, wait);
  };
}