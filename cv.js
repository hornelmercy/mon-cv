const nameEl = document.querySelector('.name');

nameEl.addEventListener('mouseover', () => {
  const msg = document.createElement('p');
  msg.textContent = "Bienvenue sur mon CV interactif ! 😎";
  msg.style.color = '#222';
  msg.style.textAlign = 'center';
  msg.style.marginTop = '10px';
  nameEl.after(msg);

  setTimeout(() => msg.remove(), 3000); // disparait après 3 sec
});
