import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input() progreso: number = 90;
  @Input() btnClass: string = 'btn-primary';
  @Output() valorSalida: EventEmitter <number> = new EventEmitter();
  get getPorcentaje(){
    return `${this.progreso}%`;
  }

  cambiarValor (valor: number){
    this.valorSalida.emit(100);
    if(this.progreso >= 100 && valor >= 0){
      return (this.progreso = 100);
    }

    if (this.progreso <= 0 && valor <= 0){
      this.valorSalida.emit(100);
      return (this.progreso = 0);
    }

    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
  }

  onChange (nuevoValor: number){
    if (nuevoValor >= 100){
      this.progreso = 100;
    }else if(nuevoValor <=  0){
      this.progreso = 0;
    }else{
      this.progreso = nuevoValor;
    }
    this.valorSalida.emit(this.progreso);
  }

}
