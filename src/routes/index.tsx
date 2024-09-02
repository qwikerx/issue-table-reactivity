import { component$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Child } from "~/components/Test/Child";
import { Wrapper } from "~/components/Test/Wrapper";

export default component$(() => {
  const childs = useStore([1, 2, 3]);
  return (
    <>
      <button onClick$={() => {
        childs.push(childs.length + 1);
      }}>
        Add child
      </button>
      <Wrapper>
        {childs.map((child) => (
          <Child key={child}>{child}</Child>
        ))}
      </Wrapper>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
