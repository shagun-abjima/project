import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
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
  items: MenuItem[] | undefined;
  constructor(private dataservice:dataService){}
  fetchdata(){
    this.dataservice.fetchProducts().subscribe((prod)=>{
      this.productList = prod;
    });
  }
  ngOnInit() {
      this.items = [
          {
              label: 'Home',
              icon: 'pi pi-fw pi-file',
              items: [
                  {
                      label: 'New',
                      icon: 'pi pi-fw pi-plus',
                      items: [
                          {
                              label: 'Bookmark',
                              icon: 'pi pi-fw pi-bookmark'
                          },
                          {
                              label: 'Video',
                              icon: 'pi pi-fw pi-video'
                          }
                      ]
                  },
                  {
                      label: 'Delete',
                      icon: 'pi pi-fw pi-trash'
                  },
                  {
                      separator: true
                  },
                  {
                      label: 'Export',
                      icon: 'pi pi-fw pi-external-link'
                  }
              ]
          },
          {
              label: 'Pages',
              icon: 'pi pi-fw pi-pencil',
              items: [
                  {
                      label: 'Left',
                      icon: 'pi pi-fw pi-align-left'
                  },
                  {
                      label: 'Right',
                      icon: 'pi pi-fw pi-align-right'
                  },
                  {
                      label: 'Center',
                      icon: 'pi pi-fw pi-align-center'
                  },
                  {
                      label: 'Justify',
                      icon: 'pi pi-fw pi-align-justify'
                  }
              ]
          },
          ,
          {
              label: 'Contact Us',
              icon: 'pi pi-fw pi-power-off'
          }
      ];
      this.fetchdata();
  }


}
