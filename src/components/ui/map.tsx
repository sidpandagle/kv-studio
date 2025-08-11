"use client";

import * as React from 'react';

interface MapProps {
  /** Latitude */
  lat: number;
  /** Longitude */
  lng: number;
  /** Zoom level */
  zoom?: number;
  /** Accessible title / label */
  title?: string;
  /** ClassName for wrapper */
  className?: string;
  /** Height override */
  height?: number | string;
  /** Rounded corners */
  rounded?: boolean;
}

/**
 * Google Maps lightweight embed (no JS SDK) using the public embed endpoint.
 * If you have a specific place ID or query, pass it via the `query` prop.
 * Falls back to lat/lng center + marker if no query provided.
 */
export function Map({ lat, lng, zoom = 14, title = 'Map', className = '', height = 320, rounded = true, query, placeId }: MapProps & { query?: string; placeId?: string }) {
  /**
   * IMPORTANT: Keep the iframe src deterministic (no Date.now / Math.random) to avoid hydration mismatch.
   * Strategy:
   *  - If placeId provided & API key present -> use place embed (stable URL)
   *  - Else if query provided -> use query search embed (stable URL)
   *  - Else fallback to lat/lng query embed (stable URL)
   */
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY; // inlined at build time if defined

  const src = React.useMemo(() => {
    if (placeId && apiKey) {
      // Place embed requires key
      return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=place_id:${encodeURIComponent(placeId)}`;
    }
    if (query && apiKey) {
      return `https://www.google.com/maps/embed/v1/search?key=${apiKey}&q=${encodeURIComponent(query)}`;
    }
    if (query) {
      // Fallback without key – generic embed via maps.google.com
      return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
    }
    // Coordinate fallback (no key needed)
    return `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
  }, [apiKey, placeId, query, lat, lng, zoom]);

  return (
    <div className={className} style={{ height }} aria-label={title}>
      <iframe
        title={title}
        src={src}
        className={`w-full h-full border-0 ${rounded ? 'rounded-lg' : ''}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <p className="mt-2 text-xs text-muted-foreground">View larger map on <a className="underline" href={`https://maps.google.com/?q=${lat},${lng}`} target="_blank" rel="noopener noreferrer">Google Maps</a>.</p>
    </div>
  );
}
