import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
  import { Router } from '@angular/router';
  import { NgForm}  from '@angular/forms'
import { exceptionGuard } from '@firebase/database/dist/esm/src/core/util/util';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }
  loginForm(f : NgForm){
    console.log('entrei no form');
    if(!f.valid){
      alert('invalido');
    return;
    }
    this.afAuth.auth.signInWithEmailAndPassword(f.controls.email.value,f.controls.senha.value).then(ok => {
      this.router.navigate(['cadastro']);
    }).catch(error => {alert(error.message);});
    f.controls.email.setValue('');
    f.controls.senha.setValue('');
  }
}
