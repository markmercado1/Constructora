import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Navbar} from '../../components/navbar/navbar';
import {Footer} from '../../components/footer/footer';

@Component({
  selector: 'app-cotizaciones',
  imports: [CommonModule, FormsModule, Navbar, Footer],
  templateUrl: './cotizaciones.html',
  styleUrl: './cotizaciones.css'
})

export class CotizacionComponent {
  cotizacion = {
    nombre: '',
    telefono: '',
    email: '',
    descripcion: ''
  };

  onSubmit() {
    if (this.cotizacion.nombre && this.cotizacion.telefono && this.cotizacion.email && this.cotizacion.descripcion) {
      console.log('Cotización enviada:', this.cotizacion);
      alert('Tu solicitud de cotización ha sido enviada con éxito 🚀');
      this.cotizacion = { nombre: '', telefono: '', email: '', descripcion: '' };
    } else {
      alert('Por favor, completa todos los campos antes de enviar.');
    }
  }
}
