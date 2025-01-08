export interface IAuthorizedSvc {
ID?:number,
ServiceType?: string;
ProcedureCode?: string;
UnitType?: string;
BeginDate?: Date;
EndDate?:Date;
SendToAllProviders?:Boolean;
Agency?:number;
}

export const ServiceTypeList =[
    {title:'Svc Type1',value:'Svc Type1'},
    {title:'Svc Type2',value:'Svc Type1'},
    {title:'Svc Type3',value:'Svc Type1'},
    {title:'Svc Type4',value:'Svc Type1'},
    {title:'Svc Type5',value:'Svc Type1'},
];

export const ProcedureCodeList =[
    {title:'Procedure Code 1',value:'ProcCode1'},
    {title:'Procedure Code 2',value:'ProcCode2'},
    {title:'Procedure Code 3',value:'ProcCode3'},
    {title:'Procedure Code 4',value:'ProcCode4'},
    {title:'Procedure Code 5',value:'ProcCode5'}, 
];
 

export const UnitTypeList =[
  {title:'Case Rate', value:'caserate'},
  {title:'Per Diem', value:'perdiem'},
  {title:'Per Hour', value:'perhour'},
  {title:'1/2 Hour', value:'halfhour'},
  {title:'Per Session', value:'persession'},
  {title:'Per Mile', value:'permile'}
];
