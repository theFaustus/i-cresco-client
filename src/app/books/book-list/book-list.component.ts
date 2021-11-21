import {Component, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {NotificationService} from '../../core/services/notification.service';
import {NGXLogger} from 'ngx-logger';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material';
import {BookService} from '../../core/services/book.service';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
    displayedColumns: string[] = ['id', 'cover', 'title', 'author', 'description', 'created', 'pageCount', 'user', 'growthPlan'];
    dataSource;

    @ViewChild(MatSort, {static: true}) sort: MatSort;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    constructor(
        private logger: NGXLogger,
        private notificationService: NotificationService,
        private bookService: BookService,
        private titleService: Title
    ) {
    }


    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    ngOnInit() {

        this.titleService.setTitle('i-cresco-client - Books');
        this.logger.log('Books loaded');
        this.bookService.getAllBooks()
            .subscribe(books => {
                    this.dataSource = new MatTableDataSource(books);
                    this.dataSource.sort = this.sort;
                    this.dataSource.paginator = this.paginator;
                },
                error => {
                    const resMessage = error.message || error.error.message || error.toString();
                    this.notificationService.openSnackBar(resMessage);
                });

    }
}
