import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsServiceService {
  
  public host:string="http://localhost:8080";
  constructor(private httpClient:HttpClient) { }
   
  public getCars(page:number, size:number){
    return this.httpClient.get(this.host+"/cars?page="+page+"&size="+size);
  }
	//exemple: http://localhost:8080/cars/search/bybrandpage?mc=bmw&page=0&size=2
  public getCarsByBrand(mc:string, page:number, size:number){
    return this.httpClient.get(this.host+"/c cv ars/search/bybrandpage?mc="+mc+"&page="+page+"&size="+size);
  }

  public deleteResource(url:string){
    return this.httpClient.delete(url);
  }
  public saveResource(url,data){
    return this.httpClient.post(url,data);
  }
}
