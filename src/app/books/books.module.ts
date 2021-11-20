import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BookListComponent} from './book-list/book-list.component';
import {SharedModule} from '../shared/shared.module';
import {BooksRoutingModule} from './books-routing.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        BooksRoutingModule
    ],
    declarations: [BookListComponent]
})
export class BooksModule {
}
