import React from "react";

export const Summary = ({ consumption, numberOfBooks, favouriteAuthor, onRestart}) => {
  return (
      <>
        <section tabIndex="0" className="summary">
            <p>Wow! You read {numberOfBooks} books each year!</p>
            <p>It's awesome to {consumption}.</p>
            <p>{favouriteAuthor} is a good choice.</p>
        </section>
        <section className="summary white">
            <button
                onClick={onRestart}>
                    Start again
            </button>
        </section>
      </>
  );
};
