import { Component, OnInit } from '@angular/core';
import { Monstros } from 'src/app/shared/models/monstros.model';
import { ApiResourceService } from 'src/app/shared/services/api-resource.service';

@Component({
  selector: 'app-monstros',
  templateUrl: './monstros.component.html',
  styleUrls: ['./monstros.component.css']
})
export class MonstrosComponent implements OnInit {

  monstros: Monstros;

  constructor(public service: ApiResourceService) { }

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.service.getMontstros().subscribe(data => {
      this.monstros = data;
      console.log(this.monstros);
    });
  }
}
