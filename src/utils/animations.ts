export const setupScrollAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px'
    }
  );

  document.querySelectorAll('[data-animate="true"]').forEach((element) => {
    observer.observe(element);
  });
};