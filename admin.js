let users = []

let user = {}
user.firstdoc = {}
user.seconddoc = {}

let personalAccountUser = {}

openAdminPanel.onclick = showAdminPanel
leaveAdminPanel.onclick = hideAdminPanel


function showAdminPanel() {
  adminPanel.hidden = false
}

function hideAdminPanel(){
  adminPanel.hidden = true
}

addBtn.onclick = addUser
saveBtn.onclick = saveUser
cancelBtn.onclick = resetForm

delUser.onclick = deleteAllUsers

list.onclick = editUser

// ---------------------login

login.onsubmit = checkLogin

loadFromLocalStorage()
showUsers()

function addUser() {
  const user = {firstdoc:{}, seconddoc:{}}


  user.email = admin.email.value
  user.password = admin.password.value
  user.initial = admin.initial.value
  user.name = admin.name.value
  user.submitdate = admin.submitdate.value
  user.receiptdate = admin.receiptdate.value
  user.datesend = admin.datesend.value
  user.rows = admin.rows.value

  user.firstdoc.name = admin.fname.value
  user.firstdoc.datebirth = admin.fdatebirth.value
  user.firstdoc.aliennum = admin.faliennum.value
  user.firstdoc.pasnum = admin.fpasnum.value
  user.firstdoc.expdate = admin.fexpdate.value

  user.seconddoc.name = admin.sname.value
  user.seconddoc.datebirth = admin.sdatebirth.value
  user.seconddoc.aliennum = admin.saliennum.value
  user.seconddoc.pasnum = admin.spasnum.value
  user.seconddoc.expdate = admin.sexpdate.value

  users.push(user)

  saveToLocalStorage()
  showUsers()
  admin.reset()
}

function saveToLocalStorage() {
  localStorage.users = JSON.stringify(users)
}

function loadFromLocalStorage() {
  users = JSON.parse(localStorage.users)
}

function showUsers() {
  list.innerHTML = ''
  for (let i = 0; i < users.length; i++) {
    list.innerHTML += `<li>${users[i].email}</li>`

  }
}

function editUser(e) {
  user = users.find(user => user.email == e.target.innerText)

  admin.email.value = user.email
  admin.password.value = user.password
  admin.initial.value = user.initial
  admin.name.value = user.name
  admin.submitdate.value = user.submitdate
  admin.receiptdate.value = user.receiptdate
  admin.datesend.value = user.datesend
  admin.rows.value = user.rows

  admin.fname.value = user.firstdoc.name
  admin.fdatebirth.value = user.firstdoc.datebirth
  admin.faliennum.value = user.firstdoc.aliennum
  admin.fpasnum.value = user.firstdoc.pasnum
  admin.fexpdate.value = user.firstdoc.expdate

  admin.sname.value = user.seconddoc.name
  admin.sdatebirth.value = user.seconddoc.datebirth
  admin.saliennum.value = user.seconddoc.aliennum
  admin.spasnum.value = user.seconddoc.pasnum
  admin.sexpdate.value  =  user.seconddoc.expdate

  addBtn.hidden = true
  saveBtn.hidden = false
  cancelBtn.hidden = false

  return
}

function saveUser() {
  user.email = admin.email.value
  user.password = admin.password.value
  user.initial = admin.initial.value
  user.name = admin.name.value
  user.submitdate = admin.submitdate.value
  user.receiptdate = admin.receiptdate.value
  user.datesend = admin.datesend.value
  user.rows = admin.rows.value

  user.firstdoc.name = admin.fname.value
  user.firstdoc.datebirth = admin.fdatebirth.value
  user.firstdoc.aliennum = admin.faliennum.value
  user.firstdoc.pasnum = admin.fpasnum.value
  user.firstdoc.expdate = admin.fexpdate.value

  user.seconddoc.name = admin.sname.value
  user.seconddoc.datebirth = admin.sdatebirth.value
  user.seconddoc.aliennum = admin.saliennum.value
  user.seconddoc.pasnum = admin.spasnum.value
  user.seconddoc.expdate = admin.sexpdate.value

  saveToLocalStorage()
  showUsers()

  addBtn.hidden = false
  saveBtn.hidden = true
  cancelBtn.hidden = true

  admin.reset()
}

function resetForm() {
  admin.reset()
  addBtn.hidden = false
  saveBtn.hidden = true
  cancelBtn.hidden = true
}

function deleteAllUsers() {
  users = []
  saveToLocalStorage()
  showUsers()
}

function checkLogin() {
  user = users.find(user => user.email == login.email.value)

  personalAccountUser = user
  window.location.href = 'verification.html';

  localStorage.setItem('personalAccountUser', JSON.stringify(personalAccountUser));

}