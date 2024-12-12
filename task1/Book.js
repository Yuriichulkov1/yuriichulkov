class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
    }
  
    printInfo() {
      console.log(`Назва: ${this.title}`);
      console.log(`Автор: ${this.author}`);
      console.log(`Рік видання: ${this.year}`);
    }
  }
  
  const book1 = new Book("1984", "Джордж Орвелл", 1949);
  const book2 = new Book("Мобі Дік", "Герман Мелвілл", 1851);
  
  book1.printInfo();
  book2.printInfo();
  
  module.exports = Book;
  