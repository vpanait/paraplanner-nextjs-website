"use client"
import useWindowPosition from "@/hooks/useWindowPosition";
import { useScroll } from "@react-spring/web";
import { useEffect, useState } from "react";

const MyComponent = () => {
  const { scrollY } = useScroll();

  // State to track if the page is scrolled from the top
  const [scrolledFromTop, setScrolledFromTop] = useState(false);
  const [value, setValue] = useState(0);


  useEffect(() => {
    // Check if the current scroll position is at the top of the page
    setValue(scrollY.get())
    if (scrollY.get() === 0) {
      setScrolledFromTop(true);
    } else {
      setScrolledFromTop(false);
    }
  }, [scrollY]);

  // Use the `scrolledFromTop` state to conditionally render content or apply styles

  return (
    <div>
      {scrolledFromTop ? (
        <p>Page is scrolled from the top: {value} - {scrollY.get()}</p>
      ) : (
        <p>Page is not scrolled from the top: {value} - {scrollY.get()}</p>
      )}
    </div>
  );
};

export default MyComponent;
