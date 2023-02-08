import { Hobby } from "./user";

export interface UserWritable {
  firstName: string,
  lastName: string,
  email: string,
  hobby1: string,
  hobby2: string,
  hobby3: string,
  hobbies: Hobby[],
  id: number
}
