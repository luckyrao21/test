import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTxt:String="";
  DATA:any
  constructor(private serve:ProductService) { }

  ngOnInit(): void {
  }

  public search(){
    this.serve.search1(this.searchTxt).subscribe(data=>{
      console.warn(data);
      this.DATA=data;

     if(this.DATA.err){
      //  alert("product not found")
     }else{
       alert("product found")
     }

    })
  }


}
