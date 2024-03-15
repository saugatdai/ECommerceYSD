import User from "../../entities/UserComponent/User";

export interface UserManagerStorageInteractor {
  createUser(user: User | null): Promise<User>;
  getUser(userId: number): Promise<User>;
  updateUser(user: User | null): Promise<User>;
  deleteUser(userId: number): Promise<void>;
}

export default class UserManager {
  constructor(
    private _user: User | null,
    private _storage: UserManagerStorageInteractor
  ) {}

  private throwUserNotSetError() {
    if (!this._user) {
      throw new Error("User not set");
    }
  }

  public get user(): User | null {
    return this._user;
  }

  public set user(value: User) {
    this._user = value;
  }

  public async createUser() {
    this.throwUserNotSetError();
    const newUser = await this._storage.createUser(this._user);
    this._user = newUser;
  }

  public async getUser(userId: number) {
    const user = await this._storage.getUser(userId);
    this._user = user;
  }

  public async updateUser() {
    this.throwUserNotSetError();
    const updatedUser = await this._storage.updateUser(this._user);
    this._user = updatedUser;
  }

  public async deleteUser() {
    if (this._user) {
      await this._storage.deleteUser(this._user.id);
      this._user = null;
    }
  }
}
