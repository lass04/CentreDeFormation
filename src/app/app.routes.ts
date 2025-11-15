import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
    {path: '',component:Home},
    {path: 'public-space', loadChildren: () => import('./public-space/public-space-module').then(m => m.PublicSpaceModule)},
    {path: 'private-space', loadChildren: () => import('./private-space/private-space-module').then(m => m.PrivateSpaceModule)},
    {path: '**', redirectTo:''}
];
