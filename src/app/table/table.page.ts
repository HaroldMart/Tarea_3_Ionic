import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {

  constructor() { }

  num: number = 0;
  range: number[] = [];
  showButton: boolean = true;

  table() {
    this.showButton = false;
    this.range = [];
    for(let i = 1; i <= 13; i++) {
      this.range.push(i);
    }
  }

  ngOnInit() {
  }

}
