import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Extension "One Line Formatter" is now active!');

    // Commande pour transformer le code en une ligne
    const disposableOneLine = vscode.commands.registerCommand('oneline-formatter.toOneLine', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        const selection = editor.selection;
        if (selection.isEmpty) {
            vscode.window.showInformationMessage('Please select some text to compact into one line.');
            return;
        }

        const text = editor.document.getText(selection);
        const oneLineText = convertToOneLine(text);

        editor.edit(editBuilder => {
            editBuilder.replace(selection, oneLineText);
        });
    });

    context.subscriptions.push(disposableOneLine);
}

/**
 * Convertit le texte sélectionné en une seule ligne
 * Remplace les retours à la ligne par des espaces, sauf après la fin d'un tag (>)
 */
function convertToOneLine(text: string): string {
    // Remplacer les retours à la ligne par des espaces
    let result = text.replace(/\r?\n\s*/g, ' ');
    
    // Normaliser les espaces multiples en un seul espace
    result = result.replace(/\s+/g, ' ');
    
    return result.trim();
}

export function deactivate() {}