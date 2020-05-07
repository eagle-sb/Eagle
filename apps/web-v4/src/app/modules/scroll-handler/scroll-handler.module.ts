/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3"*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollHandlerComponent } from './components/scroll-handler/scroll-handler.component';
import { SpinnerModule } from '../spinner/spinner.module';

// Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ScrollHandlerComponent],
  exports: [ScrollHandlerComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    SpinnerModule
  ]
})
export class ScrollHandlerModule { }
