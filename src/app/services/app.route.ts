import { Routes } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { RoleGuard } from "./auth.service";
import {SignUpComponent } from '../sign-up/sign-up.component'

export const AppRoutes:Routes=[
    {path:'', redirectTo : 'login', pathMatch:'full'},
    {path:"**", component: LoginComponent},
    {path:"signup", component: SignUpComponent}

]