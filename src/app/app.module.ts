import { APP_INITIALIZER, NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//Imports do PrimeNG
import { ButtonModule } from 'primeng/button';
import { PrimeNGConfig } from 'primeng/api';
import { MainComponent } from './main/main.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

// Componentes
import { TaskComponent } from './tasks/tasks.component';
import { HeaderComponent } from './main/components/header/header.component';
import { FooterComponent } from './main/components/footer/footer.component';
import { PessoasComponent } from './xhurrasco/components/pessoas/pessoas.component';
import { XhurrascoComponent } from './xhurrasco/xhurrasco.component';
import { LocalComponent } from './xhurrasco/components/local/local.component';
import { EstatisticaComponent } from './xhurrasco/components/estatistica/estatistica.component';
import { GeralComponent } from './xhurrasco/components/geral/geral.component';
import { ComidasComponent } from './xhurrasco/components/comidas/comidas.component';
import { FormsComponent } from './xhurrasco/components/local/components/forms/forms.component';
import { CadastrarComidasComponent } from './xhurrasco/components/comidas/cadastrar/cadastrar.component';
import { CadastrarPesssoasComponent } from './xhurrasco/components/pessoas/cadastrar/cadastrar.component';
import { EditarPessoasComponent } from './xhurrasco/components/pessoas/editar/editar.component';
import { EditarComidasComponent } from './xhurrasco/components/comidas/editar/editar.component';

//Factory de configs do primeng (Todas as configurações dele
//podem ser alteradas aqui!
const initializeAppFactory = (primeConfig: PrimeNGConfig) => () => {
  primeConfig.inputStyle = 'filled';
  primeConfig.ripple = true;
};

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    PessoasComponent,
    XhurrascoComponent,
    LocalComponent,
    EstatisticaComponent,
    GeralComponent,
    ComidasComponent,
    AppComponent,
    FormsComponent,
    CadastrarComidasComponent,
    CadastrarPesssoasComponent,
    EditarPessoasComponent,
    EditarComidasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TaskComponent,
    RouterLink,
    RouterOutlet,
    RouterModule,
    BreadcrumbModule,
    InputSwitchModule,
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    FloatLabelModule,
    InputGroupAddonModule,
    InputGroupModule,
  ],
  providers: [
    provideClientHydration(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [PrimeNGConfig],
      multi: true,
    },
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
