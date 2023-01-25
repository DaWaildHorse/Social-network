const toggleButton = document.getElementById('dark-light-toggle')
toggleButton.addEventListener('click', () => toggleDarkLight())

const toggleDarkLight = () => {
  const body = document.body
  if(body.classList.contains('dark')) {
    body.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  } else {
    body.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }
}

const loadTheme = () => {
  const theme = localStorage.getItem('theme')
  if(theme === 'dark') {
    document.body.classList.add('dark')
  }
}

loadTheme();
