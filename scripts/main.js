document.addEventListener("DOMContentLoaded", () => {
  const sections = {
    "parcours-btn": "mois-section",
    "evenements-btn": "evenements-section"
  };

  Object.entries(sections).forEach(([btnId, sectionId]) => {
    const btn = document.getElementById(btnId);
    const section = document.getElementById(sectionId);

    if (btn && section) {
      btn.addEventListener("click", () => {
        const isVisible = section.style.display === "flex";

        // Cacher toutes les sections
        Object.values(sections).forEach(id => {
          const s = document.getElementById(id);
          if (s) s.style.display = "none";
        });

        // Afficher ou cacher la section cliquée
        section.style.display = isVisible ? "none" : "flex";
      });
    }
  });
});

function toggleMois(id) {
  document.querySelectorAll('.mois-grille').forEach(el => el.style.display = "none");
  const section = document.getElementById(id);
  if (section) {
    section.style.display = "flex";
  }
}
