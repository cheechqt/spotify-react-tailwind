import { useLayoutEffect } from "react";

const clickPosition = { x: null, y: null };

const usePosition = (ref, isOpen) => {
  useLayoutEffect(() => {
    if (isOpen) updatePosition();
  });

  const updatePosition = () => {
    updateHorizontalPosition();
    updateVerticalPosition();
  };

  const updateHorizontalPosition = () => {
    const MenuWidth = ref.current.offsetWidth;
    const shoudMoveLeft = MenuWidth > window.innerWidth - clickPosition.x;

    ref.current.style.left = `${
      shoudMoveLeft ? clickPosition.x - MenuWidth : clickPosition.x
    }px`;
  };

  const updateVerticalPosition = () => {
    const MenuHeight = ref.current.offsetHeight;
    const shoudMoveUp = MenuHeight > window.innerHeight - clickPosition.y;

    ref.current.style.top = `${
      shoudMoveUp ? clickPosition.y - MenuHeight : clickPosition.y
    }px`;
  };

  const updateClickCoordinates = (x, y) => {
    clickPosition.x = x;
    clickPosition.y = y;
  };

  return updateClickCoordinates;
};

export default usePosition;
