import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../components/config/config';

@Injectable({
  providedIn: 'root'
})
export class SubirArchivoService {

  constructor() { }

  SubirArchivo( archivo: File, tipo: string, id: string ) {
    
    return new Promise( (resolve, reject) => { 

      let formData = new FormData();
      let xhr = new XMLHttpRequest();
  
      formData.append( 'imagen', archivo, archivo.name );
  
      xhr.onreadystatechange = function() {
  
        if ( xhr.readyState === 4 ) {
  
          if ( xhr.status === 200 ) {
  
            console.log( 'Archivo subido' );
            resolve( JSON.parse(xhr.response ) );

          } else {

            console.log( 'Falló subida' );
            reject( xhr.response );
        
          }
        }
      };
        
      let url = URL_SERVICIOS + '/upload/' + tipo + '/' + id;
        
      xhr.open('PUT', url, true);
      xhr.send(formData);
     });


  }
}

