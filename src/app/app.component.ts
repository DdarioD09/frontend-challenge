import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userForm = new FormGroup({
    documentType: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    documentNumber: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(11)]),
  })

  documentTypes: string[] = ['Seleccionar', 'Cédula de ciudadanía', 'Pasaporte'];

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.userForm.reset();
    }
  }
}
