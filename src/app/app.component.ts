import { Component, OnInit } from '@angular/core';

import { dataService } from './service/data.service';
import { Product } from './model/Product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{    
  title = 'project';
  productList:Product[]=[];
  categories:string[]=[];
 
  constructor(private dataservice:dataService){}
  //to fetch all data
  fetchdata(){
    this.dataservice.fetchProducts().subscribe((prod)=>{
      this.productList = prod;
    });
    }
    //to fetch products using categories
    loadProductsByCategory(category: string) {
        this.dataservice.getProductsByCategory(category).subscribe((products) => {
          this.productList = products;
          console.log(products)
        });}
        loadAllCategories() {
            this.dataservice.getAllCategories().subscribe((categories: any) => {
              this.categories = categories;
            });
          }

      ngOnInit() {
      
      this.fetchdata();
      this.loadAllCategories();
      
  }


}
