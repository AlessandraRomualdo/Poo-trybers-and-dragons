import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private static _archetypeInstances = 0;
  private _energy: EnergyType = 'mana';

  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances(): number {
    Necromancer._archetypeInstances += 1;
    return Necromancer._archetypeInstances;
  }
}

export default Necromancer;