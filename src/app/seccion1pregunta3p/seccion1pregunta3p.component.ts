import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/AdminService';

@Component({
  selector: 'app-seccion1pregunta3p',
  templateUrl: './seccion1pregunta3p.component.html',
  styleUrls: ['./seccion1pregunta3p.component.css']
})
export class Seccion1pregunta3pComponent implements OnInit {

  constructor(private router: Router, private AdminService:AdminService) { 
  this.getPregunta();
  }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('email');
    this.reiniciar();
    this.router.navigate(['']);
  }
  guardarRespuestaSI(respuesta){
    localStorage.setItem( 'respuesta4', respuesta);
    this.router.navigate(['/prediccion1seccion1p']);
    }

    guardarRespuestaNO(respuesta){
      localStorage.setItem( 'respuesta4', respuesta);
      this.router.navigate(['/prediccion1seccion1p']);
}

reiniciar():void{
  for(var i=2;i<=4;i++){
    localStorage.removeItem('respuesta'+i);
  }
}

getPregunta():void{
  this.AdminService.getPreguntas(10).then(function(data){
    console.log(data)
    document.getElementById("prueba").firstChild.textContent = data.descripcion
    
  })
  
}
}
