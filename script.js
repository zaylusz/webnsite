window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
      document.addEventListener('DOMContentLoaded', () => {
        const snowflakes = document.querySelectorAll('.snowflake');
      
        snowflakes.forEach(snowflake => {
          const xPos = Math.random() * window.innerWidth; // Random horizontal position
          const delay = Math.random() * 40; // Random delay for slower fall
          const duration = Math.random() * 45 + 30; // Random fall duration (slower)
      
          snowflake.style.left = `${xPos}px`;
          snowflake.style.animationDelay = `${delay}s`;
          snowflake.style.animationDuration = `${duration}s`;
        });
      });
    });
  });
  
