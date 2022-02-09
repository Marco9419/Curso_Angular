import { Component, OnInit } from '@angular/core';
import { RestApiService } from './Service/Rest/rest-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ejercicio-1';
  // public listaVideos:Array<any>=[];
  // public descriptionChicos:Array<any>=[];

  // public listaVideos:Array<any>=[];
  public listaVideos:any=[];

  constructor(private RestService: RestApiService){

  }

  ngOnInit(): void{
    this.cargarData();
  }

    public cargarData(){
      this.RestService.get("https://randomuser.me/api/")
      .subscribe(res =>{
        
        this.listaVideos = res; 
      })
    }


  //   this.listaVideos = [
  //     {
  //       title: "Burbuja",
  //       subtitle: "Soy tierna",
  //       src: "https://reygif.com/media/2/burbuja-16912.gif"
  //     },
  //     {
  //       title: "Bombon",
  //       subtitle: "Soy la Lider del equipo",
  //       src: "https://reygif.com/media/2/bombon-16896.gif"

  //     },
  //     {
  //       title: "Bellota",
  //       subtitle: "Soy la màs ruda",
  //       src: "https://c.tenor.com/fyPYbRR70ygAAAAC/snack-bellota.gif"

  //     },
  //     {
  //     title: "Chicos Cocosos",
  //     subtitle: "Nuestro super poder es Volar",
  //     src: "https://c.tenor.com/ICf0Pp3YcgoAAAAC/celebrate-the-rowdyruff-boys.gif"


  //     }

  //   ];
  // }
}
