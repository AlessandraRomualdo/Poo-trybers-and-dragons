import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private static _archetypeInstances = 0;
  private _energy: EnergyType = 'stamina';

  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances(): number {
    Warrior._archetypeInstances += 1;
    return Warrior._archetypeInstances;
  }
}

export default Warrior;