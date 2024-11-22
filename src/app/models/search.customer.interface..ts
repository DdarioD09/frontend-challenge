export type IdentificationType = 'CEDULA' | 'PASSPORT';

export interface SearchCustomerRequest {
    identificationNumber: string;
    identificationType: IdentificationType
}

export interface Customer {
    identificationNumber: string;
    identificationType: IdentificationType
    // fullName?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    secondLastName?: string;
    phoneNumber?: string;
    address?: string;
    city: string;
}