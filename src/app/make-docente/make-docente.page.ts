import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DocenteService } from '../shared/docente.service';

@Component({
  selector: 'app-make-docente',
  templateUrl: './make-docente.page.html',
  styleUrls: ['./make-docente.page.scss'],
})
export class MakeDocentePage implements OnInit {
bookingForm: FormGroup;

  constructor(
    private aptService: DocenteService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({

      nombre: [''],
      apellidoPaterno: [''],
      apellidoMaterno: [''],
      edad: [''],
      fechaNacimiento: [''],
      gradoDdominio: [''],
      cedulaProfecional: [''],
      estado: [''],
      ciudad: [''],
      acreditacionDestudiosMinimosDlicenciatura: [''],
      formacionPedagogica: [''],
      dominioSegundaLengua: [''],
      promedioGeneralCarrera: [''],
      cursoExtraCurriculares: [''],
      programasDmovilidadAcademica: [''],
      fotografiaTipoPasaporte: [''],
      numeroCelular: ['']
    })
  }

  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
    } 
    else {
      this.aptService.createBooking(this.bookingForm.value).then(res => {
        console.log(res)
        this.bookingForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }
}
