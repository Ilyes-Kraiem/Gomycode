const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');
const saved = localStorage.getItem('theme');
if (saved === 'light') root.classList.add('light');
function setPressed() {
  const isLight = root.classList.contains('light');
  toggle.setAttribute('aria-pressed', isLight ? 'true' : 'false');
}
setPressed();
toggle.addEventListener('click', () => {
  root.classList.toggle('light');
  const isLight = root.classList.contains('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  setPressed();
});
document.getElementById('year').textContent = new Date().getFullYear();
