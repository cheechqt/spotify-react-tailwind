import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import useClickAway from "../../../hooks/useClickAway/useClickAway";
import usePosition from "../../../hooks/usePopover/usePopoverPosition";
import BaseButton from "../BaseButton";
import BasePopoverTriangle from "./BasePopoverTriangle";

function BasePopover(_, ref) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const nodeRef = useRef();
  const { move, target, setTarget, isSmallScreen } = usePosition(nodeRef, hide);
  const [classes, setClasses] = useState(getHiddenClasses);

  useClickAway(nodeRef, hide, shoudHide);

  function shoudHide(e) {
    return !target?.parentNode.contains(e.target);
  }
  useImperativeHandle(ref, () => ({ show }));

  function show(title, description, nextTarget, offset) {
    if (target === nextTarget) return;

    move(nextTarget, offset);
    setTitle(title);
    setDescription(description);
    setClasses("");
  }

  function hide() {
    setTarget(null);
    setClasses(getHiddenClasses);
  }

  function getHiddenClasses() {
    const translateClass = isSmallScreen ? "translate-y-1" : "translate-x-1";

    return `opacity-0 ${translateClass} pointer-events-none`;
  }

  return (
    <div
      className={`fixed z-30 bg-[#0e72ea] text-white tracking-wide rounded-lg shadow-3xl p-4 w-[330px] select-none transition duration-3000 ${classes}`}
      ref={nodeRef}
    >
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-xs">{description}</p>
      <div className="mt-6 text-right">
        <BaseButton onClick={hide}>Not now</BaseButton>
        <BaseButton primary path="/login">Log in</BaseButton>
      </div>
      <BasePopoverTriangle side={isSmallScreen ? "top" : "left"} />
    </div>
  );
}

export default forwardRef(BasePopover);
