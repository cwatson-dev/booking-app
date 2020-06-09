import { getDistanceFromLatLongInKm } from './maths';

interface IncomingObjectWithCoords {
  latitude: number
  longitude: number
  distance?: number | 0
  [rest: string]: string | number | undefined
}

interface OutgoingObjectWithCoords extends IncomingObjectWithCoords {
  distance: number
}

export const sortArrayByLatLongNearest = (array: IncomingObjectWithCoords[], coords: [number, number]): any => {
  const _array: any = array.map((element) => {
    // write calculated distance to each element during sort
    // note: obviously mutating objects of an array during a sort is extremely bad practice
    // there should probably be some other func that calcs the distance of each element
    // then this sort func should _only_ sort on the provided distance props, but this works
    // (as long as the user is somehow expecting the array elements to be mutated) and avoids two mappings/loops
    element.distance = getDistanceFromLatLongInKm(coords[0], coords[1], element.latitude, element.longitude);
    return element;
  });
  return _array.sort((a: OutgoingObjectWithCoords, b: OutgoingObjectWithCoords) => a.distance - b.distance);
};
