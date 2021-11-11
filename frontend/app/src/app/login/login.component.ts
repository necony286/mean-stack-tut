import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  username: string;
  password: string;

  signIn() {
    this.userService
      .signInService(this.username, this.password)
      .subscribe((user: User) => {
        if (user) {
          //rutiranje
          alert('ok');
        } else {
          alert('no user');
        }
      });
  }
}
