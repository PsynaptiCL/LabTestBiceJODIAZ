import { Routes } from "@angular/router";
import { IndicadoresComponent } from "./components/indicadores/indicadores.component";

export const ROUTES: Routes = [
    {path: 'indicadores', component: IndicadoresComponent},
    {path: '', pathMatch: 'full', redirectTo: 'indicadores'},
    {path: '**', pathMatch: 'full', redirectTo: 'indicaores'}
]