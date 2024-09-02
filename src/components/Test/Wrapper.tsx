import { component$, createContextId, Slot,  useContextProvider, useStore } from "@builder.io/qwik";

export const WrapperContext = createContextId<{
  active: boolean
}>('FLOWBITE_QWIK_WRAPPER_CONTEXT')


export const Wrapper = component$(() => {
  useContextProvider(WrapperContext, useStore({ active: false }))

  return <div>
    <Slot />
  </div>
})