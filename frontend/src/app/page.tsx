"use client";

import { DisplayLocations } from "@/components/display-locations";

export default function App() {
  return (
    <div>
      <h2>
        My first Apollo app
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </h2>
      <br />
      <DisplayLocations />
    </div>
  );
}
