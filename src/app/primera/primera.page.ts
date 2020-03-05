import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primera',
  templateUrl: './primera.page.html',
  styleUrls: ['./primera.page.scss'],
})
export class PrimeraPage implements OnInit {

  public numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  public textos: string[] = ['Hola', 'Adios', 'Feliz Cumpleaños', 'Feliz Año', 'Guapa', 'Guapo', 'Hasta Nunqui', 'Feo', 'Gato', 'Perro' ];
  constructor(private router: Router) { }

  ngOnInit() {

  }
  PasarNumero(numero: number) {
    this.router.navigate(['/', 'segunda', numero]);
  }

}
