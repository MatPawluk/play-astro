// Inicjalizacja TAOS przy pierwszym załadowaniu strony
document.addEventListener('DOMContentLoaded', () => {
    if (window.TAOS) {
      window.TAOS.refresh();
    }
  });
  
  // Odświeżenie TAOS przy każdej zmianie strony
  document.addEventListener('astro:page-load', () => {
    if (window.TAOS) {
      window.TAOS.refresh();
    }
  });
  