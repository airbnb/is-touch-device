export default function isTouchDevice() {
  console.log('HI FROM PACKAGE')
  const returnable = !(typeof window !== 'undefined' &&
      ('ontouchstart' in window ||
        (window.DocumentTouch &&
          typeof document !== 'undefined' &&
          document instanceof window.DocumentTouch))) ||
    !!(typeof navigator !== 'undefined' &&
      (navigator.maxTouchPoints || navigator.msMaxTouchPoints));
  console.log({returnable})
  return returnable;
}
