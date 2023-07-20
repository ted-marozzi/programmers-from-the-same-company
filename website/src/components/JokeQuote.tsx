import { BiRegularRefresh } from "solid-icons/bi";
import { createSignal } from "solid-js";
// Just some smart people I found on the web
// 	https://www.rasmussen.edu/degrees/technology/blog/famous-computer-scientists-who-impacted-the-industry/
const smartPeople = [
  "Barbara Liskov",
  "Elon Musk",
  "Larry Page",
  "Carl Sassenrath",
  "Guido Van Rassum",
  "Mark Zuckerburg",
  "Brendan Eich",
  "Tim Berners-Lee",
  "Hedy Lamarr",
  "Bill Gates",
  "Linus Torvalds",
];

export function JokeQuote() {
  const [joke, setJoke] = createSignal("");
  const [peep, setPeep] = createSignal("");
  const [isLoading, setIsLoading] = createSignal(false);

  const apiEndpoint =
    "https://v2.jokeapi.dev/joke/Programming?format=txt&type=single";

  // The maximum is exclusive and the minimum is inclusive.
  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const getRandomSmarty = () => {
    return smartPeople[getRandomInt(0, smartPeople.length)];
  };

  const getJoke = async () => {
    setIsLoading(true);

    const text = await fetch(apiEndpoint).then((res) => res.text());

    setJoke(text);
    setPeep(getRandomSmarty());
    setIsLoading(false);
  };

  getJoke();

  return (
    <>
      {joke() && (
        <div class="h-full flex flex-col justify-center items-center">
          <div>"{joke()}"</div>
          <div>- {peep()}</div>
          <BiRegularRefresh
            onClick={() => {
              if (isLoading()) {
                return;
              }
              getJoke();
            }}
            size={30}
            class={`${isLoading() ? "animate-spin" : "cursor-pointer"} my-2`}
          />
        </div>
      )}
    </>
  );
}
