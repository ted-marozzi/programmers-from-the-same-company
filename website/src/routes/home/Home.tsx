import { JokeQuote } from "../../components/index";

export function Home() {
  return (
    <div>
      <h1 class="text-center text-4xl py-5">
        A group where we all pretend to be programmers from the same company
      </h1>
      <h3 class="text-center py-5 text-xl">
        <JokeQuote />
      </h3>
    </div>
  );
}
