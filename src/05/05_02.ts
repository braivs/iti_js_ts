import {GovernmentBuildingsType, HouseType} from '../02-objects/02_02';

export const getStreetsTitlesOfGomernmentsBuildings =
  (buildings: Array<GovernmentBuildingsType>) => {
  return buildings.map( b => b.address.street.title)
}

export const getStreetsTitlesOfHouses =
  (houses: Array<HouseType>) => {
  return houses.map( b => b.address.street.title)
}

export function createMessages
  (houses: Array<HouseType>) {
  return houses.map(
    h => `Hello guys from ${h.address.street.title}`
  )
}