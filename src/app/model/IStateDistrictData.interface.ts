// export interface IStateDistrict {
//    districtData : Map<string,IDistrictData[]>;
//    statecode : string;
// }

// export interface IDistrictData{
//     districtDetailData : Map<string , IDistrictDetailData>   
// }

// export interface IDistrictDetailData{
    
//     active : string;
//     confirmed : string ;
//     deceased : string;
//     recovered:string;

// }

export interface CovidDistrictReport {
    [keys: string]: CovidDistrictReportMetaData;
}
 
export interface CovidDistrictReportMetaData {
    districtData: Array<DistrictData>;
    statecode: string;
}
 
export interface DistrictData {
    [keys: string]: DistrictMetaData;
}
 
export class DistrictMetaData {
    notes: string;
    active: number;
    confirmed: number;
    deceased: number;
    recovered: number;
    delta: Delta;
}
 
export interface Delta {
    confirmed: number;
    deceased: number;
    recovered: number;
}