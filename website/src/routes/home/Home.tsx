import { JokeQuote } from "./JokeQuote";

export function Home() {
  return (
    <div class="h-full text-center flex flex-col justify-center">
      <div class="text-4xl my-5">
        A group where we all pretend to be programmers from the same company
      </div>
      <JokeQuote />
    </div>
  );
}
