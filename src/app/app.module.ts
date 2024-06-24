import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Imports do PrimeNG
import { ButtonModule } from 'primeng/button';
import { PrimeNGConfig } from 'primeng/api';
import { MainComponent } from './main/main.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BreadcrumbModule } from 'primeng/breadcrumb';

// Componentes
import { TaskComponent } from './tasks/tasks.component';
import { SidebarComponent } from './main/header/components/sidebar/sidebar.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/components/footer/footer.component';
import { PessoasComponent } from './xhurrasco/components/pessoas/pessoas.component';
import { XhurrascoComponent } from './xhurrasco/xhurrasco.component';
import { LocalComponent } from './xhurrasco/components/local/local.component';
import { EstatisticaComponent } from './xhurrasco/components/estatistica/estatistica.component';
import { GeralComponent } from './xhurrasco/components/geral/geral.component';
import { EditarComponent } from './xhurrasco/components/pessoas/editar/editar.component';
import { CadastrarComponent } from './xhurrasco/components/pessoas/cadastrar/cadastrar.component';
import { ComidasComponent } from './comidas/comidas.component';

//Factory de configs do primeng (Todas as configurações dele
//podem ser alteradas aqui!
const initializeAppFactory = (primeConfig: PrimeNGConfig) => () => {
  primeConfig.inputStyle = 'filled',
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
    EditarComponent,
    CadastrarComponent,
    ComidasComponent,
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TaskComponent,
    SidebarComponent,
    RouterLink,
    RouterOutlet,
    RouterModule,
    BreadcrumbModule,
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
