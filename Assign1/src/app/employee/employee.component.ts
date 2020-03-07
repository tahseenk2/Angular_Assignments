import { Component, OnInit } from '@angular/core';
import { Iemployee } from './employee.model';
import { NgForm, NgModel } from '@angular/forms';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  constructor() { }

  
  edata:Iemployee={
    first_name:null,
    last_name:null,
    email:null,
    contact_number: null,
    address: null,
    user_name: null,
    password: null,
    gender: null,
    qualification: null,
    experience: null,
    coding_languages:null
  };

  dataq:string[];
  datae:number[];
  datal:string[];


  ngOnInit(): void {
    this.dataq=['SSC','HSC','UG','PG'];
    this.datae=[0,1,2,3];
    this.datal=['C/C++','Java','C#','PHP','Python'];
  }

  onSubmit(){
  
      console.log(this.edata);
    
}}
