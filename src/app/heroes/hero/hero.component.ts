import { Component } from '@angular/core';

@Component({
    selector: 'app-heroes-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css']
})
export class HeroComponent {
    public name: string = "ironman";
    public age: number = 45;

    get capitalizedName() {
        return this.name.toUpperCase();
    }

    public getHeroDescription(): string {
        return `${this.name} - ${this.age}`
    }

    public changeName(name: string): void {
        this.name = name;
    }

    public changeAge(age: number): void {
        this.age = age;
    }

    public resetForm(): void {
        this.name = "ironman";
        this.age = 45;
    }
}
