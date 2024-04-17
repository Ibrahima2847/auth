import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    loginObj: Login

    constructor(private http: HttpClient, private router: Router){
      this.loginObj = new Login
    }

    onLogin(){
      this.http.post("http://localhost:3000/auth/login", this.loginObj).subscribe(
      (res: any) => {
        if (res.result) {
          alert("Login failed");
        } else {
          this.router.navigateByUrl('/dashboard');
        }
      },
      (error) => {
        console.error("Une erreur s'est produite :", error);
      }
    );

  }
}

export class Login {
    username: String
    password: String

    constructor() {
      this.username = ''
      this.password = ''
    }
}
