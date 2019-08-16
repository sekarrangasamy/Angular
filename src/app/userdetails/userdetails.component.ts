import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserdetailsService } from './userdetails.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  
  firstname:string;
  lastname:string;
  phone:string;
  email:string;
  img_url: string | ArrayBuffer;
  file_url: string | ArrayBuffer;
  fileName: any;
  icon: any;
  lastimage:any;
  id:any;

  constructor(private fb: FormBuilder, private service: UserdetailsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      this.id = params.id
    })
    this.service.getById(this.id).subscribe(res =>{
     if(this.id){
      this.firstname = res.firstname,
      this.lastname = res.lastname,
      this.phone = res.phonenumber
      this.email = res.email,
      this.img_url = res.image
     }
    })
  }
  onFileChange(event){
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      let imgValidationExpression = /\.(jpg|jpeg|png|bmp|svg)$/i;
      let imgvalue = imgValidationExpression.test(file.name);
      if (!imgvalue) {
        alert('Invalid Format')
      }
      if (file.size > 500000) {
      } else {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.img_url = reader.result;
          this.icon = file;
          this.lastimage = '/images/'+ this.icon.lastModified + '.jpg';
        };
      }

    }
  }

  onFileChange1(event){
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      let imgValidationExpression = /\.(xlsx|xls|doc|docx|ppt|pptx|txt|pdf)$/i;
      let imgvalue = imgValidationExpression.test(file.name);
      if (!imgvalue) {
        alert('Invalid Format')
      }
      if (file.size > 500000) {
      } else {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.file_url = reader.result;
          this.fileName= file;
        };
      }

    }
  }
  
  save(){
    if(this.id){
      let obj = {
        firstname:this.firstname,
        lastname:this.lastname,
        phonenumber:this.phone,
        email:this.email,
        image:this.lastimage
      }
      this.service.updatePersonal(this.id,obj).subscribe((res) =>{
        if(res)
        alert("Updated Successfully")
        this.router.navigate(['/userdetailslist']);
      })
    }else{
      let obj = {
        firstname:this.firstname,
        lastname:this.lastname,
        phonenumber:this.phone,
        email:this.email,
        image:this.lastimage
      }
      this.service.savePersoanlDetails(obj).subscribe((res)=>{
       if(res) {
         alert("Saved Successfully")
         this.router.navigate(['/userdetailslist']);
       }
      })
    }
  }    


}
