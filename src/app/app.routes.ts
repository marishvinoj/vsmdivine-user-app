import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './user-form/user-form.component';

export const routes: Routes = [
    { 'path': '', component: UsersComponent },
    {'path': 'UserForm', component:UserFormComponent}
  ];
  
