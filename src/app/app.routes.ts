import { Routes } from "@angular/router";
import { BienvenidoComponent } from "./bienvenido/bienvenido.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

export const AppRoutes: Routes = [

    {
        path: "", component:HomeComponent,
        children: [

            { path: "", component: BienvenidoComponent }, 

        ]
    },

    { path: "login", component: LoginComponent },
    { path: '**', redirectTo: '' }

]