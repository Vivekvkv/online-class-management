import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models/user';
import { AuthService } from '@app/_services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user!:User;
  constructor(
    private authService:AuthService
  ) {
    this.authService.user.subscribe(x => this.user = x)
   }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
}

}
