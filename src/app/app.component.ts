import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserService } from './users/UserService';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      CommonModule, RouterOutlet, HttpClientModule
    ],
    providers:[UserService, MessageService]
})
export class AppComponent {
  title = 'vsmdivine-user-app';
}
