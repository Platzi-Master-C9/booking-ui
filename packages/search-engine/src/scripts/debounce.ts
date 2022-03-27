export function debounce (func: () => void, wait: number) {
  let timeout; 

  if(!func)
    return

  return function () {
    if(timeout){
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func.apply(this, arguments);
    }, wait);
  };
}
