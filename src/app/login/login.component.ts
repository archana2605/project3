import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Userid:any;
  pwd:any;
  constructor( public mat:MatFormFieldModule,  ) { }



  ngOnInit() {

  }
  onclick(){
    console.log(this.Userid,this.pwd);
  // console.log('onclick');
  }
}
