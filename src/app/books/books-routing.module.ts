import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BookListComponent} from './book-list/book-list.component';
import {LayoutComponent} from '../shared/layout/layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: '', component: BookListComponent},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BooksRoutingModule {
}
