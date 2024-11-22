export type IdentificationTypeCode = 'CEDULA' | 'PASSPORT';

export interface SearchCustomerRequest {
    identificationNumber: string;
    identificationType: IdentificationTypeCode
}

export class Customer {
    public identificationNumber!: string;
    public identificationType: IdentificationTypeCode | undefined;
    public phoneNumber!: string;
    public address!: string;
    public city!: string;
    public firstName?: string;
    public middleName?: string;
    public lastName?: string;
    public secondLastName?: string;

}

export const voidCustomer: Customer = {
    identificationNumber: '',
    identificationType: undefined,
    phoneNumber: '',
    address: '',
    city: ''
}