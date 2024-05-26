"use client";

import { useAddBookMutation } from "../../client/__client_generated__/apollo-hooks/graphql";

export default function App() {
  const [addBook] = useAddBookMutation();
  return (
    <>
      <div>Books list:</div>
      <button
        onClick={async () => {
          await addBook({
            variables: {
              input: {
                title: "book 2",
                author: "vishal",
              },
            },
          });
        }}
      >
        Submit
      </button>
    </>
  );
}
