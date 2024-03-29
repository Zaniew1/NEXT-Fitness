import React, { useState, useEffect } from "react";

export const Typewriter: React.FC<{ text: string; delay: number }> = (
  props
): JSX.Element => {
  const [currentText, setCurrentText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (currentIndex < props.text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + props.text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, props.delay);

      return () => clearTimeout(timeout);
    }

  }, [currentIndex, props.delay, props.text]);

  return <span>{currentText}</span>;
};
