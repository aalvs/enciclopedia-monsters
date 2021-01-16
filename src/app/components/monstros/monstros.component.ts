import { Component, OnInit } from '@angular/core';
import { Monstros } from 'src/app/shared/models/monstros.model';

@Component({
  selector: 'app-monstros',
  templateUrl: './monstros.component.html',
  styleUrls: ['./monstros.component.css']
})
export class MonstrosComponent implements OnInit {

  monstros: Monstros[];

  constructor() { }

  ngOnInit(): void {
  }

}
