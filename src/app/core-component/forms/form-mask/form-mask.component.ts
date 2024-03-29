import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-mask',
  templateUrl: './form-mask.component.html',
  styleUrls: ['./form-mask.component.scss']
})
export class FormMaskComponent implements OnInit {
  public routes = routes;

  public basicForm!: UntypedFormGroup;
  customPatterns = {
    V: { pattern: new RegExp("-?") },
    "0": { pattern: new RegExp("[0-9]") },
  };
  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.basicForm = this.formBuilder.group({
      txt: [""],
    });
  }
  basicFormSubmit() {
  }

}
