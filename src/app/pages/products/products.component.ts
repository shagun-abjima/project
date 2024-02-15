import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../model/Product.model';
import { dataService } from '../../service/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  @Output() closeDetailView: EventEmitter<boolean> = new EventEmitter<boolean>();
 
  @Input() currentProduct: Product | null = null;
  productQuantity:number=1;
  removeCart: boolean = false;
 
  constructor(private dataService: dataService){}
  ngOnInit(): void {
    let cartData = localStorage.getItem('localCart');
   
  if (this.currentProduct.id && cartData) {
      let items = JSON.parse(cartData);
   
      if (Array.isArray(items)) {
      items = items.filter((item: Product) => this.currentProduct.id === item.id);
   
        if (items.length > 0) {
          this.removeCart = true;
        } else {
          this.removeCart = false;
        }
      }
    }
  }
 
 
  onClose(){
    this.closeDetailView.emit(false);
  }
 
 
  handleQuantity(val:string){
    if(this.productQuantity<20 && val==='plus'){
      this.productQuantity+=1;
    }else if(this.productQuantity>1 && val==='min'){
      this.productQuantity-=1;
    }
  }
 
       
      }
     

