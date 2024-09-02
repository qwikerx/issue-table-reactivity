import { component$, Slot, useContext } from "@builder.io/qwik";
import { WrapperContext } from "./Wrapper";

export const Child = component$(() =>  {
  const context = useContext(WrapperContext)

  return <div data-active={context.active}>
    <Slot />
  </div>
})