import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IdentificationType } from 'src/app/enums/identification-type.enum';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent {
  searchCustomerForm = this.formBuilder.group({
    documentType: [IdentificationType.DEFAULT, [Validators.required, Validators.maxLength(20)]],
    documentNumber: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(11)]],
  })

  documentTypes: string[] = [
    IdentificationType.DEFAULT,
    IdentificationType.CEDULA,
    IdentificationType.PASSPORT
  ];

  constructor(private formBuilder: FormBuilder) { }

  enableButton(): boolean {
    return this.searchCustomerForm.invalid || this.isDefaultType();
  }

  isDefaultType(): boolean {
    const { documentType } = this.searchCustomerForm.value;
    return documentType === IdentificationType.DEFAULT;
  }

  onSearchCustomer() {
    if (this.searchCustomerForm.invalid) {
      return;
    }
    console.log(this.searchCustomerForm.value);
    this.searchCustomerForm.reset();
    this.searchCustomerForm.get('documentType')?.setValue(IdentificationType.DEFAULT);
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
