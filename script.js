const adviceId = document.getElementById('advice_id')
const adviceText = document.getElementById('advice_text')
const btn = document.querySelector('.btn')

async function getAdvice() {
  const res = await fetch('https://api.adviceslip.com/advice')
  const data = await res.json()
  console.log(data.slip)
  const adId = data.slip.id
  const text = data.slip.advice

  adviceId.innerText = adId
  adviceText.innerText = `"${text}"`
}

btn.addEventListener('click', getAdvice)

getAdvice()
