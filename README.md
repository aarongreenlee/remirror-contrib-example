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

## Editor Assembly

The following can be found at `simple-editor/index.tsx`

```ts
import {
    ManagedRemirrorProvider,
    RemirrorManager,
    RemirrorExtension,
    useRemirrorContext,
} from "@remirror/react";

import { CollaborationExtension, OnSendableReceivedParams } from "@remirror/extension-collaboration";

import React, { FC } from "react";

export const SimpleEditor: FC = () => {
    return (
        <RemirrorManager>
            <RemirrorExtension
              Constructor={CollaborationExtension}
              clientID='fooBar'
              onSendableReceived={(p: OnSendableReceivedParams) => {
                  debugger;
                  console.log(p)
              }}
            />
            <ManagedRemirrorProvider>
                <>
                    <InnerEditor/>
                </>
            </ManagedRemirrorProvider>
        </RemirrorManager>
    )
};

/**
 * The internal editor responsible for the editor layout and ui.
 * Any component rendered has access to the remirror context.
 */
const InnerEditor: FC = () => {
    const { getRootProps } = useRemirrorContext();

    return (
        <div
          {...getRootProps()} data-testid='remirror-wysiwyg-editor'
        />
    )
};
```
