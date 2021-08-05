import { Routes } from "@angular/router";
import { BienvenidoComponent } from "./bienvenido/bienvenido.component";
import { AuthGuard } from "./commons/guards/auth.guard";
import { ChildGuard } from "./commons/guards/child.guard";
import { LoadGuard } from "./commons/guards/load.guard";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

export const AppRoutes: Routes = [

    {
        path: "", component:HomeComponent, canActivate: [AuthGuard],
        children: [

            { path: "", component: BienvenidoComponent }, 
            {
                path: 'conocenos',
                canLoad: [LoadGuard],              
                loadChildren: () => import('./conocenos/conocenos.module').then(m => m.ConocenosModule)
            },
            {
                path: 'customer',
                canActivate: [AuthGuard],
                loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
            }

        ]
    },

    { path: "login", component: LoginComponent },
    { path: '**', redirectTo: '' }

]