import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

function Arrow({ children, disabled, onClick }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        right: "1%",
        opacity: disabled ? "0" : "1",
        userSelect: "none",
      }}
    >
      {children}
    </button>
  );
}

export function LeftArrow() {
  const {
    isFirstItemVisible,
    scrollPrev,
    items,
    scrollToItem,
    getItemElementById,
  } = React.useContext(VisibilityContext);

  return (
    <Arrow
      disabled={false}
      onClick={() => {
        if (isFirstItemVisible) {
          scrollToItem(getItemElementById(items.toArr().slice(-1)?.[0]?.[0]));
        } else {
          scrollPrev();
        }
      }}
    >
      ◀︎
    </Arrow>
  );
}

export function RightArrow() {
  const {
    isLastItemVisible,
    scrollNext,
    items,
    scrollToItem,
    getItemElementById,
  } = React.useContext(VisibilityContext);

  return (
    <Arrow
      disabled={false}
      onClick={() => {
        if (isLastItemVisible) {
          scrollToItem(getItemElementById(items.toArr()?.[0]?.[0]));
        } else {
          scrollNext();
        }
      }}
    >
      ▶
    </Arrow>
  );
}
