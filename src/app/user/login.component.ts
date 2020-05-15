import { Component } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent {
    constructor(private authService: AuthService, private router: Router) { }
    userName
    password
    mouseoverLogin
    loginInvalid = false;

    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password).subscribe(resp => {
            if (!resp) {
                this.loginInvalid = true;
            } else {
                this.router.navigate(['events'])
            }
        })
    }
}