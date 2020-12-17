import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books = [
    { title: "Harry Potter", author: "J. K. Rowling", id: 1},
    { title: "The Alchemist", author: "Paulo Cuelho", id: 2},
  ]
  constructor() { }

  getBooks() {
    return this.books
  }

  addBook(title: string, author: string) {
    this.books.push({title, author, id:3})

  }
}
