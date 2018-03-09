import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FirebaseConfig } from './../environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';
import { CadastroPessoaModule  } from './cadastro-pessoa/cadastro-pessoa.module';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,CadastroPessoaModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    AppRoutingModule,
    LoginModule
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
