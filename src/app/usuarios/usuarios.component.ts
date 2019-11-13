import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios :Object[] =[
{

  id:'1',
  descripcion:'oe'

}

  ]
  constructor(private rutaActiva: ActivatedRoute) {
    this.getHistorias()
   }

  ngOnInit() {
  }

  getHistorias(){
    console.log(this.rutaActiva.snapshot.params)
  }
}
