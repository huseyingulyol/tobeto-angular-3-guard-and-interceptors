import { Routes } from '@angular/router';
import { FormGuard } from './guards/form-guard.guard';
import { FormComponent } from './pages/form/form.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'form',
    component: FormComponent,
    canDeactivate:[FormGuard]
  },
  {
    path:'products',
    component: ProductsComponent,
  }

];
