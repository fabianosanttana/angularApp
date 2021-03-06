import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
@Component({
  selector: 'app-cadastro-pessoa-lista',
  templateUrl: './cadastro-pessoa-lista.component.html',
  styleUrls: ['./cadastro-pessoa-lista.component.css']
})
export class CadastroPessoaListaComponent implements OnInit {
  pessoas : FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.pessoas = db.list('pessoas');
   }

  ngOnInit() {
  }

}
