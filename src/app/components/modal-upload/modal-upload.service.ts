import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalUploadService {

  public tipo: string;
  public id: string;

  public oculto: string = 'oculto';
  
  public notificacion = new EventEmitter<any>() ;

  constructor() {

    console.log('Modal upload Service');

   }

   ocultarModal() {
    this.oculto = 'oculto';
    this.id = null;
    this.tipo = null;
   }

   mostrarModal(id: string, tipo: string ) {
      this.oculto = '';
      this.id = id;
      this.tipo = tipo;
   }
}
