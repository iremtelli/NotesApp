const addBox = document.querySelector(".add-box")
popupBox = document.querySelector(".modal-outter")
closeIcon = popupBox.querySelector("header i")
const addNote = document.getElementById("addNote")
let boxContent = document.querySelector(".contents")
const value1 = document.getElementById("value1")
const value2 = document.getElementById("value2")
const container = document.querySelector(".container")
const titleEl = document.querySelector("input")
const descEl = document.querySelector("textarea")
const dateSpan = document.getElementById("date-span")
const boxFooter = document.querySelector(".box-footer")
const iconEllipsis = document.getElementById("menu")
const iconMenu = document.querySelector(".icons")
const months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

addBox.addEventListener("click", () => {
  popupBox.classList.add("show")
})
closeIcon.addEventListener("click", () => {
  popupBox.classList.remove("show")
})

addNote.addEventListener("click", (e) => {
  let Boxx = document.createElement("div")
  let first = value1.value
  let second = value2.value
  let noteTitle = titleEl.value,
    noteDesc = descEl.value
  if (noteTitle || noteDesc) {
    let dateEl = new Date(),
      month = months[dateEl.getMonth()],
      day = dateEl.getDate(),
      year = dateEl.getFullYear()

    let noteInfo = {
      title: noteTitle,
      description: noteDesc,
      date: `${month} ${day} ${year}`,
    }

    boxFooter.innerHTML = `${dateSpan}`

    e.preventDefault()
    boxContent = `<li class="note">
<div class="paragraph">
  <p>${first}</p>
  <span
    >${second}</span
  >
</div>
<br />
<div class="box-footer">
  <span>${noteInfo.date}</span>
  <div class="icons">
    <i class="fa-solid fa-ellipsis"></i>
    <ul class="menu">
      <li><i class="fa-regular fa-pen-to-square"></i>Edit</li>
      <li><i class="fa-regular fa-trash-can"></i>Delete</li>
    </ul></div></div></li> `

    Boxx.innerHTML = boxContent
    container.appendChild(Boxx)
    boxContent.innerHTML = `${first} ${second}`
  }
})
iconMenu.addEventListener("click", () => {
  iconEllipsis.classList.add("show")
})
iconMenu.addEventListener("click", () => {
  iconEllipsis.classList.remove("show")
})
