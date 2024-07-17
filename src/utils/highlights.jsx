// src/utils/highlight.js

export const highlightWords = (text, wordsToHighlight) => {
  if (!text || !wordsToHighlight || Object.keys(wordsToHighlight).length === 0) {
    return text;
  }

  // Split the text into an array of words
  const words = text.split(' ');

  // Map through the words and wrap the highlighted words with a span
  const highlightedText = words.map((word, index) => {
    const cleanedWord = word.replace(/[.,!?]/g, ''); // Remove punctuation for matching
    if (wordsToHighlight[cleanedWord]) {
      return (
        <span key={index} style={{ color: wordsToHighlight[cleanedWord] }}>
          {word}{' '}
        </span>
      );
    }
    return word + ' ';
  });

  return <>{highlightedText}</>;
};
