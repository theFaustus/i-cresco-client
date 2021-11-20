import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import * as moment from 'moment';
import 'rxjs/add/operator/delay';

import { environment } from '../../../environments/environment';
import { of, EMPTY } from 'rxjs';
import {User} from '../model/user';
import {Book} from '../model/book';

@Injectable({
    providedIn: 'root'
})
export class BookService {

    private bookRecordsUrl = 'http://localhost:8080/api/v1/users/growth-plans/book-records';
    constructor(private http: HttpClient,
        @Inject('LOCALSTORAGE') private localStorage: Storage) {
    }

    getAllBooks() {
        return this.http.get<PagedBookViewResponse>(this.bookRecordsUrl)
            .pipe(map(response => {
                return response._embedded.bookRecords as Book[];
            }));
    }

}

export interface PagedBookViewResponse {
    _embedded: any;
}
