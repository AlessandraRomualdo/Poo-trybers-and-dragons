import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static _archetypeInstances = 0;
  private _energy: EnergyType = 'mana';

  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances(): number {
    Mage._archetypeInstances += 1;
    return Mage._archetypeInstances;
  }
}

export default Mage;