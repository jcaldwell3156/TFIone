import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DischargeService } from '../../data/discharge.service';
import { DischargeNotice } from '../../data/discharge-notice';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { ErrorMessageComponent } from '../../_common/error-message/error-message.component';

@Component({
  selector: 'app-notice-detail',
  standalone: true,
  imports: [CommonModule, MatRadioModule, MatButtonModule, ErrorMessageComponent],
  templateUrl: './notice-detail.component.html',
  styleUrl: './notice-detail.component.scss'
})

export class NoticeDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  dischargeService = inject(DischargeService);
  discharge: DischargeNotice | undefined;

  constructor() {
    const dischargeNoticeID = parseInt(this.route.snapshot.params['id'], 10);
    this.discharge = this.dischargeService.getDischargeById(dischargeNoticeID);
  }
}
