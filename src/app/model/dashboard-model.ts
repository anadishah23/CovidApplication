import { Statedata } from './statedata-model';
import { Timedata } from './timedata-model';
import {Tested} from './tested-model';

export class Dashboard{
    cases_time_series : Timedata[];
    statewise : Statedata[];
    tested : Tested[];

}