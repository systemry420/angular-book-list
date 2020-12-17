import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books = [
    // { title: "Harry Potter", author: "J. K. Rowling", id: '1'},
    // { title: "The Alchemist", author: "Paulo Cuelho", id: '2'},
  ]
  constructor() { }

  getBooks() {
    return this.books
  }

  addBook(title: string, author: string) {
    this.books.push({ title, author, id: this.getUniqueId(2) })
  }

  deleteBook(id) {
    this.books = this.books.filter(b => {
      return b.id != id
    })
  }

  getUniqueId(parts: number): string {
    const stringArr = [];
    for(let i = 0; i< parts; i++){
      // tslint:disable-next-line:no-bitwise
      const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      stringArr.push(S4);
    }
    return stringArr.join('-');
  }
}
