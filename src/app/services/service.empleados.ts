import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "../models/empleado";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";
import { Login } from "../models/login";

@Injectable()
export class ServiceEmpleados {
    constructor(
        private _http: HttpClient
    ){}

    async getEmpleadosAsync(): Promise<Empleado[]> {
        let request = "api/empleadosauth"
        let url = environment.apiejemplos + request
        return firstValueFrom(
            this._http.get<Empleado[]>(url)
        )
    }

    async getPerfilAsync(): Promise<Empleado> {
        let request = "api/empleadosauth/perfilauth"
        let url = environment.apiejemplos + request
        return firstValueFrom(
            this._http.get<Empleado>(url)
        )
    }
    
    async logInEmpleadoAsync(user: Login): Promise<any> {
        let request = "api/authempleados/login"
        let url = environment.apiejemplos + request
        let header = new HttpHeaders().set("content-type", "application/json")
        return firstValueFrom(
            this._http.post(url, user, {headers: header})
        )
    }
}