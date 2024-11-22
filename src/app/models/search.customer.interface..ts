export type IdentificationTypes = 'CEDULA' | 'PASSPORT';

export interface SearchCustomerRequest {
    identificationNumber: string;
    identificationType: IdentificationTypes
}

export interface Customer {
    identificationNumber: string;
    identificationType: IdentificationTypes
    firstName?: string;
    middleName?: string;
    lastName?: string;
    secondLastName?: string;
    phoneNumber?: string;
    address?: string;
    city: string;
}