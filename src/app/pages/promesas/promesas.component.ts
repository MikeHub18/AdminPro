import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() { 
    
   

    this.contarTres().then (
      () => console.log('Promesa ok')
    )
    .catch( error => console.error('Error en la promesa', error));
      

    

   }

  ngOnInit() {
  }
  
  contarTres(): Promise <boolean> {
  
    return new Promise((resolve, reject) => {
      
      let contador = 0;

      const intervalo = setInterval ( () => {
        contador += 1;
        
        if ( contador === 3) {
          
          resolve( true );
          clearInterval(intervalo);
        }


      }, 1000 );

    });
  }

}
