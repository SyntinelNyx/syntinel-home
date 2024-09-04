"use client";
import React, { useEffect, useState, useCallback } from "react";

const characterList = "abcdefghijklmnopqrstuvwxyz!@#$%^&*_-+=:;<>";
const initialRandomDuration = 250;
const animationDuration = 50;
const revealDuration = 75;

const useAnimatedText = (text: string) => {
  const [animatedText, setAnimatedText] = useState("");

  const getRandomChar = useCallback(
    () => characterList[Math.floor(Math.random() * characterList.length)],
    []
  );

  const generateRandomText = useCallback(
    () =>
      text
        .split("")
        .map((char) => (char === " " ? " " : getRandomChar()))
        .join(""),
    [text, getRandomChar]
  );

  const animateText = useCallback(async () => {
    const endTime = Date.now() + initialRandomDuration;

    while (Date.now() < endTime) {
      setAnimatedText(generateRandomText());
      await new Promise((resolve) => setTimeout(resolve, animationDuration));
    }

    for (let i = 0; i < text.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, revealDuration));
      setAnimatedText(
        (prevText) =>
          text.slice(0, i + 1) +
          prevText
            .slice(i + 1)
            .split("")
            .map((char) =>
              text[prevText.indexOf(char)] === " " ? " " : getRandomChar()
            )
            .join("")
      );
    }
  }, [text, generateRandomText, getRandomChar]);

  useEffect(() => {
    animateText();
  }, [animateText]);

  return animatedText;
};

const AnimatedText = ({ text }: { text: string }) => {
  const animatedText = useAnimatedText(text);
  return <>{animatedText}</>;
};

export default AnimatedText;
