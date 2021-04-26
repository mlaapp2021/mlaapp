import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog/modal-dialog.component';

export interface DialogData {
  currentTime: Date;
  name: string;
  provinceName: string;
  issueDescription: string;
  submittedConfirmation: string;
}

@Component({
  selector: 'app-modal-controller',
  templateUrl: './modal-controller.component.html',
  styleUrls: ['./modal-controller.component.css'],
})
export class ModalControllerComponent implements OnInit {
  currentTime = new Date();
  name: string;
  provinceName: string;
  issueDescription: string;
  submittedConfirmation: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalDialogComponent, {
      width: '500px',
      data: {
        currentTime: this.currentTime,
        name: this.name,
        provinceName: this.provinceName,
        issueDescription: this.issueDescription,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.submittedConfirmation = 'issue is submitted';
    });
  }

  ngOnInit(): void {}
}
