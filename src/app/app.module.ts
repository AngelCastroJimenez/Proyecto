import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavPositionExampleComponent } from './sidenav-position-example/sidenav-position-example.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponenteDragDropComponent } from './componente-drag-drop/componente-drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '',redirectTo:'login', pathMatch:'full' },
  { path: 'login', component: AppComponent },
  { path: 'index', component: IndexComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ComponenteDragDropComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    DragDropModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
