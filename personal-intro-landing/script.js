document.getElementById("year").textContent = new Date().getFullYear().toString();
const html = document.documentElement;
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  const isLight = html.classList.toggle("light");
  toggle.setAttribute("aria-pressed", isLight ? "true" : "false");
});
const btn = document.getElementById("view-projects");
const glow = btn.querySelector(".btn-glow");
btn.addEventListener("pointermove", (e) => {
  const rect = btn.getBoundingClientRect();
  const mx = ((e.clientX - rect.left) / rect.width) * 100;
  const my = ((e.clientY - rect.top) / rect.height) * 100;
  glow.style.setProperty("--mx", mx + "%");
  glow.style.setProperty("--my", my + "%");
});
