import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IdentificationType } from 'src/app/enums/identification-type.enum';
import { SearchCustomerRequest } from 'src/app/models/search.customer';
import { CustomerService } from 'src/app/services/customer.service';

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

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService
  ) { }

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
    this.customerService.getCustomerById(this.customerRequest())
      .pipe()
      .subscribe();
    this.searchCustomerForm.get('documentType')?.setValue(IdentificationType.DEFAULT);
    this.searchCustomerForm.reset();
  }

  private customerRequest(): SearchCustomerRequest {
    const { documentType, documentNumber } = this.searchCustomerForm.value;
    const idTypeRequest = documentType === IdentificationType.CEDULA ? 'CEDULA' : 'PASSPORT';
    const idNumberRequest = documentNumber ? documentNumber : '';
    return { identificationNumber: idNumberRequest, identificationType: idTypeRequest };
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
