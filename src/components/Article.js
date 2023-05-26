import React from "react";

function Article({ title, date, preview, minutes }) {
  const renderCoffeeCups = (count) => {
    return "☕️".repeat(count);
  };

  const renderBentoBoxes = (count) => {
    return "🍱".repeat(count);
  };

  const minutesToRead = minutes || 0;
  const coffeeCupsCount = Math.ceil(minutesToRead / 5);
  const bentoBoxesCount = Math.ceil(minutesToRead / 10);

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
      {minutesToRead < 30 ? (
        <p>
          {renderCoffeeCups(coffeeCupsCount)} {minutesToRead} min read
        </p>
      ) : (
        <p>
          {renderBentoBoxes(bentoBoxesCount)} {minutesToRead} min read
        </p>
      )}
    </article>
  );
}

export default Article;