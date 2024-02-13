import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./pages/products/products.component";
import { CheckoutComponent } from "./pages/checkout/checkout.component";
const route:Routes=[
    {
        path:'products',
        component:ProductsComponent
    },
    {
        path:'checkout',
        component:CheckoutComponent
    }
]
@NgModule({
    imports:[],
    exports:[RouterModule]
})
export class AppRoutingModule{}