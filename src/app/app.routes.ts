import { Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [{ path: '', component: BoardComponent },
{ path: 'products', component: ProductDetailsComponent }];
