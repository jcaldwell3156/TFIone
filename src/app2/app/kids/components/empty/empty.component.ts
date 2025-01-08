import { Component } from '@angular/core';
import { ErrorMessageComponent } from '../../../_common/error-message/error-message.component';

@Component({
  selector: 'tfi-empty',
  standalone: true,
  imports: [ErrorMessageComponent],
  templateUrl: './empty.component.html',
  styleUrl: './empty.component.scss'
})
export class EmptyComponent {

}
