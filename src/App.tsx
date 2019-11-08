import React from "react"
import { SimpleEditor } from "./simple-editor"


const App: React.FC = () => {
    return (
      <div>
          <h1>Remirror Editor</h1>
          <div style={{backgroundColor: 'yellow'}}>
              <SimpleEditor />
          </div>
      </div>
    )
}

export default App

