export class Doctor {
  _id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  cityOrRegion: string;
  country: string;
  hospital: string;
  refreshToken?: string;
  authData?: string;
  role: string;
}
