import { Component } from '@angular/core';

@Component({
    selector: 'app-heroes-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {
    public heroNames: string[] = ["Siderman", "Ironman", "Hulk", "Thor"]
    public deletedHero?: string;
    removeLastHero() {
        this.deletedHero = this.heroNames.pop();
    }
}
