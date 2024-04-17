import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {
        path: '' , redirectTo: 'register', pathMatch: 'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path: 'dashboard',
        component:DashbordComponent
    }

];
