import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/_services/auth.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(
    private router:Router,
    private auth:AuthService,

  ) { 
      if (this.auth.userValue){
        this.router.navigate(['dashboard/'])
      }
  }

  ngOnInit(): void {
  }

}
