function horizontalScroll(event) {
  event.preventDefault();

  const scrollTarget = document.documentElement;
  const totalDistance = event.deltaY;
  const direction = totalDistance > 0 ? 1 : -1;
  const speed = Math.abs(totalDistance) / 16;

  let scrolled = 0;

  function scrollStep() {
    if (Math.abs(scrolled) < Math.abs(totalDistance)) {
      scrolled += speed * direction;

      if (event.shiftKey) {
        scrollTarget.scrollTop += speed * direction;
      } else {
        scrollTarget.scrollLeft += speed * direction;
      }

      requestAnimationFrame(scrollStep);
    }
  }

  scrollStep();
}

if (!window.scrollInitialized) {
  window.scrollInitialized = true;
  document.addEventListener("wheel", horizontalScroll, {
    passive: false,
  });
}
