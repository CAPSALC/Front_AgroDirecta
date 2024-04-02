import { Component } from '@angular/core';
import { createPopper } from '@popperjs/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  onSubmit() {
    // Implement login logic here, e.g., using a service to communicate with API
    console.log('Login Form Submitted:', this.username, this.password);
    // Clear form fields (optional)
    this.username = '';
    this.password = '';
  }
}


// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {

// }
