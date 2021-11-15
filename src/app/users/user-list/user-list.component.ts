import {Component, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {NotificationService} from '../../core/services/notification.service';
import {NGXLogger} from 'ngx-logger';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {UserService} from '../../core/services/user.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    displayedColumns: string[] = ['id', 'firstName', 'lastName', 'username', 'email', 'gender', 'authorities', 'growthPlans'];
    dataSource;

    @ViewChild(MatSort, {static: true}) sort: MatSort;

    constructor(
        private logger: NGXLogger,
        private notificationService: NotificationService,
        private userService: UserService,
        private titleService: Title
    ) {
    }

    ngOnInit() {

        this.titleService.setTitle('i-cresco-client - Users');
        this.logger.log('Users loaded');
        this.userService.getAllUsers()
            .subscribe(users => {
                    this.dataSource = new MatTableDataSource(users);
                    this.dataSource.sort = this.sort;
                },
                error => {
                    const resMessage = error.message || error.error.message || error.toString();
                    this.notificationService.openSnackBar(resMessage);
                });

    }
}
