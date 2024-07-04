let body = document.querySelector('body')

const text = document.createElement('p')

let text_1 = prompt("Ismingizni kiriting")


text.innerHTML = text_1

body.appendChild(text)

text.classList.add('matn')
body.classList.add('shadow')

// text.classList.toggle('shadow')
