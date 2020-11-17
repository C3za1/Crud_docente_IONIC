import { Injectable } from '@angular/core';

//agregar
import { docente  } from '../shared/docente';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DocenteService 
{
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createBooking(docente : docente ) {
    return this.bookingListRef.push({

      nombre: docente.nombre,
      apellidoPaterno: docente.apellidoPaterno,
      apellidoMaterno: docente.apellidoMaterno,
      edad: docente.edad,
      fechaNacimiento: docente.fechaNacimiento,
      gradoDdominio: docente.gradoDdominio,
      cedulaProfecional: docente.cedulaProfecional,
      estado: docente.estado,
      ciudad: docente.ciudad,
      acreditacionDestudiosMinimosDlicenciatura: docente.acreditacionDestudiosMinimosDlicenciatura,
      formacionPedagogica: docente.formacionPedagogica,
      dominioSegundaLengua: docente.dominioSegundaLengua,
      promedioGeneralCarrera: docente.promedioGeneralCarrera,
      cursoExtraCurriculares: docente.cursoExtraCurriculares,
      programasDmovilidadAcademica: docente.programasDmovilidadAcademica,
      fotografiaTipoPasaporte: docente.fotografiaTipoPasaporte,
      numeroCelular: docente.numeroCelular
    })
  }

  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/docente /' + id);
    return this.bookingRef;
  }

  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/docente ');
    return this.bookingListRef;
  }

  // Update
  updateBooking(id, docente : docente ) {
    return this.bookingRef.update({

      nombre: docente.nombre,
      apellidoPaterno: docente.apellidoPaterno,
      apellidoMaterno: docente.apellidoMaterno,
      edad: docente.edad,
      fechaNacimiento: docente.fechaNacimiento,
      gradoDdominio: docente.gradoDdominio,
      cedulaProfecional: docente.cedulaProfecional,
      estado: docente.estado,
      ciudad: docente.ciudad,
      acreditacionDestudiosMinimosDlicenciatura: docente.acreditacionDestudiosMinimosDlicenciatura,
      formacionPedagogica: docente.formacionPedagogica,
      dominioSegundaLengua: docente.dominioSegundaLengua,
      promedioGeneralCarrera: docente.promedioGeneralCarrera,
      cursoExtraCurriculares: docente.cursoExtraCurriculares,
      programasDmovilidadAcademica: docente.programasDmovilidadAcademica,
      fotografiaTipoPasaporte: docente.fotografiaTipoPasaporte,
      numeroCelular: docente.numeroCelular
    })
  }

  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/docente /' + id);
    this.bookingRef.remove();
  }
}