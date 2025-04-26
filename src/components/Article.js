import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  
  function displayReadingTime(minutes) {
    if (minutes < 30) {
      const coffeeCups = "☕️".repeat(Math.ceil(minutes / 5));
      return `${coffeeCups} ${minutes} min read`;
    } else {
      const bentoBoxes = "🍱".repeat(Math.ceil(minutes / 10));
      return `${bentoBoxes} ${minutes} min read`;
    }
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small> <small>{displayReadingTime(minutes)}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
