import { useState } from "react";

function useDragSelection() {
  const [isDragging, setIsDragging] = useState(false);

  const [selectedRange, setSelectedRange] =
    useState({
      start: null,
      end: null,
    });

  // Mouse down
  const handleMouseDown = (date) => {
    setIsDragging(true);

    setSelectedRange({
      start: date,
      end: date,
    });
  };

  // Mouse enter while dragging
  const handleMouseEnter = (date) => {
    if (!isDragging) return;

    setSelectedRange((prev) => ({
      ...prev,
      end: date,
    }));
  };

  // Mouse up
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return {
    selectedRange,
    handleMouseDown,
    handleMouseEnter,
    handleMouseUp,
  };
}

export default useDragSelection;