window.onload = function() {
  const middleElement = document.querySelector('.pdf-container')
  middleElement.scrollIntoView({ behavior: "auto", block: "end", inline: "center" });
};

const personalAccountUser = JSON.parse(localStorage.personalAccountUser)
const minus = document.querySelector('.link-bar-home')
const plus = document.querySelector('.link-bar-burger')
const doc = document.querySelector('.pdf-container')

const urlParams = new URLSearchParams(window.location.search);
const source = urlParams.get('source');

let scale = getComputedStyle(doc).getPropertyValue("transform").match(/^matrix\(([^\(]*)\)$/)[1].split(',').map(Number)[0]
let marginT = parseFloat(getComputedStyle(doc).getPropertyValue("margin-top"))

minus.onclick = () => {
  scale = scale - 0.1
  marginT = marginT - 44
  doc.style.transform = `scale(${scale})`
  doc.style.marginTop = `${marginT}px`
}

plus.onclick = () => {
  scale = scale + 0.1
  marginT = marginT + 44
  doc.style.transform = `scale(${scale})`
  doc.style.marginTop = `${marginT}px`
}


if (source === 'link1') {
  fullname.innerHTML = personalAccountUser.firstdoc.name
  dateofbirth.innerHTML = personalAccountUser.firstdoc.datebirth
  aliennumber.innerHTML = personalAccountUser.firstdoc.aliennum
  passnumber.innerHTML = personalAccountUser.firstdoc.pasnum
  expdate.innerHTML = personalAccountUser.firstdoc.expdate
} else {
  // выполнить действия для всех остальных случаев
  fullname.innerHTML = personalAccountUser.seconddoc.name
  dateofbirth.innerHTML = personalAccountUser.seconddoc.datebirth
  aliennumber.innerHTML = personalAccountUser.seconddoc.aliennum
  passnumber.innerHTML = personalAccountUser.seconddoc.pasnum
  expdate.innerHTML = personalAccountUser.seconddoc.expdate
}