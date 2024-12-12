const Book = require('./Book');
const EBook = require('./EBook');

// Створення екземплярів класів
const book1 = new Book("1984", "Джордж Орвелл", 1949);
const book2 = new Book("Мобі Дік", "Герман Мелвілл", 1851);
const eBook1 = new EBook("Цифровий світ", "Джон Доу", 2020, "PDF");

// Виклик методів
book1.printInfo();
book2.printInfo();
eBook1.printInfo();
