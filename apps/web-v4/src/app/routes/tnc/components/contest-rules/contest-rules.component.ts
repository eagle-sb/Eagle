/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3"*/
import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../../../../services/routing.service';

@Component({
  selector: 'app-contest-rules',
  templateUrl: './contest-rules.component.html',
  styleUrls: ['./contest-rules.component.scss']
})
export class ContestRulesComponent implements OnInit {
  constructor(public routingSvc: RoutingService) {}

  ngOnInit() {}
}
