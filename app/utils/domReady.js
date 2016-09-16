const ready = (fn) => {
  if (typeof fn !== 'function') {
    return;
  }
  if (document) {
    if (document.readyState === 'complete') {
      return fn();
    }
    document.addEventListener('interactive', fn, false);
  }
};

export default ready;
