import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { Router } from '@angular/router';
import { UpdateSelectedStateService } from 'src/app/service/update-selected-state.service';

import * as states from '../../../../../assets/json/states.json';
import * as unionTerritories from '../../../../../assets/json/union-territories.json';

@Component({
  selector: 'app-left-drawer',
  templateUrl: './left-drawer.component.html',
  styleUrls: ['./left-drawer.component.css'],
})
export class LeftDrawerComponent implements OnInit, AfterViewInit {
  statesandterritories: string[] = [];
  selectedState: string = '';

  constructor(private updateSelectedStateService: UpdateSelectedStateService, private router: Router) {
    this.statesandterritories = (states as any).default;
  }

  ngAfterViewInit(): void {
    this.updateSelectedStateService.getSelectedState().subscribe(subjectState => {
      this.selectedState = subjectState.selectedState;
      console.log("automatically select " + this.selectedState);
    });
  }

  onStateSelection(event: MatSelectionListChange) {
    this.selectedState = event.options[0].value;
    console.log("manually selected " + this.selectedState);
    this.updateSelectedStateService.setSelectedState(this.selectedState);
    this.router.navigate([this.selectedState]);
  }

  ngOnInit(): void {}
}
