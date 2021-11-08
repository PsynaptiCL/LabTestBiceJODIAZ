import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IndeconService } from 'src/app/services/indecon.service';


@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.css']
})
export class IndicadoresComponent implements OnInit {

   indicadores : any ;
   indValues = ['cobre','dolar','euro','ipc','ivp','oro','plata','uf','utm','yen'];
   valores : any;
   unixDate: any;
   fecha: any;
   valor: any;
   flag: boolean = false;
   flagError : boolean = false;
   nombre: string = "";
   chart = [];
   
  constructor(private indecon: IndeconService) { 
    this.indecon.getLast()
      .subscribe( (resp: any) => {
       this.indicadores = Object.values(resp);
      });
  }


  ngOnInit(): void {

  }

  selectIndicador(key:string, fecha: any): void {
    this.unixDate = new Date(fecha).getTime() / 1000;
    if(key != '' && key != 'undefined'){
      this.indecon.getValueKey(key)
      .subscribe((res: any) => {
        const valores = res;
        this.selectDate(valores,this.unixDate);
      });
    }
    
  }

  selectDate(valores:any,unixD:any): void{
    Object.entries(valores.values).forEach((element:any) => {
      if(element[0] == unixD){
        let fecha = new DatePipe('en-US');
        const nFecha = fecha.transform(element[0] * 1000,'longDate');
        this.fecha = nFecha;
        this.valor = element[1] + " " + valores.unit;
        this.flag = true;
        this.nombre = valores.key;
      }else if((element.length < 0) || (element[0] !== unixD)){
        this.flagError = true;
      }
    });
  }

  closeAlertInfo():void{
   this.flag = false;
  }

  closeAlertWarning():void {
    this.flagError = false;
  }

}
