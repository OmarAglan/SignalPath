import React from 'react';
import { Group, Rect, Line } from 'react-konva';
import type { KonvaEventObject } from 'konva/lib/Node';
import { useSchematicStore } from '../../store/schematicStore';

interface ResistorSymbolProps {
  id: string;
  x: number;
  y: number;
  rotation: number;
}

const ResistorSymbol: React.FC<ResistorSymbolProps> = ({ id, x, y, rotation }) => {
  const selectComponent = useSchematicStore((state) => state.selectComponent);

  const handleClick = (e: KonvaEventObject<MouseEvent>) => {
    e.cancelBubble = true; // Prevent event propagation to canvas
    selectComponent(id);
  };

  return (
    <Group
      x={x}
      y={y}
      rotation={rotation}
      onClick={handleClick}
      onTap={handleClick}
    >
      {/* Left connection line */}
      <Line
        points={[-20, 0, -10, 0]}
        stroke="#000000"
        strokeWidth={2}
      />
      
      {/* Resistor body (rectangle) */}
      <Rect
        x={-10}
        y={-5}
        width={20}
        height={10}
        stroke="#000000"
        strokeWidth={2}
        fill="none"
      />
      
      {/* Right connection line */}
      <Line
        points={[10, 0, 20, 0]}
        stroke="#000000"
        strokeWidth={2}
      />
    </Group>
  );
};

export default ResistorSymbol;