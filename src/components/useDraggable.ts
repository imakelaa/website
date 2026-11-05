import { useRef, useState } from "react";

type Point = { x: number; y: number };

interface DragState {
  start: Point;  // pointer position when the drag began
  origin: Point; // element offset when the drag began
  min: Point;    // smallest allowed offset (keeps element inside bounds)
  max: Point;    // largest allowed offset
}

const clamp = (v: number, lo: number, hi: number) => Math.min(Math.max(v, lo), hi);

// Only drag with a mouse/trackpad; on touch screens the page should just scroll
const canDrag = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches;

// Lets an element be dragged around with mouse/touch/pen, kept inside `boundsRef`.
// The element keeps its normal CSS position; we only add a translate() offset on top.
export function useDraggable(boundsRef: React.RefObject<HTMLElement | null>, onGrab?: () => void) {
  const [offset, setOffset] = useState<Point>({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const drag = useRef<DragState | null>(null);

  const onPointerDown = (e: React.PointerEvent<HTMLElement>) => {
    if (e.button !== 0 || !boundsRef.current || !canDrag()) return;
    const bounds = boundsRef.current.getBoundingClientRect();
    const rect = e.currentTarget.getBoundingClientRect();

    drag.current = {
      start: { x: e.clientX, y: e.clientY },
      origin: offset,
      min: { x: offset.x + bounds.left - rect.left, y: offset.y + bounds.top - rect.top },
      max: { x: offset.x + bounds.right - rect.right, y: offset.y + bounds.bottom - rect.bottom },
    };
    // Keep receiving move events even if the pointer leaves the element
    e.currentTarget.setPointerCapture(e.pointerId);
    e.preventDefault();
    setDragging(true);
    onGrab?.();
  };

  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const d = drag.current;
    if (!d) return;
    setOffset({
      x: clamp(d.origin.x + e.clientX - d.start.x, d.min.x, d.max.x),
      y: clamp(d.origin.y + e.clientY - d.start.y, d.min.y, d.max.y),
    });
  };

  const endDrag = () => {
    drag.current = null;
    setDragging(false);
  };

  return {
    offset,
    dragging,
    handlers: { onPointerDown, onPointerMove, onPointerUp: endDrag, onPointerCancel: endDrag },
  };
}
