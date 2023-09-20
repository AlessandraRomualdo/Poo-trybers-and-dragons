import Fighter from './Fighter';

interface SimpleFighter extends Fighter {
  lifePoints: number
  strength: number

  attack(enemy: SimpleFighter): void
  receiveDamage(attackPoints: number): number
}

export default SimpleFighter;