import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {

   @Input() dataEntranteCard2:any;
   public image:string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.image = ""
    console.log("Llamando a card2")
  }

  
}
