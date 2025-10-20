import { Entity } from './entity';

export class User extends Entity {
  public email: string;
  public password?: string;
  public name: string;
  public lastName: string;

  constructor(
    id: string,
    email: string,
    name: string,
    lastName: string,
    password?: string
  ) {
    super(id);
    this.email = email;
    this.name = name;
    this.lastName = lastName;
    this.password = password;
  }
}
