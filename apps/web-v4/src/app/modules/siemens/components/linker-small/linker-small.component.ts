/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3"*/
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ws-linker-small',
  templateUrl: './linker-small.component.html',
  styleUrls: ['./linker-small.component.scss']
})
export class LinkerSmallComponent implements OnInit {
  @Input() data;
  constructor() {}

  ngOnInit() {}
  OnClickFunction() {
    const ResultElement = document.getElementById(this.data.widget.data.id);
    if (ResultElement) {
      ResultElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}
