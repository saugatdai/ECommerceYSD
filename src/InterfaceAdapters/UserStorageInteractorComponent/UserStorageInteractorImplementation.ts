import { UserStorageInteractor } from "../../UseCases/UserManagementComponent/UserManager";
import User from "../../entities/UserComponent/User";

export interface UserStorageInteractorAdapter {
  createUser(user: User | null): Promise<User>;
  getUser(userId: number): Promise<User>;
  updateUser(user: User | null): Promise<User>;
  deleteUser(userId: number): Promise<void>;
  getAllUsers(): Promise<User[]>;
}

export default class UserStorageAdapterImplementation implements UserStorageInteractor {
    constructor(private _storage: UserStorageInteractorAdapter) {}

    get storage() {
        return this._storage;
    }

    set storage(value) {
        this._storage = value;
    }

    public async createUser(user: User | null) {
        return await this._storage.createUser(user);
    }

    public async getUser(userId: number) {
        return await this._storage.getUser(userId);
    }

    public async updateUser(user: User | null) {
        return await this._storage.updateUser(user);
    }

    public async deleteUser(userId: number) {
        return await this._storage.deleteUser(userId);
    }

    public async getAllUsers() {
        return await this._storage.getAllUsers();
    }
    
}