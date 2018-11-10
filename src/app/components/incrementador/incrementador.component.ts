import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {
  
  @ViewChild('txtProgreso') txtProgreso: ElementRef;

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { 
  }

  ngOnInit() {
  }
  
  onChanges(newValue: number) {

    // let elemHTML: any = document.getElementsByName('progreso')[0];
    // console.log(elemHTML.value);


    if ( newValue >= 100) {
      this.progreso = 100;
    } else if ( newValue <= 0 ) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    // elemHTML.value = this.progreso;

    this.txtProgreso.nativeElement.value = this.progreso;
    this.cambioValor.emit( this.progreso );
    this.txtProgreso.nativeElement.focus();
  }

  cambiarValor( valor: number ) {

    this.progreso = this.progreso + valor;

    if (this.progreso >= 100) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0) {
      this.progreso = 100;
      return;
    }

    this.cambioValor.emit( this.progreso );
  }
}
