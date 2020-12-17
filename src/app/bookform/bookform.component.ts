import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.css']
})
export class BookformComponent implements OnInit {

  title = ''
  author = ''

  constructor(private _bookService: BookService) { }

  ngOnInit(): void {
  }

  submitBook(){
    this._bookService.addBook(this.title, this.author);
    this.title = ''
    this.author = ''
  }

}
