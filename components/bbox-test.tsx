"use client";
import React, { useEffect, useState, useRef } from 'react';
import World from '@svg-maps/world';
import India from '@svg-maps/india';

export function BBoxTest() {
  const wRef = useRef<SVGPathElement>(null);
  const iRef = useRef<SVGGElement>(null);
  const [res, setRes] = useState<string>("calculating...");

  useEffect(() => {
    if (wRef.current && iRef.current) {
      const wBox = wRef.current.getBBox();
      const iBox = iRef.current.getBBox();
      const scale = wBox.width / iBox.width;
      const tx = wBox.x - (iBox.x * scale);
      const ty = wBox.y - (iBox.y * scale);
      setRes(`scale: ${scale.toFixed(4)}, tx: ${tx.toFixed(2)}, ty: ${ty.toFixed(2)}, wbox: ${wBox.x.toFixed(2)} ${wBox.y.toFixed(2)} ${wBox.width.toFixed(2)} ${wBox.height.toFixed(2)}`);
    }
  }, []);

  return (
    <div style={{ padding: '2rem', background: '#000', color: '#0f0', position: 'fixed', top: 0, left: 0, zIndex: 9999 }}>
      {res}
      <svg viewBox="0 0 1010 666" style={{ width: 0, height: 0 }}>
        <path ref={wRef} d={World.locations.find((l: any) => l.id === "in")?.path} />
      </svg>
      <svg viewBox="0 0 668 763" style={{ width: 0, height: 0 }}>
        <g ref={iRef}>
          {India.locations.map((l: any) => <path key={l.id} d={l.path} />)}
        </g>
      </svg>
    </div>
  );
}
