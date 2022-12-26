import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{


  
  Allusers: any[]=[];
  searchKey:string='';
  filter:any;



  constructor (private api:ApiService){

  }
  

  ngOnInit(): void {
  this.getAllUsers()
    
  }

  getAllUsers(){
    this.api.getAllUsers().subscribe((data:any)=>
    this.Allusers=data.users)
    console.log(this.Allusers);
  }
  search(event:any){
   console.log(event.target.value);
   this.searchKey=event.target.value
  }
  
  }
  



