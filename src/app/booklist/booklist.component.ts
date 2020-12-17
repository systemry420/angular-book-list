import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  public books = []
  constructor(private _bookService: BookService) { }

  ngOnInit(): void {
    this.books = this._bookService.getBooks()

  }

  deleteBook(e) {
    this._bookService.deleteBook(e.target.id)
    this.books = this._bookService.getBooks()
  }

}
