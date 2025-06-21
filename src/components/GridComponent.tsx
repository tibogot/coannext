"use client"; // Add this for Next.js 13+ app directory

import { useEffect, useState, useRef, useCallback, useMemo } from "react";

// Define proper TypeScript interfaces
interface Position {
  x: number;
  y: number;
}

interface Dimensions {
  width: number;
  height: number;
}

interface Symbol {
  left: number;
  top: number;
  x: number;
  y: number;
}

interface Config {
  bgColor: string;
  symbolColor: string;
  gridSpacing: number;
  symbolSize: number;
  symbolCornerRadius: number;
  symbolRotation: number;
  mouseRadius: number;
  scaleAmount: number;
  animationSpeed: number;
  filterBlur: number;
  filterContrast: number;
  isFilterEnabled: boolean;
}

const GridComponent: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });
  const [mousePos, setMousePos] = useState<Position>({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  // Fixed configuration values
  const config: Config = {
    bgColor: "transparent",
    symbolColor: "#FF8000",
    gridSpacing: 40,
    symbolSize: 5,
    symbolCornerRadius: 50,
    symbolRotation: 0,
    mouseRadius: 200,
    scaleAmount: 8,
    animationSpeed: 300,
    filterBlur: 0,
    filterContrast: 1,
    isFilterEnabled: false,
  };

  // Calculate distance between two points
  const getDistance = useCallback(
    (x1: number, y1: number, x2: number, y2: number): number => {
      const dx = x1 - x2;
      const dy = y1 - y2;
      return Math.sqrt(dx * dx + dy * dy) || 1;
    },
    []
  );

  // Handle mouse movement - now properly typed
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!gridRef.current) return;

    const rect = gridRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  // Update dimensions on resize
  const updateDimensions = useCallback(() => {
    if (!gridRef.current) return;
    setDimensions({
      width: gridRef.current.clientWidth,
      height: gridRef.current.clientHeight,
    });
  }, []);

  // Handle client-side hydration for Next.js
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Setup event listeners
  useEffect(() => {
    if (!isClient) return;

    updateDimensions();

    const handleResize = () => {
      updateDimensions();
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove, updateDimensions, isClient]);

  // Generate grid symbols
  const symbols = useMemo((): Symbol[] => {
    if (dimensions.width === 0 || dimensions.height === 0) return [];

    const { gridSpacing } = config;
    const gridWidth = Math.max(2, Math.floor(dimensions.width / gridSpacing));
    const gridHeight = Math.max(2, Math.floor(dimensions.height / gridSpacing));

    const horizontalSpacing = dimensions.width / gridWidth;
    const verticalSpacing = dimensions.height / gridHeight;

    const result: Symbol[] = [];

    for (let i = 0; i < gridWidth; i++) {
      for (let j = 0; j < gridHeight; j++) {
        const left = horizontalSpacing / 2 + i * horizontalSpacing;
        const top = verticalSpacing / 2 + j * verticalSpacing;

        result.push({ left, top, x: left, y: top });
      }
    }

    return result;
  }, [dimensions, config.gridSpacing]);

  // Calculate scales for each symbol based on mouse position
  const symbolStyles = useMemo(() => {
    const {
      mouseRadius,
      scaleAmount,
      symbolSize,
      symbolCornerRadius,
      symbolRotation,
      symbolColor,
    } = config;

    return symbols.map((symbol) => {
      const distance = getDistance(mousePos.x, mousePos.y, symbol.x, symbol.y);
      const isClose = distance <= mouseRadius;
      const scale = isClose
        ? scaleAmount - (distance / mouseRadius) * (scaleAmount - 1)
        : 1;

      return {
        left: `${symbol.left}px`,
        top: `${symbol.top}px`,
        width: `${symbolSize}px`,
        height: `${symbolSize}px`,
        borderRadius: `${symbolCornerRadius}%`,
        backgroundColor: symbolColor,
        transform: `scale(${scale}) rotate(${symbolRotation}deg)`,
        marginLeft: `-${symbolSize / 2}px`,
        marginTop: `-${symbolSize / 2}px`,
        transitionDuration: `${config.animationSpeed}ms`,
      };
    });
  }, [symbols, mousePos, config, getDistance]);

  const containerStyle: React.CSSProperties = {
    backgroundColor: config.bgColor,
    filter: config.isFilterEnabled
      ? `blur(${config.filterBlur}px) contrast(${config.filterContrast})`
      : "none",
  };

  // Don't render anything until client-side hydration is complete
  if (!isClient) {
    return (
      <div className="relative mt-10 flex h-[400px] w-full items-center justify-center overflow-hidden select-none md:mt-0 md:h-[600px] md:w-1/2">
        <div className="relative h-full w-full overflow-hidden" />
      </div>
    );
  }

  return (
    <div className="relative mt-10 flex h-[400px] w-full items-center justify-center overflow-hidden select-none md:mt-0 md:h-[600px] md:w-1/2">
      <div
        ref={gridRef}
        className="relative h-full w-full overflow-hidden"
        style={containerStyle}
      >
        {symbolStyles.map((style, index) => (
          <div
            key={index}
            className="grid-symbol absolute transition-all ease-out"
            style={style}
          />
        ))}
      </div>
    </div>
  );
};

export default GridComponent;
