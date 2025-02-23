import React, { useRef, useMemo, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import './styles.css';

const JoditEditorComponent = ({ placeholder, value, setValue }) => {
    const editor = useRef(null);

    const config = useMemo(
        () => ({
            readonly: false, // Editable mode
            placeholder: placeholder || 'Start typing...',
            toolbarSticky: false,
            toolbarAdaptive: false,
            showXPathInStatusbar: false, // Hide XPath from status bar
            showPoweredBy: false, // Hide "Powered by Jodit"
            minHeight: 300, // Adjust height for better view
        }),
        [placeholder]
    );

    useEffect(() => {
        if (value) {
            setValue(value); // Ensure editor updates when backend data is received
        }
    }, [value, setValue]);

    return (
        <div className="jodit-container">
            <JoditEditor
                ref={editor}
                value={value} // Controlled component
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={(newContent) => setValue(newContent)} // Updates state on blur
                onChange={(newContent) => setValue(newContent)} // Updates state on change
            />
        </div>
    );
};

export default JoditEditorComponent;