import React from "react";
import MDEditor from "@uiw/react-md-editor";
import { Controller } from "react-hook-form";

const MarkdownEditor = ({ control, name }) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <div>
            <MDEditor
              height={500}
              value={value}
              onChange={onChange} // React Hook Form handles the onChange event
            />
          </div>
        )}
      />
    </>
  );
};

export default MarkdownEditor;