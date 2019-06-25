import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../components/config/config';


@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {
  
  transform(img: string, tipo: string = 'usuario'): any {

    let url = URL_SERVICIOS + '/imagenes';

    if ( !img ) {
      return url + '/usuario/asdf'; // lo que sea, back end está configurado para que muestre no image
    }

    if ( img.indexOf('https') >= 0 ) {
      return img;
    }

    switch (tipo) {
      case 'usuario':
        url += '/usuarios/' + img;
        break;
      case 'medico':
        url += '/medicos/' + img;
        break;
      case 'hospital':
        url += '/hospitales/' + img;
        break;

      default:
        console.log('Tipo de imagen no existe: ' + tipo + ', (usuarios, medicos y hopitales) ');
        url += '/usuario/asdf'; // lo que sea back end está configurado para que muestre no image
        break;
    }

    console.log('pipe: ' + url);


    return url;
  }

}
