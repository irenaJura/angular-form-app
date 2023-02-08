export interface User {
  firstName: string,
  lastName: string,
  email: string,
  hobby1: string,
  hobby2: string,
  hobby3: string,
  hobbies: Hobby[]
}

export interface Hobby {
  addHobby: string
}
