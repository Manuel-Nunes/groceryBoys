import { DataHandler } from '../DataHandler.js';
import { CompleteDataClump, User } from '../types.js';

export class UserModel{
  private dataClump: CompleteDataClump;
  public Users: User[];
  private Datahandler: DataHandler;
  private self: UserModel;

  private constructor(){
    this.Datahandler = DataHandler.getInstance();
  }

  public getInstance(){
    if (this.self) {
      return this.self;
    }

    this.self= new UserModel();

    return this.self;
  }

  public getUserByEmail(email: string): User{
    const User:User = null;
    
    for (let i: number = 0; i < this.Users.length;i++)

      return User;
  }
}