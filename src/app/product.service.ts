import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ProductService {

  constructor(private http:HttpClient) { }

  addProductApi:any="http://localhost:3000/user/add-product";
  searchApit:any="http://localhost:3000/user/search"

  public addProduct(x:String,y:String,z:String){
   return this.http.post(this.addProductApi,{name:x,image:y,price:z})
  }

  public search1(x:String){
    return this.http.post(this.searchApit,{searchText:x})
   }
}
