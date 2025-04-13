import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Extension "oneliner" is now active!');

    // Commande pour transformer le code en une ligne
    const disposableOneLine = vscode.commands.registerCommand('oneliner.toOneLine', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        const selection = editor.selection;
        if (selection.isEmpty) {
            vscode.window.showInformationMessage('Veuillez sélectionner du texte pour utiliser OneLine');
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