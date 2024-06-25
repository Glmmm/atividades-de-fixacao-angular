import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoasComponent } from './xhurrasco/components/pessoas/pessoas.component';
import { XhurrascoComponent } from './xhurrasco/xhurrasco.component';
import { ComidasComponent } from './xhurrasco/components/comidas/comidas.component';
import { MainComponent } from './main/main.component';
import { EstatisticaComponent } from './xhurrasco/components/estatistica/estatistica.component';
import { GeralComponent } from './xhurrasco/components/geral/geral.component';
import { LocalComponent } from './xhurrasco/components/local/local.component';

const routes: Routes = [
  { path: ' ', component: MainComponent },
  { path: 'xhurrasco', component: XhurrascoComponent },
  { path: 'xhurrasco/estatistica', component: EstatisticaComponent },
  { path: 'xhurrasco/geral', component: GeralComponent },
  { path: 'xhurrasco/local', component: LocalComponent },
  { path: 'xhurrasco/pessoas', component: PessoasComponent },
  { path: 'xhurrasco/comidas', component: ComidasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
