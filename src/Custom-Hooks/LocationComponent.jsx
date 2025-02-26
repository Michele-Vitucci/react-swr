
import { useCurrentLocation } from "./useCurrentLocation";

export function LocationComponent() {
  const { location, loading, error, getLocation } = useCurrentLocation();

  return (
    <div>
      <h2>Current Location</h2>
      <button onClick={getLocation}>Get Location</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {location && (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}
    </div>
  );
}
