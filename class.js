var whatToSay = {
  name: 'zbl',
  greeting: () => {
    console.log('hello')
  },
  byebye() {
    console.log('bye')
  },
}

whatToSay.greeting()
whatToSay.byebye()

class Page {
  constructor(text) {
    this.text = text
  }

  print() {
    console.log(this.text)
  }
}

function NoteBook() {
  this.pages = []
}
NoteBook.prototype.addPage = function (text) {
  const page = new Page(text)
  this.pages.push(page)
}

NoteBook.prototype.printPages = function () {
  for (let page of this.pages) {
    page.print()
  }
}

const myNotebook = new NoteBook()
myNotebook.addPage('first page')
myNotebook.addPage('second')
myNotebook.printPages()

class Publication {
  constructor(title, author, pubDate) {
    this.title = title
    this.author = author
    this.pubDate = pubDate
  }
  print() {
    console.log(`
      Title: ${this.title}
      by ${this.author}
      @ ${this.pubDate}
    `)
  }
}

class Book extends Publication {
  constructor(bookDetail) {
    super(bookDetail.title, bookDetail.author, bookDetail.publishedOn)
    this.publisher = bookDetail.publisher
    this.ISBN = bookDetail.ISBN
  }

  print() {
    super.print()
    console.log(`
      Publisher: ${this.publisher}
      ISBN: ${this.ISBN}
    `)
  }
}

class BlogPost extends Publication {
  constructor(title, author, pubDate, URL) {
    super(title, author, pubDate)
    this.URL = URL
  }

  print() {
    super.print()
    console.log(this.URL)
  }
}

const myBook = new Book({
  title: 'doodles',
  author: 'zbl',
  publishedOn: '2020-12-23',
  publisher: 'OReily',
  ISBN: '99990000',
})

const myPost = new BlogPost('hey', 'cool4zbl', '2020-12-23', 'zhangbinliu.me')

myBook.print()
myPost.print()
