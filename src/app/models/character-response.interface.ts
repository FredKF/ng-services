import {Character} from "./character.model";

interface Info {
    count: number;
    pages: number;
    next: string;
    prev?: any;
}

export interface CharacterResponse {
    info: Info;
    results: Character[];
}
