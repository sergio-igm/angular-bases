import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {
    @Input()
    public characterList: Character[] = [
        {
            name: "Trunk",
            power: 200_000
        }
    ];
    @Output()
    public onDelete: EventEmitter<number>=new EventEmitter();

    onDeleteCharacter(i: number): void {
        this.onDelete.emit(i);
        // this.characterList.splice(i, 1);
    }
}
