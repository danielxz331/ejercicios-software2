import { Component, computed, effect, inject, signal } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterList, CharacterAddComponent],
  templateUrl: './dragonball-super.html',
  styleUrl: './dragonball-super.css'
})
export class DragonballSuper {

  public dragonballService = inject(DragonballService);

}
