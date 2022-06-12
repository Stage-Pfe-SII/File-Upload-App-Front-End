import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfert-card',
  templateUrl: './transfert-card.component.html',
  styleUrls: ['./transfert-card.component.scss']
})
export class TransfertCardComponent implements OnInit {

  @Input() transfert:any;
  today = new Date();
  
  constructor() { }

  ngOnInit(): void {
  }

}
