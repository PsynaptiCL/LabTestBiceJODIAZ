import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndeconService {

  indicadores : any[] = [];

  constructor(private http: HttpClient) { 
    console.log("Indecon servicio listo");
  }

  getLast(){
    return this.http.get('https://indecon.site/last');
  }

  getValueKey(key:string ){
    return this.http.get('https://indecon.site/values/' + key);
  }

}
