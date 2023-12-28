import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../model/user';
import { UserService } from './UserService';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-users',
  // standalone: true,
  // imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent  implements OnInit {
  users: User[] | undefined;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }
}