# One Line Formatter

A VS Code extension to transform selected code into a single line.

## Features

This extension adds a "Compact to One Line" command to the context menu when you select text. This command transforms the selected text into a single line by replacing line breaks with spaces.

### Example

Code on multiple lines:
```
<Button 
    label="Send"
    isLoading={isSaving}
    onClick={handleSubmit} 
    disabled={isSaving} 
/>
```

Becomes:
```
<Button label="Send" isLoading={isSaving} onClick={handleSubmit} disabled={isSaving} />
```

## Usage

1. Select text in the editor
2. Right-click on the selection
3. Choose "Compact to One Line" from the context menu

## Keyboard shortcuts

The extension is configured with the following default keyboard shortcut:
- Windows/Linux: `Alt+Shift+O`
- Mac: `Option+Shift+O`

To customize this shortcut:
1. Open the command palette with `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
2. Type "Preferences: Keyboard Shortcuts" and select it
3. In the search bar, type "Compact to One Line"
4. Click on the pencil icon next to the "Compact to One Line" command and enter your new shortcut
5. Press Enter to confirm

The shortcut will only work when a text selection is active in the editor.