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

        this.characters.push({ ...character, id: uuidV4() })

    }
    onDeleteCharacter(id: string): void {
        console.log(id);

        this.characters.splice(this.characters.findIndex(c => c.id === id), 1);
    }
}
