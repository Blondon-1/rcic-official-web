import { useEffect } from 'react';

/**
 * ScrollReveal - attaches an IntersectionObserver to any element 
 * that has the class 'reveal', 'reveal-left', or 'reveal-right'.
 * When the element enters the viewport, it adds the class 'visible'.
 */
const ScrollReveal = () => {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Fire only once
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null; // Purely behavioural, no DOM output
};

export default ScrollReveal;
