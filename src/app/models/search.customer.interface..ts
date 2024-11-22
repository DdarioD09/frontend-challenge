export type IdentificationTypeCode = 'CEDULA' | 'PASSPORT';

export interface SearchCustomerRequest {
    identificationNumber: string;
    identificationType: IdentificationTypeCode
}

export interface Customer {
    identificationNumber: string;
    identificationType: IdentificationTypeCode
    firstName?: string;
    middleName?: string;
    lastName?: string;
    secondLastName?: string;
    phoneNumber?: string;
    address?: string;
    city: string;
}