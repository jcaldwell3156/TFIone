import { Injectable } from '@angular/core';
import { IAgency } from '../../assets/models/IAgency';
import { IAgencyAssignRegion } from '../../assets/models/IAgencyAssignRegion';
import { IAgencyPersonOfNote } from '../../assets/models/IAgencyPersonOfNote';
import { IAgencyView } from '../../assets/models/IAgencyView';
import { ITFIAddress } from '../../assets/models/ITFIAddress';
import { IAgencyAddress } from '../../assets/models/IAgencyAddress';
import { IAgencyLinkThirdPartyService } from '../../assets/models/IAgencyLinkThirdPartyService';
import { IAgencyType } from '../../assets/models/IAgencyType';
import { IState } from '../../assets/models/IState';
import { IAgencyTableData } from '../../assets/models/IAgencyTableData';
import { state } from '@angular/animations';

@Injectable({ providedIn: 'root' })
export class AgencyDTO {
  agencyData: IAgency[] = [
    {
      ID: 1,
      AgencyName: 'A World for Children',
      AgencyTypeID: 3,
      StartDate: new Date('2024-10-24T05:00:00.000Z'),
      StateID: 2,
      TaxNumber: 'E-999999999',
      AgencyContact: '180024128679',
      PlacementContact: '21983549121',
    },
    {
      ID: 2,
      AgencyName: 'TFI Family Services',
      AgencyTypeID: 1,
      StartDate: new Date('2000-10-24T05:00:00.000Z'),
      StateID: 1,
      TaxNumber: 'E-1234567789',
      AgencyContact: '92037458665',
      PlacementContact: '1231451521',
    },
    {
      ID: 3,
      AgencyName: 'Texas Family Initiative',
      AgencyTypeID: 1,
      StartDate: new Date('2012-03-24T05:00:00.000Z'),
      StateID: 2,
      TaxNumber: 'E-1234567789',
      AgencyContact: '92037458665',
      PlacementContact: '1231451521',
    },
    {
      ID: 4,
      AgencyName: 'TFI Family Services - Nebraska',
      AgencyTypeID: 2,
      StartDate: new Date('2007-01-24T05:00:00.000Z'),
      StateID: 4,
      TaxNumber: 'E-1234567789',
      AgencyContact: '92037458665',
      PlacementContact: '1231451521',
    }
  ];

  adressData: ITFIAddress[] = [
    {
        ID: 1,
        City: 'Wichita Falls',
        County: 'Butler',
        State: 'Texas',
        Street1: '1234 Test, Ave',
        Street2: 'Apt 1200',
        ZipCode: '21442',
    },
    {
        ID: 2,
        City: 'Wichita',
        County: 'Sedgwick',
        State: 'Kansas',
        Street1: '1234 Test, Ave',
        Street2: 'Apt 1200',
        ZipCode: '623411',
    },
    {
      ID: 3,
      City: 'Nebraska City',
      County: 'Butler',
      State: 'Nebraska',
      Street1: '100 Arbor Dr',
      Street2: '',
      ZipCode: '68410'
    },
  ];

  agencyAddressData: IAgencyAddress[] = [
    {
        ID: 1,
        AgencyID: 1,
        LocationID: 1
    },
    {
        ID: 2,
        AgencyID: 2,
        LocationID: 2
    },
    {
      ID: 3,
      AgencyID: 3,
      LocationID: 1
    },
    {
      ID: 4,
      AgencyID: 4,
      LocationID: 3
    }
  ]

  agencyRegionTFIData: IAgencyAssignRegion[] = [
    {
      ID: 1,
      AgencyID: 2,
      RegionID: 5,
    },
    {
      ID: 2,
      AgencyID: 2,
      RegionID: 6,
    },
    {
      ID: 3,
      AgencyID: 2,
      RegionID: 7,
    },
    {
      ID: 4,
      AgencyID: 1,
      RegionID: 1,
    },
    {
      ID: 5,
      AgencyID: 1,
      RegionID: 2,
    },
    {
      ID: 6,
      AgencyID: 1,
      RegionID: 3,
    },
    {
      ID: 7,
      AgencyID: 3,
      RegionID: 1,
    },
    {
      ID: 8,
      AgencyID: 3,
      RegionID: 2,
    },
    {
      ID: 9,
      AgencyID: 3,
      RegionID: 3,
    },
  ];

