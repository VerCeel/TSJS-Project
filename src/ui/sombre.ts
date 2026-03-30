export function initDarkMode(): void {
  const btn = document.getElementById("btnsombre") as HTMLButtonElement;

  //au cas ou l'utilisateur avait deja activé le mode sombre on le remet
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
    btn.textContent = "☀️";
  } else {
    btn.textContent = "🌙";
  }

  //pour le clic
  btn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    btn.textContent = isDark ? "☀️" : "🌙";

    //preference dans le localStorage
    localStorage.setItem("darkMode", String(isDark));
  });
}
