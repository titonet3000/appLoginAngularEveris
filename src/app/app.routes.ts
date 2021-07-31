import { Routes } from "@angular/router";
import { BienvenidoComponent } from "./bienvenido/bienvenido.component";
import { AuthGuard } from "./commons/guards/auth.guard";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

export const AppRoutes: Routes = [

    {
        path: "", component:HomeComponent, canActivate: [AuthGuard],
        children: [

            { path: "", component: BienvenidoComponent }, 

        ]
    },

    { path: "login", component: LoginComponent },
    { path: '**', redirectTo: '' }

]