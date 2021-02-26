const weatherForm = document.querySelector('form')
const searchEl = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const address = searchEl.value
  fetch(`http://localhost:5000/weather?address=${address}`)
    .then((res) => res.json())
    .then((data) => console.log(data))
})
