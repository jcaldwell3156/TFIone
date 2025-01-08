import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatOption, MatSelect } from '@angular/material/select';
import {MatFormFieldModule,} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddressHandlerService } from '../../assets/services/address-handler.service';
import {
  ITFIAddress,
  USStatesSelectList,
} from '../../assets/models/ITFIAddress';

@Component({
  selector: 'tfi-address',
  standalone: true,
  imports: [
    MatInputModule,
    CommonModule,
    MatSelect,
    MatOption,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss',
  providers: [],
})
export class AddressComponent {
  constructor(
    private addressHandler: AddressHandlerService,
    private formBuilder: FormBuilder
  ) {}
  usStatesSelectList = USStatesSelectList;
  address = this.formBuilder.nonNullable.group({
    ID: 0,
    Street1: ['', Validators.required],
    Street2: '',
    City: ['', Validators.required],
    State: ['', Validators.required],
    ZipCode: ['', [Validators.required, Validators.pattern('[0-9]{5}')]],
    County: '',
  });

  exisitngAddress!: ITFIAddress;

  get Street1() {
    return this.address.controls.Street1;
  }

  get Street2() {
    return this.address.controls.Street2;
  }

  get City() {
    return this.address.controls.City;
  }
  get Zip() {
    return this.address.controls.ZipCode;
  }
  get State() {
    return this.address.controls.State;
  }
  PreFillAddress(address: ITFIAddress) {
    this.Street1.setValue(address.Street1);
    this.Street2.setValue(address.Street2);
    this.City.setValue(address.City);
    this.Zip.setValue(address.ZipCode);
    this.State.setValue(address.State);
    this.exisitngAddress = address;
  }
  onSubmit() {
    this.addressHandler.saveAddress(this.address.getRawValue());
  }
}
