import { Component } from '@angular/core';
import { last } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora-angular';
  num:any = "";
  numAnterior:any = "";
  historico:any = "";
  resultado:number = 0;
  lastButton:string = "";

  addnum(num:string){
    this.num += num;
  }

  suma(){
    this.numAnterior = this.num;
    this.num = "";
    this.resultado += parseInt(this.numAnterior);
    this.historico += this.numAnterior + " + ";
    this.lastButton = "suma";
  }

  resta(){
    this.numAnterior = this.num;
    this.num = "";
    this.historico += this.numAnterior + " - ";
    this.lastButton = "resta";
  }

  division(){
    this.numAnterior = this.num;
    this.num = "";
    this.resultado = this.numAnterior;
    this.resultado / parseInt(this.numAnterior);
    this.historico += this.numAnterior + " / ";
    this.lastButton = "division";
  }

  multiplicacion(){
    this.numAnterior = this.num;
    this.num = "";
    this.resultado = this.numAnterior;
    this.resultado * parseInt(this.numAnterior);
    this.historico += this.numAnterior + " * ";
    this.lastButton = "mul";
  }

  igual(){
    switch(this.lastButton){
      case "suma":
        this.historico += this.num + " = ";
        this.resultado += parseInt(this.num);
        break;
      case "division":
        this.historico += this.num + " = ";
        this.resultado /= parseInt(this.num);
        break;
      case "mul":
        this.historico += this.num + " = ";
        this.resultado *= parseInt(this.num);
        break;
      case "resta":
        this.historico += this.num + " = ";
        this.resultado = this.numAnterior - this.num;
        break;
    }
    this.num = this.resultado;
  }

  borrar(){
    this.num = "";
    this.historico = "";
    this.numAnterior = "";
    this.resultado = 0;
    this.lastButton = "";
  }

}
