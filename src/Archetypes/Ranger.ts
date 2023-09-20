import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private static _archetypeInstances = 0;
  private _energy: EnergyType = 'stamina';
  
  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances(): number {
    Ranger._archetypeInstances += 1;
    return Ranger._archetypeInstances;
  }
}

export default Ranger;