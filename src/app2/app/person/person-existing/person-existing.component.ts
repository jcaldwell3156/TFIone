import { AfterViewInit, Component, inject, output, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IPersonMain } from '../../../assets/models/person/IPersonMain';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { PersonService } from '../../../assets/services/person.service';
import { ErrorMessageComponent } from '../../_common/error-message/error-message.component';
import { SpinnerComponent } from '../../_common/spinner/spinner.component';
import { MatIconModule } from '@angular/material/icon';
import { PersonDTO } from '../../data/person-dto';

@Component({
  selector: 'tfi-person-existing',
  standalone: true,
  imports: [MatTableModule, MatSortModule, CommonModule, ErrorMessageComponent, SpinnerComponent, MatIconModule],
  providers: [PersonService, PersonDTO],
  templateUrl: './person-existing.component.html',
  styleUrl: './person-existing.component.scss'
})
export class PersonExistingComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.dataSource.data = this.personDTO.listofPeople;
    this.dataSource.sort = this.sort;
  }

  private personService: PersonService = inject(PersonService);

  private personDTO: PersonDTO = inject(PersonDTO);

  closeTable = output<boolean>();

  sendPerson = output<IPersonMain>();
  

  CloseTable(): void {
    this.closeTable.emit(false);
  }

  isLoading: boolean = false;

  mockedData: IPersonMain[] = [
    {
      ID: 1,
      FirstName: 'John',
      MiddleName: 'B.',
      LastName: 'Doe',
      GenderID: 1,
      DateOfBirth: new Date('02/11/1981'),
      Notes: 'Lorem ipsum odor amet, consectetuer adipiscing elit.'
    },
    {
      ID: 2,
      FirstName: 'Jane',
      MiddleName: 'B.',
      LastName: 'Doe',
      GenderID: 2,
      DateOfBirth: new Date('04/29/1991'),
      Notes: 'Ut netus elit varius semper orci'
    },
    {
      ID: 3,
      FirstName: 'Jimmy',
      MiddleName: 'D.',
      LastName: 'Mcgill',
      GenderID: 1,
      DateOfBirth: new Date('12/11/1791'),
      Notes: 'Non quisque porta class'
    },
  ];
  dataSource = new MatTableDataSource(this.mockedData);
  displayedColumns: string[] = ['FirstName', 'LastName', 'PreferredName', 'DateOfBirth', 'Notes'];
  @ViewChild(MatSort)
  sort!: MatSort;

  selectedRow!: IPersonMain;
  onRowClick(row: IPersonMain) {
    this.selectedRow = row;
    this.sendPerson.emit(this.selectedRow);
    console.log(row);
  }

  FetchExistingPeople(personToSearch: IPersonMain): void {
    //this.personService.GetExistingPeople(personToSearch).subscribe();
    // this.dataSource.data = [];
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
    
  }

}
