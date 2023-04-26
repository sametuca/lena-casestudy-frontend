import { Component } from '@angular/core';
import { FormService } from '../auth/form-service';
import { LoginViewModel } from '../models/LoginViewModel';
import { Form } from '../interfaces/Form';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  forms: Form[] | undefined;

  constructor(private formService: FormService) { }

  ngOnInit() {
    this.getForms();
  }

  getForms(): void {
    this.formService.getAllForm()
      .subscribe(forms => this.forms = forms);
  }
}
