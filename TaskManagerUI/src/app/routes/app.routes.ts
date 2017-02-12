import {Routes, RouterModule} from '@angular/router';
import { LoginComponentComponent } from '../login-component/login-component.component';
import { HomeComponent } from '../home/home.component';

export const approutes:Routes = [
    { 
        path:'', component:LoginComponentComponent  
    },
    {
        path:'home', component:HomeComponent
    }
];

export const approuting = RouterModule.forRoot(approutes, {useHash:true, enableTracing:false});