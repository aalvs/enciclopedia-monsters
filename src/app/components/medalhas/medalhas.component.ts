import { Component, OnInit } from '@angular/core';
import { Medalhas } from 'src/app/shared/models/medalhas.model';
import { ApiResourceService } from 'src/app/shared/services/api-resource.service';

@Component({
  selector: 'app-medalhas',
  templateUrl: './medalhas.component.html',
  styleUrls: ['./medalhas.component.css']
})
export class MedalhasComponent implements OnInit {

  medalhas: Medalhas;

  constructor(public service: ApiResourceService) { }

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.service.getMedalhas().subscribe(data => {
      this.medalhas = data;
      console.log(this.medalhas);
    });
  }
}
