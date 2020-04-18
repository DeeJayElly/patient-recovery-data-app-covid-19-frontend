export class User {
  _id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  cityOrRegion: string;
  country: string;
  hospitalName: string;
  refreshToken?: string;
  authData?: string;
  role: string;
}
