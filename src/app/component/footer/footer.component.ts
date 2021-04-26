import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentYear = new Date().getFullYear();

  subscribeForm: FormGroup = this.fb.group({
    emailid: new FormControl('', Validators.required),
  });

  constructor(private fb: FormBuilder, public router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.subscribeForm.value);
  }

  onClick(pathStr: string) {
    console.log('dddd');
    this.router.navigate([pathStr]);
  }

}
