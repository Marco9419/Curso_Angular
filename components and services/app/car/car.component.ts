// import { Component, OnInit } from '../../../node_modules/@angular/core'
import { Component, OnInit, Input } from '@angular/core';
import {ServiceFavoritesService} from '../Service/favorite/service-favorites.service'


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input() dataEntrante:any;
  public image:string | undefined;

  constructor(private servicioFavorito: ServiceFavoritesService) { }

  ngOnInit(): void {
    this.image = ""
    // this.image = listaVideos.src;
    console.log("Llamando al componente...", this.dataEntrante)
  }

  agregarFavorito(){
    // console.log(this.dataEntrante)
    this.servicioFavorito.disparadorDeFavoritos.emit({
      data:this.dataEntrante
    })
  }
}
