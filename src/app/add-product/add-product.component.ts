import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  name:any;
  image:any;
  price:any;
  DATA:any

  constructor(private serve:ProductService) { }

  ngOnInit(): void {
  }

  public addProduct(){
    this.serve.addProduct(this.name,this.image,this.price).subscribe(data=>{
      this.DATA=data

      if(this.DATA.err){
        alert('oops something went wrong')
      }
      else{
        alert('add success')
      }
    })
  }

}
