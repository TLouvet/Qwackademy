export function showKeyAnimation(id: string) {
  const elem = document.getElementById(id);
  if (!elem) return;
  elem.style.backgroundColor = 'red';
  setTimeout(() => {
    elem.style.backgroundColor = 'white';
  }, 500);
}
