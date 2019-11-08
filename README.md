# remirror-contrib-example

## Error

`this` is undefined within `collaboration-extention.ts`

```ts
  /**
   * Called whenever a transaction occurs.
   */
  public onTransaction({ getState }: OnTransactionParams) {
    this.getSendableSteps(getState()); // <<< 'this' is undefined
  }
```

```
react-dom.development.js:12194 Uncaught TypeError: Cannot read property 'getSendableSteps' of undefined
    at onTransaction (extension-collaboration.esm.js:147)
    at eval (core.esm.js:1344)
    at Array.forEach (<anonymous>)
    at ExtensionManager.onTransaction (core.esm.js:1342)
    at onUpdate (react.esm.js:483)
    at Remirror.eval (react.esm.js:515)
    at callCallback (react-dom.development.js:13811)
    at commitUpdateEffects (react-dom.development.js:13849)
    at commitUpdateQueue (react-dom.development.js:13837)
    at commitLifeCycles (react-dom.development.js:22101)
```

## Editor Assembly

The following can be found at `simple-editor/index.tsx`

```ts
import {
    ManagedRemirrorProvider,
    RemirrorManager,
    RemirrorExtension,
    useRemirrorContext,
} from "@remirror/react";

import {CollaborationExtension, OnSendableReceivedParams} from "@remirror/extension-collaboration";

import React, {FC} from "react";

export const SimpleEditor: FC = () => {
    return (
      <RemirrorManager>
          <RemirrorExtension
            Constructor={CollaborationExtension}
            clientID='fooBar'
            onSendableReceived={(p: OnSendableReceivedParams) => {
                console.log('onSendableReceived', p);
            }}
          />
          <ManagedRemirrorProvider>
              <InnerEditor/>
          </ManagedRemirrorProvider>
      </RemirrorManager>
    )
};

/**
 * The internal editor responsible for the editor layout and ui.
 * Any component rendered has access to the remirror context.
 */
const InnerEditor: FC = () => {
    const {getRootProps} = useRemirrorContext();

    return (
      <div {...getRootProps()} data-testid='remirror-wysiwyg-editor'/>
    )
};
```
