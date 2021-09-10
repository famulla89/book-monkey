import { Injectable } from '@angular/core';
import { Book } from './book';
@Injectable({
  providedIn: 'root'

})
export class BookStoreService {
  getSingle(isbn: string): Book {
    return this.books.find(book => book.isbn === isbn);
  }



  books: Book[];
  constructor() {
    this.books = [
      {
        isbn: '9783864907791',
        title: 'Angular',
        authors: ['Ferdinand Malcher', 'Johannes Hoppe', 'Danny Koppenhagen'],
        published: new Date(2020, 8, 1),
        subtitle: 'Grundlagen, fortgeschrittene Themen und Best!Practices',
        rating: 5,
      thumbnails: [{
        url: 'https://ng-buch.de/angular-cover.jpg',
        title: 'Buchcover'
      }],
      description: 'Lernen Sie Angular mit diesem Praxisbuch!'
  },



    {
      isbn: '9783446458024',
      title: 'Visual C# 2019 ',
      authors: ['Jürgen Kotz '],
      published: new Date(2019, 9, 1),
      subtitle: '– Grundlagen, Profiwissen und Rezepte',
      rating: 5,
      thumbnails: [{
        url: 'https://files.hanser.de/Files/Article/ARTK_CT0_9783446458024_0001.jpg',
        title: 'Buchcover'
      }],
      description: 'Lernen Sie C# mit diesem Praxisbuch!'
    },
    {
      isbn: '9781593275846',
      title: 'Eloquent Javascript ',
      authors: ['Matthäus Famulla'],
      published: new Date(2012, 8, 13),
      subtitle: 'A Modern Introduction to Programming',
      rating: 5,
      thumbnails: [{
        url: 'https://images-eu.ssl-images-amazon.com/images/I/51-5ZXYtcML._SX342_SY445_QL70_ML2_.jpg',
        title: 'Buchcover'
      }],
      description: 'Lernen Sie Eloquent Javascript mit diesem Praxisbuch!'
    },
    {
      isbn: '	9783836216999',
      title: 'SQL : ',
      authors: ['Michael Unterstein'],
      published: new Date(2012, 8, 13),
      subtitle: 'Relationale Datenbanken und Sql',
      rating: 5,
      thumbnails: [{
        url: 'https://i.weltbild.de/p/relationale-datenbanken-und-sql-in-theorie-und-275035517.jpg',
        title: 'Buchcover'
      }],
      description: 'Lernen Sie Eloquent Javascript mit diesem Praxisbuch!'
    },

    {
      isbn: '9783864905520',
      title: 'React',
      authors: ['Oliver Zeigermann', 'Nils Hartmann'],
      published: new Date(2019, 11, 12),


      subtitle: 'Grundlage , fortgeschrittene Techniken und Praxistipps',
      rating: 3,
      thumbnails: [{
        url: 'https://api4.angular-buch.com/images/react.jpg',
        title: 'Buchcover'
      }],
      description: 'Das bewährte und umfassende Praxisbuch zu React'
    }

    ];
}
getAll(): Book[] {
  return this.books;

}
}
