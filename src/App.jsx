import React, { useState, useEffect } from "react";
import "./App.css";
import JoditEditorComponent from "./common/joditEditor/JoditEditorComponent";
import MarkdownEditor from "./common/uiwEditor/MarkdownEditor";
import { useForm } from "react-hook-form";

function App() {
  const [val, setVal] = useState(""); // State for JoditEditor content

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  // Simulating a backend fetch
  useEffect(() => {
    const backendData = "<p>Backend data loaded successfully!</p>";
    setVal(backendData);
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Editor Content:", val);
  };

  const onSubmit = (v) => {
    const value = v.content;
    console.log("value", value);
    reset();
  };

  console.log("first", watch("content"));

  return (
    <>
      <div>
        <div>
          <h3>Jodit Editor</h3>
          <JoditEditorComponent
            placeholder={val ? "" : "Write here..."}
            value={val}
            setValue={setVal}
          />
          <button onClick={handleSave}>Save</button>
        </div>
        <div>
          <h3>uiw Editor</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <MarkdownEditor
              control={control}
              name="content"
              setValue={setValue}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;