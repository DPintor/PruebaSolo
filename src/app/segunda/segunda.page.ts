import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { stringify } from 'querystring';

@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.page.html',
  styleUrls: ['./segunda.page.scss'],
})
export class SegundaPage implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  public texto: string = '' ;
  // tslint:disable-next-line: no-inferrable-types
  public numero: string = '';
  constructor(private route: ActivatedRoute , private navegador: NavController, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe( paramMap => {
      if (!paramMap.has('numero')) {
        this.navegador.navigateBack('/segunda');
        return;
      }
      this.texto = 'Has elegido el numero ' + paramMap.get('numero') + ' estas seguro que deseas imprimir este texto?';
      this.numero = paramMap.get('numero');
    });
  }
  PasarNumero(numero: number) {
    this.router.navigate(['/', 'tercera', numero]);
  }
}
