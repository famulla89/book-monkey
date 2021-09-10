import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';
@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];


  constructor(private bs: BookStoreService) { }

  ngOnInit(): void {
    this.books = this.bs.getAll();


}getRating(num: number){
  return new Array(num);
   }


    }
  
