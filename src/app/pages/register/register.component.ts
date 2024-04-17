import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
      registerObj: Register

    constructor(private http: HttpClient, private router: Router){
      this.registerObj = new Register
    }

    onRegister(){
      this.http.post("http://localhost:3000/auth/register", this.registerObj).subscribe(
      (res: any) => {
        if (res.result) {
          alert("Register failed");
        } else {
          this.router.navigateByUrl('/login');
        }
      },
      (error) => {
        console.error("Une erreur s'est produite :", error);
      }
    );

  }

}

export class Register {
    username: String
    password: String

    constructor() {
      this.username = ''
      this.password = ''
    }
}