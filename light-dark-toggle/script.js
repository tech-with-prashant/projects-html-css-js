const toggleSwitch = document.querySelector('#theme-switch');

function switchTheme(e) {
  const theme = e.target.checked ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
}

toggleSwitch.addEventListener('change', switchTheme);
