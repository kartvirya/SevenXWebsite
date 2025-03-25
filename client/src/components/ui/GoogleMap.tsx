import { useEffect, useRef, useState } from 'react';
import { MAP_COORDINATES } from '@/lib/constants';
import { MapPin } from 'lucide-react';

interface GoogleMapProps {
  height?: string;
}

export default function GoogleMap({ height = "h-64" }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);
  
  useEffect(() => {
    // Instead of using Google Maps which requires an API key,
    // we'll display a static map representation for now
    setMapLoaded(true);
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className={`rounded-lg overflow-hidden ${height} bg-gray-800 w-full border border-gray-700`} ref={mapRef}>
      <div className="w-full h-full flex items-center justify-center p-4 relative">
        {mapLoaded ? (
          <div className="w-full h-full flex flex-col items-center justify-center text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-80"></div>
            <div className="z-10 flex flex-col items-center">
              <MapPin size={40} className="text-primary mb-3" />
              <h3 className="text-white font-medium text-lg mb-2">7xSolution</h3>
              <p className="text-gray-300 mb-1">Dallu, Kathmandu</p>
              <p className="text-gray-300 mb-1">Near SBI Bank</p>
              <div className="mt-4 px-4 py-2 bg-primary text-white rounded-md text-sm flex items-center justify-center">
                Get Directions
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <MapPin size={32} className="text-gray-500 mb-3 mx-auto" />
            <p className="text-gray-400">Loading Map...</p>
          </div>
        )}
      </div>
    </div>
  );
}
