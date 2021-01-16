import { Component, OnInit } from '@angular/core';
import { Medalhas } from 'src/app/shared/models/medalhas.model';

@Component({
  selector: 'app-medalhas',
  templateUrl: './medalhas.component.html',
  styleUrls: ['./medalhas.component.css']
})
export class MedalhasComponent implements OnInit {

  medalhas: Medalhas[];

  constructor() { }

  ngOnInit(): void {
  }

}
