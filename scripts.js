const container = document.getElementById("main-container")
const newBookBtn = document.getElementById("new-book")
let myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(book) {
myLibrary.push(book)
}

const tolkien = new Book("The Lord of the Rings: The Fellowship of the Ring", "J. R. R. Tolkien", "9250", "Not Read")

addBookToLibrary(tolkien)

const info = book => ``

const bookToPage = book => {
  myLibrary.forEach(book =>{
    const bookDiv = document.createElement("div")
    bookDiv.className ="library-card"
    container.appendChild(bookDiv)
    const title = document.createElement("p")
    const author = document.createElement("p")
    const pages = document.createElement("p")
    const read = document.createElement("p")
    const delbtn = document.createElement("button")
    bookDiv.innerHTML = `<p>${book.title}</p>
    <p>${book.author}</p>
    <p>${book.pages} pages</p>
    <p class="book-read">${book.read}</p>
    <div class="btn-div">
    <button class="read">Read</button>
    <button class="delete">Delete</button>
    </div>`
    const deleteBtn = document.querySelector(".delete")
    deleteBtn.addEventListener("click", (e) =>{
      const div = e.target
    div.parentNode.parentNode.remove()
    })
    const readBtn = document.querySelector(".read")
    readBtn.addEventListener("click", book => {
      if(readBtn.innerHTML === "Read") {
        readBtn.innerHTML = "Not Read"
        readBtn.classList.add("not-read")
      } else if (readBtn.innerHTML === "Not Read") {
        readBtn.innerHTML = "Read"
        readBtn.classList.remove("not-read")
      }
      
    })
    
  })
}

newBookBtn.addEventListener("click", () => {
  const title = prompt("Title")
  const author = prompt("Author")
  const pages = prompt("Number of Pages")
  const read = prompt("Have you read the book. Read or Not Read")
  const newBook = new Book(`${title}`, `${author}`, `${pages}`, `${read}`)
  addBookToLibrary(newBook)
  createDiv(newBook)
  console.log(myLibrary)
})
bookToPage(myLibrary)


const createDiv = book => {
  const bookDiv = document.createElement("div")
  bookDiv.className ="library-card"
  container.appendChild(bookDiv)
  const title = document.createElement("p")
  const author = document.createElement("p")
  const pages = document.createElement("p")
  const read = document.createElement("p")
  const buttonDiv = document.createElement("div")
  const readBtn = document.createElement("button")
  const delbtn = document.createElement("button")
  read.className ="book-read"
  buttonDiv.className = "btn-div"
  readBtn.className ="read"
  delbtn.className = "delete"
  title.innerHTML = `${book.title}`
  author.innerHTML  = `${book.author}`
  pages.innerHTML   = `${book.pages} pages`
  read.innerHTML  = `${book.read}`
  readBtn.textContent = "Read"
  delbtn.textContent = "Delete"
  bookDiv.appendChild(title)
  bookDiv.appendChild(author)
  bookDiv.appendChild(pages)
  bookDiv.appendChild(read)
  bookDiv.appendChild(buttonDiv)
  buttonDiv.appendChild(readBtn)
  buttonDiv.appendChild(delbtn)
  
  delbtn.addEventListener("click", () => {
    delbtn.parentNode.parentElement.remove()
  })
 
  readBtn.addEventListener("click", book => {
    if(readBtn.innerHTML === "Read") {
      readBtn.innerHTML = "Not Read"
    } else if (readBtn.innerHTML === "Not Read") {
      readBtn.innerHTML = "Read"
    }
    
  })

}
