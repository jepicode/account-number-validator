interface IsAccountNumberValidResponse {
    isValid: boolean;
    message: string;
}
declare const isAccountNumberValid: (accountNumber: string) => IsAccountNumberValidResponse;
