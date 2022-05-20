import React from 'react';

function useOutsideAlerter(ref, setState) {
  React.useEffect(() => {
    function outsideClickHandler(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setState(false);
      }
    }

    document.addEventListener('mousedown', outsideClickHandler);

    return () => {
      document.removeEventListener('mousedown', outsideClickHandler);
    };
  }, [ref]);
}

function OutsideAlerter({ setState, children }) {
  const wrapperRef = React.useRef(null);
  useOutsideAlerter(wrapperRef, setState);

  return <div ref={wrapperRef}>{children}</div>;
}

export { OutsideAlerter };
