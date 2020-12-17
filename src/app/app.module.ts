import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookformComponent } from './bookform/bookform.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BooklistComponent,
    BookformComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
