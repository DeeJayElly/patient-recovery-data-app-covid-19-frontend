export class User {
  _id?: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  cityOrRegion: string;
  country: string;
  hospital: any;
  user: any;
  refreshToken?: string;
  authData?: string;
  role: string;
}
