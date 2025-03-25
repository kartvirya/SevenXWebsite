import { useEffect, useRef } from 'react';
import { MAP_COORDINATES } from '@/lib/constants';

interface GoogleMapProps {
  height?: string;
}

export default function GoogleMap({ height = "h-64" }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // If Google Maps script is not loaded, load it
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY'}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }
    
    function initMap() {
      if (!mapRef.current) return;
      
      // Create a map instance
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: MAP_COORDINATES.lat, lng: MAP_COORDINATES.lng },
        zoom: 15,
        styles: [
          { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
          { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
          { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#263c3f" }],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#6b9a76" }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#38414e" }],
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#212a37" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9ca5b3" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#746855" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#1f2835" }],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#f3d19c" }],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#2f3948" }],
          },
          {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#17263c" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#515c6d" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#17263c" }],
          },
        ],
      });
      
      // Add a marker
      const marker = new window.google.maps.Marker({
        position: { lat: MAP_COORDINATES.lat, lng: MAP_COORDINATES.lng },
        map: map,
        title: '7xSolution'
      });
    }
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className={`rounded-lg overflow-hidden ${height} bg-gray-700 w-full`} ref={mapRef}>
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <i className="fas fa-map-marked-alt text-4xl text-gray-500 mb-3"></i>
          <p className="text-gray-400">Loading Map...</p>
        </div>
      </div>
    </div>
  );
}
