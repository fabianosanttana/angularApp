import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroPessoaFormComponent } from './cadastro-pessoa-form/cadastro-pessoa-form.component';
import { CadastroPessoaListaComponent } from './cadastro-pessoa-lista/cadastro-pessoa-lista.component';
import { CadastroPessoaComponent } from './cadastro-pessoa.component';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  exports: [CadastroPessoaFormComponent, CadastroPessoaListaComponent,CadastroPessoaComponent],
  declarations: [CadastroPessoaFormComponent, CadastroPessoaListaComponent,CadastroPessoaComponent],
  imports: [
    CommonModule , FormsModule
  ],
  providers:[AngularFireDatabase]
})
export class CadastroPessoaModule { }
