import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsListComponent } from './components/order/products-list/products-list.component';
import { OrderMasterComponent } from './components/order/order-master/order-master.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ProductComponent } from './components/order/product/product.component';


export const routes: Routes = [
    {path: '', component: MainLayoutComponent,children:[
        {path: '', redirectTo: '/home', pathMatch:'full'},
        {path: 'home', component: HomeComponent},
        {path: 'products', component: ProductsListComponent},
        {path: 'products/:id', component: ProductComponent},
        {path: 'order', component: OrderMasterComponent},
    ]},
    {path: 'login', component: LoginComponent},
    {path:'**', component:NotFoundComponent} // wild card path
];

