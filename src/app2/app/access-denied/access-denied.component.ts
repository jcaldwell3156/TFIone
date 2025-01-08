import { Component } from '@angular/core';
import { ErrorMessageComponent } from '../_common/error-message/error-message.component';

@Component({
  selector: 'app-access-denied',
  standalone: true,
  imports: [ErrorMessageComponent],
  templateUrl: './access-denied.component.html',
  styleUrl: './access-denied.component.scss'
})
export class AccessDeniedComponent {

}
