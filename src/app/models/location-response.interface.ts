import { Info } from "./info.interface";
import { Location } from "./location.model";

export interface LocationResponse{    
    info: Info;
    results: Location[];
}