import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from '../userdetails/userdetails.service';

@Component({
  selector: 'app-userdetailslist',
  templateUrl: './userdetailslist.component.html',
  styleUrls: ['./userdetailslist.component.css']
})
export class UserdetailslistComponent implements OnInit {

  personalDetails:any=[];
  constructor(private service:UserdetailsService) { }

  ngOnInit() {
    this.list()
  }

  list(){
    this.service.getPersonalDetails().subscribe((res:any)=>{
      if(res){
        this.personalDetails=res;
      }
    })
  }

  delete(id){
    this.service.deleteData(id).subscribe((res:any)=>{
      if(res){
        this.list();
        alert("Deleted Successfully")
      }
    })
  }
}
