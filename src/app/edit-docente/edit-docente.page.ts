import { Component, OnInit } from '@angular/core';

//agregar
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { DocenteService } from './../shared/docente.service';

@Component({
  selector: 'app-edit-docente',
  templateUrl: './edit-docente.page.html',
  styleUrls: ['./edit-docente.page.scss'],
})
export class EditDocentePage implements OnInit {
  updateBookingForm: FormGroup;
  id: any;

  constructor(
    private aptService: DocenteService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.aptService.getBooking(this.id).valueChanges().subscribe(res => {
      this.updateBookingForm.setValue(res);
    });
   }

   ngOnInit() {
    this.updateBookingForm = this.fb.group({

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
    console.log(this.updateBookingForm.value)
  }

  updateForm() {
    this.aptService.updateBooking(this.id, this.updateBookingForm.value)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }

}
