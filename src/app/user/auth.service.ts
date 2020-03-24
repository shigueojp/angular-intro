import { Injectable } from "@angular/core";
import { IUser } from './user.model';

@Injectable()
export class AuthService {
    currentUser: IUser

    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'Foo',
            lastName: 'Bar'
        }
    }

    isAuthenticated() {
        return !!this.currentUser
    }

    getUserName() {
        return this.currentUser.firstName
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }
}