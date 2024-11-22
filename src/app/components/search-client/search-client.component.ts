import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.css']
})
export class SearchClientComponent {
  searchClientForm = new FormGroup({
    documentType: new FormControl('Seleccionar', [Validators.required, Validators.maxLength(20)]),
    documentNumber: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(11)]),
  })

  documentTypes: string[] = ['Seleccionar', 'Cédula de ciudadanía', 'Pasaporte'];

  enableButton(): boolean {
    return this.searchClientForm.invalid || this.isDefaultType();
  }

  isDefaultType(): boolean {
    const { documentType } = this.searchClientForm.value;
    return documentType === 'Seleccionar'
  }

  onSubmit() {
    if (this.searchClientForm.invalid) {
      return;
    }
    this.searchClientForm.reset();
    this.searchClientForm.get('documentType')?.setValue('Seleccionar');
  }

  getErrorMessage(filed: string): string | void {
    let message;
    const formField = this.searchClientForm.get(filed);

    // @ts-ignore
    if (formField.errors.required) {
      message = 'Debes diligenciar este campo';
    } else if (formField?.hasError('pattern')) {
      message = 'Este campo no debe tener espacios';
    } else if (formField?.hasError('minlength')) {
      // @ts-ignore
      const minLenth = formField.errors?.minlength.requiredLength;
      message = `Este campo no puede ser menor a ${minLenth} carácteres`;
    } else {
      message = ''
    }
    return message;
  }
}
