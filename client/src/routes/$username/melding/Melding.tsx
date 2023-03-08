import { FormEvent } from "react";
import "./Melding.style.scss";
const Melding = () => {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="user-chat">
      <section className="user-chat__history">
        <article>
          <p>
            Message bla bla
            MessageMessageMessageMessageMessageMessage;alskjfsalkdjf slkdjf
          </p>
        </article>
        <article data-author="self">
          <p>
            Message bla bla
            MessageMessageMessageMessageMessageMessage;alskjfsalkdjf
          </p>
        </article>

        <article data-author="self">
          <p>
            Message bla bla
            MessageMessageMessageMessageMessageMessage;alskjfsalkdjf
          </p>
        </article>
        <article data-author="self">
          <p>
            Message bla bla
            MessageMessageMessageMessageMessageMessage;alskjfsalkdjf
          </p>
        </article>
        <article data-author="self">
          <p>
            Message bla bla
            MessageMessageMessageMessageMessageMessage;alskjfsalkdjf
          </p>
        </article>
        <article data-author="self">
          <p>
            Message bla bla
            MessageMessageMessageMessageMessageMessage;alskjfsalkdjf
          </p>
        </article>
      </section>
      <form
        className="user-chat__compose"
        spellCheck={false}
        onSubmit={onSubmit}
      >
        <div className="user-chat__compose__controls">
          <button>Submit</button>
          <button>Opt1</button>
          <button>Op2</button>
        </div>
        <textarea placeholder="Skriv en melding" />
        <div className="user-chat__something"></div>
      </form>
    </div>
  );
};

export default Melding;
