import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
  const data = localStorage.getItem('dragonball-characters');
  return data ? JSON.parse(data) : [];
};


@Injectable({
  providedIn: 'root'
})
export class DragonballService {

    characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage:any = effect(() => {
    //console.log(`Character count ${this.characters().length}, saving to localStorage`);
    localStorage.setItem('dragonball-characters', JSON.stringify(this.characters()));
  });

  onCharacterAdded(newCharacter: Character): void {
    this.characters.update((list) => [...list, newCharacter]);
  }
}
