import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";
import { Product } from "../model/Product.model";
import { Injectable } from "@angular/core";
@Injectable({ providedIn: 'root' })
export class dataService {
    constructor(private http: HttpClient) { }
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

}