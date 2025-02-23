import React, { useState, useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';

const MarkdownEditor = ({ text, setValue, name, onChange }) => {
    const [markdown, setMarkdown] = useState(text);

    useEffect(() => {
        setMarkdown(text);
    }, [text]);

    const handleInput = (v) => {
        setMarkdown(v);
        if (setValue) {
            setValue(name, v);
        }
        if (onChange) {
            onChange(v);
        }
    };

    return (
        <div>
            <MDEditor height={500} value={markdown} onChange={handleInput} />
        </div>
    );
};

export default MarkdownEditor;