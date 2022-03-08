import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/core/services/crud.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  //Definir formulario
  form: FormGroup;
  Person = new FormControl('', Validators.required);

  crear = "";
  eliminar = "";
  obtener = "";

  constructor(private crudService: CrudService, private router: Router, private fb: FormBuilder, private _snackBar: MatSnackBar) {
    //Validación para los campos
    this.form = this.fb.group({
      Documento: ['', Validators.required],
      Nombres: ['', Validators.required],
      Apellidos: ['', Validators.required],
      Telefono: ['', Validators.required],
      Correo: ['', Validators.required],
      Direccion: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  //Funcion para consumir el servicio Agregar.
  agregarPersona() {
    this.crudService.crear(this.form.value).subscribe(r => {
      console.log(r)
      this.crear = r;
    });
    //Mostrar alerta
    this._snackBar.open('Persona agregado con exito', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
    //Reestablecer formulario
    this.form.reset();
  }

  //Funcion para consumir el servicio Eliminar
  eliminarPersona() {
    this.crudService.eliminar(this.Person.value).subscribe(r => {
       console.log(r)
       this.eliminar = r;
      });

    this._snackBar.open('Persona eliminar con exito', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
    //Reestablecer formulario
    this.form.reset();

  }

//Funcion para consumir el servicio Obtener
  obtenerPersona() {
    this.crudService.obtener(this.Person.value).subscribe(r => {
      console.log(r)
      this.obtener = r;
    });

    this._snackBar.open('Persona obtenido con exito', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
    //Reestablecer formulario
    this.form.reset();
  }
}
