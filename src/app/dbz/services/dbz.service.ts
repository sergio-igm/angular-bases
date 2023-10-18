import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuidV4 } from "uuid";

@Injectable({ providedIn: 'root' })
export class DbzService {
    constructor() { }
    public characters: Character[] = [
        {
            id: uuidV4(),
            name: "Krillin",
            power: 2000
        },
        {
            id: uuidV4(),
            name: "Goku",
            power: 8001
        },
        {
            id: uuidV4(),
            name: "Vegeta",
            power: 16000
        }
    ];

    onNewCharacter(character: Character): void {
        const { name, power } = character;

        this.characters.push({ name, power, id: uuidV4() })

    }
    onDeleteCharacter(i: number): void {
        this.characters.splice(i, 1);
    }
}
