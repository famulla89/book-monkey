import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';
import { ActivatedRoute} from '@angular/router';
import { BookStoreService} from '../shared/book-store.service';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book;

@Output() showListEvent = new EventEmitter<any>();
ngOnInit(): void {

  const parms = this.route.snapshot.paramMap;
  this.book = this.bs.getSingle(parms.get('isbn'));
}

constructor(
  private bs: BookStoreService,
  private route: ActivatedRoute
){}
getRating(num: number) {
return new Array(num);
}
showBookList() {
this.showListEvent.emit();
}
}





