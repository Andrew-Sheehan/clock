import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ClockComponent } from './clock/clock.component';
import { Router } from '@angular/router/src/router';

const routes: Routes = [
  { path: '', redirectTo: '/clock', pathMatch: 'full' },
  { path: 'clock', component: ClockComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
