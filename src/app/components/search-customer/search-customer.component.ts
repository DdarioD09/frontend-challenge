import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent {
  searchCustomerForm = new FormGroup({
    documentType: new FormControl('Seleccionar', [Validators.required, Validators.maxLength(20)]),
    documentNumber: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(11)]),
  })

  documentTypes: string[] = ['Seleccionar', 'Cédula de ciudadanía', 'Pasaporte'];

  enableButton(): boolean {
    return this.searchCustomerForm.invalid || this.isDefaultType();
  }

  isDefaultType(): boolean {
    const { documentType } = this.searchCustomerForm.value;
    return documentType === 'Seleccionar'
  }

  onSubmit() {
    if (this.searchCustomerForm.invalid) {
      return;
    }
    console.log(this.searchCustomerForm.value);
    this.searchCustomerForm.reset();
    this.searchCustomerForm.get('documentType')?.setValue('Seleccionar');
  }

  getErrorMessage(filed: string): string | void {
    let message;
    const formField = this.searchCustomerForm.get(filed);

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
