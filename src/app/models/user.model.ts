export class User {
  _id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  cityOrRegion: string;
  country: string;
  hospital: string;
  user: any;
  refreshToken?: string;
  authData?: string;
  role: string;
}
