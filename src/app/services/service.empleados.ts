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
    
    //necesitamos saber si nos da error o no la petición: 
    async logInEmpleadoAsync(user: Login): Promise<any> {
        let request = "api/authempleados/login"
        let url = environment.apiejemplos + request
        let header = new HttpHeaders().set("content-type", "application/json")

        try{
            //guardamos la petición en data
            let data: any = await firstValueFrom(
                this._http.post(url, user, {headers: header})
            )
            //de data, guardamos el response (token)
            console.log(data.response)
            //devolvemos el token al component
            return data.response
        }catch (error){
            //si da error es aqui
            console.log("errores de login")
            throw error;
        }
    }
}