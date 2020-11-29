import { CarsServiceService } from './../services/cars-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  constructor(private catService:CarsServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  
  onSaveCategory(data:any){
    this.catService.saveResource(this.catService.host+"/categories",data).subscribe(
      res=>{
this.router.navigateByUrl("/cars")      },
      err=>{
        console.log("err");
      }
    )
  }

}
