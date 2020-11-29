import { CarsServiceService } from './../services/cars-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {

  constructor(private catService:CarsServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  onSaveCustomer(data:any){
    this.catService.saveResource(this.catService.host+"/customers",data).subscribe(
      res=>{
this.router.navigateByUrl("/cars")      },
      err=>{
        console.log("err");
      }
    )
  }
}
