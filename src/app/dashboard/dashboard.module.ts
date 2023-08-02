import { ClassModule } from './pages/class/class.module';
import { ClassTableComponent } from './pages/class/components/class-table/class-table.component';
import { CommonModule } from '@angular/common';
import { CoursesModule } from './pages/courses/courses.module';
import { DashboardComponent } from './dashboard.component';
import { HomeModule } from './pages/home/home.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { UsersModule } from './pages/users/users.module';

@NgModule({
  declarations: [
    DashboardComponent,
    NavMenuComponent,
    ToolbarComponent,

  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    HomeModule,
    UsersModule,
    MatListModule,
    RouterModule,
    ClassModule,
    CoursesModule,


  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
