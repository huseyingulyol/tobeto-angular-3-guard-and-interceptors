import { Component, HostListener } from '@angular/core';
import { CanComponentDeactivate } from '../../guards/form-guard.guard';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})

export class FormComponent implements CanComponentDeactivate {

  form!: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      email: ['']
    });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.form.dirty) {
      return confirm('Kaydedilmemiş değişiklikler var, sayfadan ayrılmak istediğine emin misin?');
    }
    return true;
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any): void {
    if (this.form.dirty) {
      $event.returnValue = true;
    }
  }

  OnSubmit() {
    console.log("Veri gönderildi!");
  }
}