import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _bookService: BookService) { }

  ngOnInit(): void {
  }

  getCount() {
    return this._bookService.getBooks().length
  }

}
