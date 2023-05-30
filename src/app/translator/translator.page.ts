import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.page.html',
  styleUrls: ['./translator.page.scss'],
})
export class TranslatorPage implements OnInit {

  constructor() { }

  
 num: number = 0;
 result: string = '';


  Unidades(num: number): string {
    switch (num) {
        case 1: return "UNO";
        case 2: return "DOS";
        case 3: return "TRES";
        case 4: return "CUATRO";
        case 5: return "CINCO";
        case 6: return "SEIS";
        case 7: return "SIETE";
        case 8: return "OCHO";
        case 9: return "NUEVE";
        case 10: return "DIEZ";
        case 11: return "ONCE";
        case 12: return "DOCE";
        case 13: return "TRECE";
        case 14: return "CATORCE";
        case 15: return "QUINCE";
    }
    return "";
  }

  Decenas(num: number): string {
    const decena = Math.floor(num / 10);
    const unidad = num - decena * 10;

    switch (decena) {
        case 1:
            switch (unidad) {
                case 0: return "DIEZ";
                case 1: return "ONCE";
                case 2: return "DOCE";
                case 3: return "TRECE";
                case 4: return "CATORCE";
                case 5: return "QUINCE";
                default: return "DIECI" + this.Unidades(unidad);
            }
        case 2:
            switch (unidad) {
                case 0: return "VEINTE";
                default: return "VEINTI" + this.Unidades(unidad);
            }
        case 3: return "TREINTA" + (unidad !== 0 ? " Y " + this.Unidades(unidad) : "");
        case 4: return "CUARENTA" + (unidad !== 0 ? " Y " + this.Unidades(unidad) : "");
        case 5: return "CINCUENTA" + (unidad !== 0 ? " Y " + this.Unidades(unidad) : "");
        case 6: return "SESENTA" + (unidad !== 0 ? " Y " + this.Unidades(unidad) : "");
        case 7: return "SETENTA" + (unidad !== 0 ? " Y " + this.Unidades(unidad) : "");
        case 8: return "OCHENTA" + (unidad !== 0 ? " Y " + this.Unidades(unidad) : "");
        case 9: return "NOVENTA" + (unidad !== 0 ? " Y " + this.Unidades(unidad) : "");
    }

    return this.Unidades(unidad);
  }

  Centenas(num: number): string {
    const centenas = Math.floor(num / 100);
    const decenas = num - centenas * 100;

    switch (centenas) {
        case 1:
            if (decenas > 0) {
                return "CIENTO " + this.Decenas(decenas);
            }
            return "CIEN";
        case 2: return "DOSCIENTOS " +  this.Decenas(decenas);
        case 3: return "TRESCIENTOS " +  this.Decenas(decenas);
        case 4: return "CUATROCIENTOS " +  this.Decenas(decenas);
        case 5: return "QUINIENTOS " +  this.Decenas(decenas);
        case 6: return "SEISCIENTOS " +  this.Decenas(decenas);
        case 7: return "SETECIENTOS " +  this.Decenas(decenas);
        case 8: return "OCHOCIENTOS " +  this.Decenas(decenas);
        case 9: return "NOVECIENTOS " +  this.Decenas(decenas);
    }

    return this.Decenas(decenas);
  }

  NumeroALetras(num: number): string {
    if (num === 0) {
        return "CERO";
    } else if (num <= 15) {
        return this.Unidades(num);
    } else if (num < 100) {
        return this.Decenas(num);
    } else if (num < 1000) {
        return this.Centenas(num);
    } else if (num === 1000) {
        return "MIL";
    }

    return "";
  }

  convert() {
    this.result = this.NumeroALetras(this.num);
  }

  ngOnInit() {
  }

}
