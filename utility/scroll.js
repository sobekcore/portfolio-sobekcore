function smoothScrollAsync(element, options) {
  return new Promise((resolve) => {
    if (!(element instanceof Element)) {
      throw new TypeError("First argument must be an Element");
    }

    let same = 0;
    let lastPosition = null;
    const scrollOptions = { behavior: "smooth", ...options };

    element.scrollIntoView(scrollOptions);
    requestAnimationFrame(check);

    function check() {
      const { top: newPosition } = element.getBoundingClientRect();

      if (newPosition === lastPosition) {
        if (same++ > 2) {
          // If element is encountered in the same place
          // for 2 frames in a row complete Promise
          return resolve();
        }
      } else {
        lastPosition = newPosition;
        same = 0;
      }

      requestAnimationFrame(check);
    }
  });
}

export { smoothScrollAsync };
