export class Doctor {
  _id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  cityOrRegion: string;
  hospitalName: string;
  country: string;
  authData?: string;
  token?: string;
}
