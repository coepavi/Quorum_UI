import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CAssetComponent } from './c-asset/c-asset.component';
import { VAssetComponent } from './v-asset/v-asset.component';
import { TSearchComponent } from './t-search/t-search.component';

const routes: Routes = [
  { path: 'create', component: CAssetComponent },
  { path: 'view', component: VAssetComponent },
  { path: 'search', component: TSearchComponent },
  { path: '', redirectTo: '/create', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
