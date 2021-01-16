import { Component, OnInit } from '@angular/core';
import { Lideres } from 'src/app/shared/models/lideres.model';

@Component({
  selector: 'app-lideres',
  templateUrl: './lideres.component.html',
  styleUrls: ['./lideres.component.css']
})
export class LideresComponent implements OnInit {

  lideres: Lideres[];

  constructor() { }

  ngOnInit(): void {
  }

}
