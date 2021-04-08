import {CityType, GovernmentBuildingsType} from '../02-objects/02_02';

// нечистая функция
// Потому что получате город и его модифицирует. И ничего не ретурнит
export function demolishHousesOnTheStreet(city: CityType, street: string) {
  city.houses = city.houses.filter( h => h.address.street.title !== street)
}

// чистая
export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<GovernmentBuildingsType>, number: number) => {
  return buildings.filter(b => b.staffCount > number)
}