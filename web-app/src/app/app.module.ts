import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicasComponent } from './musicas/musicas.component';
import { MusicaService } from './musicas/musicas.service';
import { IndexComponent } from './index/index.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ListaMusicasComponent } from './lista-musicas/lista-musicas.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MusicasComponent,
    AdminPageComponent,
    ListaMusicasComponent,
    RegistroUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'',
        component: IndexComponent
      },
      {
        path: 'cadastrar-musicas',
        component: MusicasComponent
      },
      {
        path: 'lista-musicas',
        component: ListaMusicasComponent
      },
      {
        path: "admin",
        component: AdminPageComponent
      },
      {
        path: "registro-usuario",
        component: RegistroUsuarioComponent
      }
    ])
  ],
  providers: [MusicaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
