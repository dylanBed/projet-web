import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

    books: any;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        sessionStorage.setItem('cat', 'book');
        sessionStorage.setItem('action','parcourir');
        this.http.get('/books').subscribe(data => {
            this.books = data;
        });
    }

}
