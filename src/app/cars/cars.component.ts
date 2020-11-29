import { CarsServiceService } from './../services/cars-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  //we have to initiate the object to avoid problems and add if in html file
  public cars:any=undefined;
  public size:number=5;
  public currentPage:number=0;
  public totalPages:number;
  public pages:Array<number>;
  public currentKeyword: string="";
  constructor(private carService:CarsServiceService) { }
 
  ngOnInit(): void {

  }

  onGetCars(){
    this.carService.getCars(this.currentPage, this.size)
    .subscribe(data=>{
      this.cars=data;
      //this.totalPages=data.page.totalPages works too
      this.totalPages=data["page"].totalPages;
      this.pages=new Array<number>(this.totalPages);
    },err=>{
      console.log(err+"erreur");
    })

  }

  onPageCar(i){
    this.currentPage=i;
    //this.onGetCars();
    this.SearchC();
  }

  Search(form:any){
    this.currentPage =0;
    this.currentKeyword=form.keyword;
    this.SearchC();
  }

  SearchC(){
    this.carService.getCarsByBrand(this.currentKeyword,this.currentPage, this.size)
    .subscribe(data=>{
      this.cars=data;
      //this.totalPages=data.page.totalPages works too
      this.totalPages=data["page"].totalPages;
      this.pages=new Array<number>(this.totalPages);
    },err=>{
      console.log(err+"erreur");
    })

  }

  onDeleteCar(c){
    let conf=confirm("are you sure");
    if(conf){
      this.carService.deleteResource(c._links.self.href)
      .subscribe(data=>{
        this.SearchC();
      },err=>{
        console.log(err);
      })
    }
    
  }

}
