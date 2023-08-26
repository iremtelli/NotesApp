const addBox = document.querySelector(".add-box")
popupBox = document.querySelector(".modal-outter")
closeIcon = popupBox.querySelector("header i")
const addNote = document.getElementById("addNote")

const value1 = document.getElementById("value1")
const value2 = document.getElementById("value2")
const container = document.querySelector(".container")
// const months = [
//   "January",
//   "Febuary",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ]

addBox.addEventListener("click", () => {
  popupBox.classList.add("show")
})
closeIcon.addEventListener("click", () => {
  popupBox.classList.remove("show")
})

addNote.addEventListener("click", () => {
  let Boxx = document.createElement("div")
  let first = value1.value
  let second = value2.value
  let boxContent = `<li class="note">
<div class="paragraph">
  <p>${first}</p>
  <span
    >${second}</span
  >
</div>
<br />
<div class="box-footer">
  <span>24 Ağustos 2023</span>
  <div class="icons">
    <i class="fa-solid fa-ellipsis"></i>
    <ul class="menu">
      <li><i class="fa-regular fa-pen-to-square"></i>Edit</li>
      <li><i class="fa-regular fa-trash-can"></i>Delete</li>
    </ul> `

  Boxx.innerHTML = boxContent
  container.appendChild(Boxx)
  document.boxContent.innerHTML = `${first} ${second}`

  //değerler alınıp box content yerleşecek
})
