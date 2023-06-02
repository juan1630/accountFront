export interface dataResponse {
    message: string
    ok: boolean
    user: User
  }
  
  export interface User {
    age: number
    email: string
    name: string
    prosession: string
    theme: string
  }
  

  export interface ErrorLoginResponse  {
    reponse: dataError
    status: number

   }


   interface dataError {
    data:dataError
   }

   interface dataErrorLogin {
    ok: boolean
    message: string
   }