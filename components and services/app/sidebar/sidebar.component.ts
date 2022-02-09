import { Component, OnInit } from '@angular/core';
import {ServiceFavoritesService} from '../Service/favorite/service-favorites.service'


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private servicioFavorito: ServiceFavoritesService) { }
  public  listaVideossend:Array<any>=[];

  ngOnInit(): void {
    this.servicioFavorito.disparadorDeFavoritos.subscribe(data => {
      console.log("Recibiendo data....", data)
      this.listaVideossend.push(data);
    })
  }

}
