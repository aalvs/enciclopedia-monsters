import { Component, OnInit } from '@angular/core';
import { Lideres } from 'src/app/shared/models/lideres.model';
import { ApiResourceService } from 'src/app/shared/services/api-resource.service';

@Component({
  selector: 'app-lideres',
  templateUrl: './lideres.component.html',
  styleUrls: ['./lideres.component.css']
})
export class LideresComponent implements OnInit {

  lideres: Lideres;

  constructor(public service: ApiResourceService) { }

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.service.getLideres().subscribe(data => {
      this.lideres = data;
      console.log(this.lideres);
    });
  }
}
