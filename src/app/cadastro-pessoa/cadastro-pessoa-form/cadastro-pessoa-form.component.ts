import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
selector: 'app-cadastro-pessoa-form',
templateUrl: './cadastro-pessoa-form.component.html',
styleUrls: ['./cadastro-pessoa-form.component.css']
})
export class CadastroPessoaFormComponent implements OnInit {
pessoas : Array<any>;
constructor() { }
ngOnInit() { 
this.pessoas = new Array<any>();
}
form_submit(f: NgForm) {
  this.pessoas.push({nome: f.form.controls.nome.value,sobrenome : f.form.controls.sobrenome.value});
console.log(this.pessoas);
}
}