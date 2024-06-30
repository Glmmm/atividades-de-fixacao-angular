import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoasComponent } from './xhurrasco/components/pessoas/pessoas.component';
import { XhurrascoComponent } from './xhurrasco/xhurrasco.component';
import { ComidasComponent } from './xhurrasco/components/comidas/comidas.component';
import { MainComponent } from './main/main.component';
import { EstatisticaComponent } from './xhurrasco/components/estatistica/estatistica.component';
import { GeralComponent } from './xhurrasco/components/geral/geral.component';
import { LocalComponent } from './xhurrasco/components/local/local.component';
import { EditarPessoasComponent } from './xhurrasco/components/pessoas/editar/editar.component';
import { CadastrarPesssoasComponent } from './xhurrasco/components/pessoas/cadastrar/cadastrar.component';
import { EditarComidasComponent } from './xhurrasco/components/comidas/editar/editar.component';
import { CadastrarComidasComponent } from './xhurrasco/components/comidas/cadastrar/cadastrar.component';


const routes: Routes = [
  { path: ' ', component: MainComponent },
  { path: 'xhurrasco', component: XhurrascoComponent },
  { path: 'xhurrasco/estatistica', component: EstatisticaComponent },
  { path: 'xhurrasco/geral', component: GeralComponent },
  { path: 'xhurrasco/local', component: LocalComponent },
  { path: 'xhurrasco/pessoas', component: PessoasComponent },
  { path: 'xhurrasco/pessoas/editar', component: EditarPessoasComponent },
  { path: 'xhurrasco/pessoas/cadastrar', component: CadastrarPesssoasComponent},
  { path: 'xhurrasco/comidas', component: ComidasComponent },
  { path: 'xhurrasco/comidas/editar', component: EditarComidasComponent },
  { path: 'xhurrasco/comidas/cadastrar', component: CadastrarComidasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
