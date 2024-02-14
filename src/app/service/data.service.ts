import { HttpClient } from "@angular/common/http";
import { catchError, map, of, throwError } from "rxjs";
import { Product } from "../model/Product.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { signUp } from "../model/User.model";
@Injectable({ providedIn: 'root' })
export class dataService {
    constructor(private http: HttpClient, private router: Router) { }

    invaliduserAuth = new EventEmitter<boolean>(false)
userSignUp(user:signUp){
    this.http.post('https://fakestoreapi.com/users',user,{observe:'response'})
    .subscribe((result)=>{
     if(result){
       localStorage.setItem('user',JSON.stringify(result.body));
       this.router.navigate(['/']);
     }
     
    })
     
   }
userAuthReload(){
    if(localStorage.getItem('user')){
        this.router.navigate(['/'])
    }
}





    fetchProducts() {
        return this.http.get<{ [key: string]: 
        Product }>('https://fakestoreapi.com/products')
            .pipe(map((response) => {
                let products = [];

                for (let key in response) {
                    if (response.hasOwnProperty(key)) {
                        products.push({ ...response[key], id: key })
                    }

                }
                return products;
            
            }))

    }

     getProductDetails(id: string | undefined, products: Product[]) {
        const product = products.find(p => p.id === id);
        if(product){
          return of(product);
        }else{
        return this.http.get('https://fakestoreapi.com/products/' + id)
          .pipe(map((response) => {
            console.log(response)
            let product = {};
            product = { ...response, id: id }
            return product;
          }))
        }
    
      }
    
    
      getProductsByCategory(category: string){
        return this.http.get('https://fakestoreapi.com/products/category/'+category)
          .pipe(
            map((response) => {
              let products: Product[] = [];
              for (let key in response) {
                if (response.hasOwnProperty(key)) {
                  products.push({ ...response[key], id: key });
                }
              }
              return products;
            
            }),
        
            catchError((err) => throwError(() => err))
          );
      }
    
      getAllCategories() {
        return this.http.get('https://fakestoreapi.com/products/categories')
          .pipe(
            catchError((err) => throwError(() => err))
          );
      }




    }







