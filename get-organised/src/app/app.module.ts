import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ThemeComponent } from './theme/theme.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    NotesComponent,
    ThemeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatGridListModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'app-calendar', component: CalendarComponent },
      { path: 'app-notes', component: NotesComponent },
      { path: 'app-theme', component: ThemeComponent },
      { path: '', redirectTo: '/app-theme', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
