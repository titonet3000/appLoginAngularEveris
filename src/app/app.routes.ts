import { Routes } from "@angular/router";
import { BienvenidoComponent } from "./bienvenido/bienvenido.component";
import { AuthGuard } from "./commons/guards/auth.guard";
import { ChildGuard } from "./commons/guards/child.guard";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

export const AppRoutes: Routes = [

    {
        path: "", component:HomeComponent, canActivateChild: [ChildGuard],
        children: [

            { path: "", component: BienvenidoComponent }, 
            {
                path: 'conocenos',
               
                loadChildren: () => import('./conocenos/conocenos.module').then(m => m.ConocenosModule)
            }

        ]
    },

    { path: "login", component: LoginComponent },
    { path: '**', redirectTo: '' }

]