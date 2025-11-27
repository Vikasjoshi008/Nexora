// src/components/LiquidEtherLite.jsx
import React, { useEffect, useState } from "react";
import "../styles/LiquidEther.css";

export default function LiquidEther({
  variant = "purple",      // "purple" | "blue" | "green"
  interactive = true,      // mouse parallax
  className = "",
  ...rest
}) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!interactive) return;

    const handleMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const xNorm = e.clientX / innerWidth - 0.5; // -0.5..0.5
      const yNorm = e.clientY / innerHeight - 0.5;
      setOffset({
        x: xNorm * 80, // you can lower to 50 if too strong
        y: yNorm * 80,
      });
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [interactive]);

  const variantClass =
    variant === "blue"
      ? "le-root--blue"
      : variant === "green"
      ? "le-root--green"
      : "le-root--purple";

  const style = interactive
    ? {
        "--le-offset-x": `${offset.x}px`,
        "--le-offset-y": `${offset.y}px`,
      }
    : undefined;

  return (
    <div
      className={`le-root ${variantClass} ${className}`}
      style={style}
      {...rest}
    >
      {/* main liquid layers */}
      <div className="le-layer le-layer-1" />
      <div className="le-layer le-layer-2" />
      <div className="le-layer le-layer-3" />
      {/* central caustic streak */}
      <div className="le-core" />
      {/* dark vignette over everything */}
      <div className="le-vignette" />
    </div>
  );
}
