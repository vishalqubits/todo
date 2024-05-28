"use client";

import { useState } from "react";
import {
  useAddBookMutation,
  useGetBooksQuery,
} from "../../client/__client_generated__/apollo-hooks/graphql";

export default function App() {
  const [addBook] = useAddBookMutation();

  const { data, loading, error, refetch } = useGetBooksQuery();

  const [newBookTitle, setNewBookTitle] = useState("");
  const [newBookAuthor, setNewBookAuthor] = useState("");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:{error.message}</p>;

  const handleAddBook = async () => {
    try {
      await addBook({
        variables: {
          input: {
            title: newBookTitle,
            author: newBookAuthor,
          },
        },
      });
      refetch();
      setNewBookTitle("");
      setNewBookAuthor("");
    } catch (err) {
      console.log("Error adding book:", err);
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newBookTitle}
          onChange={(e) => setNewBookTitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Author"
          value={newBookAuthor}
          onChange={(e) => setNewBookAuthor(e.target.value)}
        />
        <br />
        <button onClick={handleAddBook}>Add book</button>
      </div>
      <br />
      <div>
        <h2>Books List:</h2>
        <ul>
          {data?.books?.map((book) => (
            <li key={book?.title}>
              {book?.title} by {book?.author}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
