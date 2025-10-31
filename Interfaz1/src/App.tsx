import React from "react";
import SnippetList from "./components/SnippetList";
import SnippetForm from "./components/SnippetForm";
import SnippetEditor from "./components/SnippetEditor";

function App() {
  return (
    <div className="bg-neutral-950">
      <h1 className="text-red-500 ">Code Snippet Manager</h1>
      <SnippetForm />
      <SnippetList />
      <SnippetEditor />
    </div>
  );
}

export default App;