  agencyTFIPeopleOfNote: IAgencyPersonOfNote[] = [
    {
      ID: 1,
      AgencyID: 1,
      AssignReason: 0,
      StaffID: 1,
    },
    {
      ID: 2,
      AgencyID: 1,
      AssignReason: 0,
      StaffID: 2,
    },
    {
      ID: 3,
      AgencyID: 1,
      AssignReason: 0,
      StaffID: 3,
    },
    {
      ID: 4,
      AgencyID: 2,
      AssignReason: 0,
      StaffID: 1,
    },
    {
      ID: 5,
      AgencyID: 2,
      AssignReason: 0,
      StaffID: 4,
    },
    {
      ID: 6,
      AgencyID: 2,
      AssignReason: 0,
      StaffID: 5,
    },
  ];

  agencyThirdPartyData: IAgencyLinkThirdPartyService[] = [
    {
        ID: 1,
        AgencyID: 1,
        TexasRIDControl: '12345678',
        EcapAgencyIDControl: '12345678',
        TexasVIDControl: '12345678'
    },
    {
      ID: 2,
      AgencyID: 3,
      TexasRIDControl: '9999999',
      EcapAgencyIDControl: '9999999',
      TexasVIDControl: '99999999'
    }
  ]

  //Supplemantary Data

  agencyTypes: IAgencyType[] = [
    { ID: 1, Description: 'State Contractor' },
    { ID: 2, Description: 'Agency Sub Contractor' },
    { ID: 3, Description: 'Residential/Hospitalization' },
    { ID: 4, Description: 'Detention' },
    { ID: 5, Description: 'CPA' },
    { ID: 6, Description: 'SIL' },
    { ID: 7, Description: 'RTC' },
    { ID: 8, Description: 'GRO' },
  ];

  states: IState[] = [
    { ID: 1, Description: 'Kansas' },
    { ID: 2, Description: 'Texas' },
    { ID: 3, Description: 'Oklahoma' },
    { ID: 4, Description: 'Nebraska' },
  ];

  FindAllAgencyDataByID(agencyID: number): IAgencyView | null {
    const agencyToCheck: IAgency | undefined = this.agencyData.find(agency => agency.ID === agencyID);
    const agencyAddressToCheck: IAgencyAddress | undefined = this.agencyAddressData.find(agencyAddress => agencyAddress.AgencyID === agencyID);
    const addressToCheck: ITFIAddress | undefined = this.adressData.find(address => address.ID === agencyAddressToCheck?.LocationID);
    const thirdPartyToCheck: IAgencyLinkThirdPartyService | undefined = this.agencyThirdPartyData.find(thirdParty => thirdParty.AgencyID === agencyID);
    let agencyViewToReturn: IAgencyView;
    if (agencyToCheck != undefined && addressToCheck != undefined) 
    {
      agencyViewToReturn = {
        Agency: agencyToCheck,
        AgencyPeopleOfNote: this.agencyTFIPeopleOfNote.filter(agencyP => agencyP.AgencyID === agencyID),
        AgencyRegion: this.agencyRegionTFIData.filter(regions => regions.AgencyID === agencyID),
        AgencyAddress: addressToCheck
    };
    } else {
      return null;
    }
    if (thirdPartyToCheck != undefined) {
        agencyViewToReturn.AgencyThirdPartyLink = thirdPartyToCheck;
    }
    return agencyViewToReturn;
  }

  FetchAgencyTableData() : IAgencyTableData[] {
    const agencyTableData: IAgencyTableData[] = [];
    this.agencyData.forEach(agency => {
      let stateToPush : IState | undefined = this.states.find(state => state.ID === agency.StateID);
      let agencyTypeToPush: IAgencyType | undefined = this.agencyTypes.find(agencyType => agencyType.ID === agency.AgencyTypeID);
      let tableDataToPush : IAgencyTableData = {
        AgencyID: agency.ID ? agency.ID : 0,
        AgencyName: agency.AgencyName ? agency.AgencyName : '',
        AgencyType: agencyTypeToPush?.Description ? agencyTypeToPush.Description : '',
        AgencyDetail: agency,
        State: stateToPush?.Description ? stateToPush.Description : '',
      };
      agencyTableData.push(tableDataToPush);
    })
    return agencyTableData;
  }
}
