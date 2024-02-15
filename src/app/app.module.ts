import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenubarModule } from 'primeng/menubar';
import { AppComponent } from './app.component';
import { DataViewModule } from 'primeng/dataview';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PasswordModule } from 'primeng/password';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { DropdownModule } from 'primeng/dropdown';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { Divider, DividerModule } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductsComponent } from './pages/products/products.component';
import { TableModule } from 'primeng/table';
import { filterPipe } from './pipe/filter.pipe';;
import { NavbarComponent } from './navbar/navbar.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { RegisterComponent } from './pages/register/register.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from 'primeng/carousel';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    ProductsComponent,
    filterPipe,
    AboutusComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    CardModule,
    HttpClientModule,
    DropdownModule,
    ButtonModule,
    DialogModule,
    TabViewModule,
    ConfirmDialogModule,
    DividerModule,
    FieldsetModule,
    SplitterModule,
    SidebarModule,
    TooltipModule,
    SplitButtonModule,
    DataViewModule,
    TriStateCheckboxModule,
    RadioButtonModule,
    PasswordModule,
    MultiSelectModule,
    InputTextModule,
    InputMaskModule,
    InputGroupModule,
    InputGroupAddonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    CarouselModule
  ],
  exports:[
    MenubarModule,
    CardModule,
    DialogModule,
    DropdownModule,
    ButtonModule,
    TabViewModule,
    ConfirmDialogModule,
    DividerModule,
    FieldsetModule,
    SplitterModule,
    SidebarModule,
    TooltipModule,
    SplitButtonModule,
    DataViewModule,
    TriStateCheckboxModule,
    RadioButtonModule,
    PasswordModule,
    MultiSelectModule,
    InputTextModule,
    InputMaskModule,
    InputGroupModule,
    InputGroupAddonModule,
    TableModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }