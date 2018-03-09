import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FirebaseConfig } from './../environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { CadastroPessoaModule  } from './cadastro-pessoa/cadastro-pessoa.module';
@NgModule({
  declarations: [
    AppComponent
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
