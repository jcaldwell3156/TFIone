import { Component } from '@angular/core';
import { ErrorMessageComponent } from '../_common/error-message/error-message.component';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [ErrorMessageComponent],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {
  
}
