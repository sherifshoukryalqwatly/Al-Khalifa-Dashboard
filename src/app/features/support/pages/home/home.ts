import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule,TranslateModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class SupportHome  {
  quickContacts = [
  {
    key: 'email',
    icon: 'bi-envelope',
    color: 'text-primary',
    titleKey: 'SUPPORT.CONTACT.EMAIL.TITLE',
    valueKey: 'SUPPORT.CONTACT.EMAIL.VALUE'
  },
  {
    key: 'phone',
    icon: 'bi-telephone',
    color: 'text-success',
    titleKey: 'SUPPORT.CONTACT.PHONE.TITLE',
    valueKey: 'SUPPORT.CONTACT.PHONE.VALUE'
  },
  {
    key: 'docs',
    icon: 'bi-book',
    color: 'text-warning',
    titleKey: 'SUPPORT.CONTACT.DOCS.TITLE',
    valueKey: 'SUPPORT.CONTACT.DOCS.VALUE'
  }
];

faqs = [
  {
    key: 'reset',
    qKey: 'SUPPORT.FAQ.RESET.Q',
    aKey: 'SUPPORT.FAQ.RESET.A'
  },
  {
    key: 'contact',
    qKey: 'SUPPORT.FAQ.CONTACT.Q',
    aKey: 'SUPPORT.FAQ.CONTACT.A'
  },
  {
    key: 'hours',
    qKey: 'SUPPORT.FAQ.HOURS.Q',
    aKey: 'SUPPORT.FAQ.HOURS.A'
  }
];

supportHours = [
  { key: 'sun', textKey: 'SUPPORT.HOURS.SUN' },
  { key: 'fri', textKey: 'SUPPORT.HOURS.FRI' },
  { key: 'sat', textKey: 'SUPPORT.HOURS.SAT' }
];

}
