import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  words: string[];
  delay?: number;
  infinite?: boolean;
  gradient?: boolean;
}

export function TypeWriter({ words, delay = 100, infinite = true, gradient = true }: TypeWriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('|'); // Start with the cursor
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < word.length + 1) {  // Add +1 to include the cursor
          setCurrentText(word.slice(0, currentText.length) + '|');  // Keep the cursor at the end
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting
        if (currentText.length > 1) {  // Don't delete the cursor
          setCurrentText(word.slice(0, currentText.length - 2) + '|');  // Keep the cursor at the end while deleting
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) =>
            infinite ? (prev + 1) % words.length : Math.min(prev + 1, words.length - 1)
          );
        }
      }
    }, isDeleting ? delay / 2 : delay);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, delay, infinite]);

  return (
    <span className={`relative font-semibold ${gradient ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent' : 'text-blue-600 dark:text-blue-400'}`}>
      <span className="whitespace-nowrap">{currentText}</span>
    </span>
  );
}