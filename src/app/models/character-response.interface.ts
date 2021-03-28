import {Character} from "./character.model";
import { Info } from "./info.interface";

export interface CharacterResponse {
    info: Info;
    results: Character[];
}
