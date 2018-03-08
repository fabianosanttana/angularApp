import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FirebaseConfig } from './../environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';
import { CadastroPessoaModule  } from './cadastro-pessoa/cadastro-pessoa.module';

@NgModule({
  declarations: [
    AppComponent,
    CadastroPessoaModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CadastroPessoaModule,
    AngularFireModule.initializeApp(FirebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
