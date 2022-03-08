import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  //Servicio Crear
  crear(obj: any): Observable<any> {
    const reqHeaders = new HttpHeaders(
      {
        'Content-Type': 'application/json'
      });
    return this.http.post<any>('http://190.60.101.59:6003/api/Personas', obj, { headers: reqHeaders });
  }

  //Servicio Listar
  obtener(obj: any): Observable<any> {
    const reqHeaders = new HttpHeaders(
      {
        'Content-Type': 'application/json'
      });
    return this.http.get<any>('http://190.60.101.59:6003/api/Personas/' + obj, { headers: reqHeaders });
  }

  //Servicio eliminar
  eliminar(obj: any): Observable<any> {
    const reqHeaders = new HttpHeaders(
      {
        'Content-Type': 'application/json'
      });
    return this.http.delete<any>('http://190.60.101.59:6003/api/Personas/' + obj, { headers: reqHeaders });
  }
}
