# OneLiner

Une extension VS Code pour transformer du code sélectionné en une seule ligne.

## Fonctionnalités

Cette extension ajoute une commande "OneLine" au menu contextuel lorsque vous sélectionnez du texte. Cette commande transforme le texte sélectionné en une seule ligne en remplaçant les retours à la ligne par des espaces.

### Exemple

Code sur plusieurs lignes:
```
<Button 
    label="Send"
    isLoading={isSaving}
    onClick={handleSubmit} 
    disabled={isSaving} 
/>
```

Devient:
```
<Button label="Send" isLoading={isSaving} onClick={handleSubmit} disabled={isSaving} />
```

## Utilisation

1. Sélectionnez du texte dans l'éditeur
2. Faites un clic droit sur la sélection
3. Choisissez "OneLine" dans le menu contextuel

## Raccourcis clavier

L'extension est configurée avec le raccourci clavier par défaut suivant :
- Windows/Linux : `Alt+Shift+O`
- Mac : `Option+Shift+O`

Pour personnaliser ce raccourci :
1. Ouvrez la palette de commandes avec `Ctrl+Shift+P` (Windows/Linux) ou `Cmd+Shift+P` (Mac)
2. Tapez "Préférences: Raccourcis clavier" et sélectionnez-le
3. Dans la barre de recherche, tapez "OneLine"
4. Cliquez sur l'icône de crayon à côté de la commande "OneLine" et entrez votre nouveau raccourci
5. Appuyez sur Entrée pour confirmer

Le raccourci ne fonctionnera que lorsqu'une sélection de texte est active dans l'éditeur.