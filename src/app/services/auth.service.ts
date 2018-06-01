import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";


@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        let token = localStorage.getItem("token");
        if (token){
            console.log(true)
            return true;
        } else{
            console.log(false)

            this.router.navigate(["contacts"]);
            return false;
        }
    }
}


