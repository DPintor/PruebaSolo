import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tercera',
  templateUrl: './tercera.page.html',
  styleUrls: ['./tercera.page.scss'],
})
export class TerceraPage implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  public numero: string = '' ;
  public textos: string[] = ['Hola', 'Adios', 'Feliz Cumpleaños', 'Feliz Año', 'Guapa', 'Guapo', 'Hasta Nunqui', 'Feo', 'Gato', 'Perro' ];
  public texto: string;
  constructor(private route: ActivatedRoute , private navegador: NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe( paramMap => {
      if (!paramMap.has('numero')) {
        this.navegador.navigateBack('/tercera');
        return;
      }
      this.numero = paramMap.get('numero');
      this.texto = this.textos[this.numero];
    });
  }

}
