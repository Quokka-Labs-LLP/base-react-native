interface Auth {
  countryFlag: string;
  countryCode: string;
  mobile: string;
  userType: string;
  firebaseToken: string | undefined;
  access_token: string | undefined;
  refresh_token: string | undefined;
  loggedIn: boolean;
  confirmationMethods: any;
}

interface VerifyInterface {
  countryFlag: string,
  countryCode: string,
  mobile: string,
  firebaseToken: string | undefined,
  access_token: string | undefined,
  refresh_token: string | undefined,
}