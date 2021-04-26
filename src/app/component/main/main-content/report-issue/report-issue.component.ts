import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { PersistIssueDataService } from 'src/app/service/persist-issue-data.service';

@Component({
  selector: 'app-report-issue',
  templateUrl: './report-issue.component.html',
  styleUrls: ['./report-issue.component.css'],
})
export class ReportIssueComponent implements OnInit {
  reportIssueForm: FormGroup = this.fb.group({
    username: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    issueDescription: new FormControl('', Validators.required),
  });

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private persistDataService: PersistIssueDataService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    let issueData: any = this.reportIssueForm.value;
    if(this.persistDataService.saveData(issueData.username, issueData.location, issueData.issueDescription)) {
      this.openSnackBar('Issue reported.', 'close');
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
