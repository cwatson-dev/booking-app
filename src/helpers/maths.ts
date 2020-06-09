// https://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates
// essentially JS version of the Haversine formula, for distance (as the crow flies) between two lat long
export const getDistanceFromLatLongInKm = (lat1: number, long1: number, lat2: number, long2: number) => {
  const R = 6371; // Radius of the earth in km, see "Volumetric mean radius (km)" from https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html
  const dLat = deg2rad(lat2-lat1); // deg2rad below
  const dLon = deg2rad(long2-long1);
  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const d = R * c; // Distance in km
  return d;
};

export const deg2rad = (deg: number) => {
  return deg * (Math.PI/180);
};
