
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dataForm: FormGroup
  
  
    
  

  constructor(private route:Router,private fb:FormBuilder) { }
flag:boolean = false;
  ngOnInit() {

    this.dataForm = this.fb.group({
      primaryEmail: new FormControl('',[
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      });
  }
   


//  get f(){return this.dataForm.controls}

  login() {
    // console.log(this.dataForm.value)
    console.log("login method is working properly")
this.route.navigateByUrl('/todoscomponent')


  }

  get primEmail(){
    return this.dataForm.get('primaryEmail')
    }
    

}
