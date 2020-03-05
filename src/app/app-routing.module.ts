import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'primera', pathMatch: 'full' },
  { path: 'primera', loadChildren: () => import('./primera/primera.module').then( m => m.PrimeraPageModule)},
  {
    path: 'primera',
    loadChildren: () => import('./primera/primera.module').then( m => m.PrimeraPageModule)
  },
  {
    path: 'segunda',
    loadChildren: () => import('./segunda/segunda.module').then( m => m.SegundaPageModule)
  },
  {
    path: 'tercera',
    loadChildren: () => import('./tercera/tercera.module').then( m => m.TerceraPageModule)
  },
  {
    path: 'segunda/:numero',
    loadChildren: './segunda/segunda.module#SegundaPageModule'
  },
  {
    path: 'tercera/:numero',
    loadChildren: './tercera/tercera.module#TerceraPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
