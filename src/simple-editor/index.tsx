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
