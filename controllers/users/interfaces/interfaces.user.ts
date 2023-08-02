export interface UserData {
    email: string;
  }
  
  export interface SignInResponse {
    token: string;
    message: string;
    data: UserData;
  }
  