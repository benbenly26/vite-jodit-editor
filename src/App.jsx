import { useState, useEffect } from 'react'
import './App.css'
import JoditEditorComponent from './common/joditEditor/JoditEditorComponent'
import MarkdownEditor from './common/uiwEditor/MarkdownEditor'

function App() {
  const [value, setValue] = useState(''); // State for JoditEditor content
  const [data, setData] = useState('');  // State for uiwEditor content

  // Simulating a backend fetch
  useEffect(() => {
    const backendData = '<p>Backend data loaded successfully!</p>';
    setValue(backendData);
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    console.log('Editor Content:', value);
  };

  // uiw editor 
  const handleSaveData = (e) => {
    e.preventDefault();
    console.log('data', data);
    setData('')
  };

  return (
    <>
      <div>
        <div>
          <h3>Jodit Editor</h3>
          <JoditEditorComponent
            placeholder={value ? '' : 'Write here...'}
            value={value}
            setValue={setValue}
          />
          <button onClick={handleSave}>Save</button>
        </div>
        <div>
          <h3>uiw Editor</h3>
          <MarkdownEditor
            text={data}
            onChange={(value) => setData(value)}
            name={'data'} />
          <button onClick={handleSaveData}>save</button>
        </div>
      </div>

    </>
  )
}

export default App
