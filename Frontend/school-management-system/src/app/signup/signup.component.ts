import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/shared/public.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private pService:PublicService) { }
  msg: any;
  ngOnInit(): void {
    this.showMessage();
  }

  showMessage(){
    this.pService.getMessage().subscribe(data=>{
      this.msg = data,
      console.log(this.msg);
    });
  }

}
