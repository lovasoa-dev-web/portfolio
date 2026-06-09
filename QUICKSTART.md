# 🚀 Installation et Démarrage Rapide - AOS

## 1️⃣ Installation (1 minute)

Ouvrez votre terminal dans le répertoire du projet et exécutez:

```bash
npm install aos
```

Attendez la fin de l'installation.

## 2️⃣ Configuration (Déjà faite ✅)

Votre `src/main.jsx` est déjà configuré avec:

```javascript
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init({
  duration: 1000,
  once: true,
  offset: 120,
  easing: 'ease-in-out',
});
```

## 3️⃣ Démarrer le projet

```bash
npm run dev
```

Le projet s'ouvrira automatiquement dans votre navigateur à `http://localhost:5173`.

## 4️⃣ Tester les animations

1. Scrollez la page vers le bas lentement
2. Vous devez voir les animations:
   - **Hero**: Image vient de droite, texte de gauche
   - **About**: Apparition fluide (fade-up)
   - **Projects**: Cartes arrivent avec zoom, décalées
   - **Skills**: Groupes avec délai, flip individual
   - **Contact**: Fade progressif
   - **Footer**: Apparition fluide

## 5️⃣ Structure des animations mise en place

```
Portfolio/
├── Hero Section
│   ├── Image: fade-right (800ms)
│   └── Texte: fade-left (800ms, délai 200ms)
├── About Section
│   └── Contenu: fade-up (1000ms)
├── Projects Section
│   ├── Titre: fade-up (800ms)
│   └── Cartes: zoom-in (800ms, délai progressif)
├── Skills Section
│   ├── Titre: fade-up (800ms)
│   ├── Groupes: fade-up (délai 100/200/300ms)
│   └── Items: flip-left (600ms)
├── Contact Section
│   ├── Titre: fade-up (800ms)
│   ├── Message: fade-in (500ms)
│   └── Formulaire: fade-up (800ms, délai 100ms)
└── Footer Section
    └── Contenu: fade-up (800ms)
```

## 📝 Fichiers de référence créés

1. **AOS_GUIDE.md** - Guide complet (toutes les animations, bonnes pratiques)
2. **AOS_PATTERNS.jsx** - 10 patterns réutilisables pour vos projets
3. **AOS_CHECKLIST.md** - Checklist détaillée et état d'implémentation
4. **QUICKSTART.md** - Ce fichier (démarrage rapide)

## ⚠️ Dépannage

### Les animations ne fonctionnent pas?

1. **Vérifiez l'installation**:
   ```bash
   npm list aos
   ```
   Doit afficher la version d'AOS

2. **Videz le cache**:
   - Appuyez sur `Ctrl+Shift+Delete` (ou Cmd+Shift+Delete sur Mac)
   - Videz le cache du site

3. **Redémarrez le dev server**:
   ```bash
   # Arrêtez avec Ctrl+C
   # Relancez:
   npm run dev
   ```

4. **Vérifiez la console**:
   - Ouvrez DevTools (F12)
   - Onglet Console
   - Cherchez les erreurs rouges

### Les animations sont trop lentes/rapides?

Modifiez la durée globale dans `src/main.jsx`:

```javascript
AOS.init({
  duration: 500,  // Changez de 1000 à 500 pour plus rapide
  // ...
});
```

Ou sur des éléments spécifiques:

```jsx
<div data-aos="fade-up" data-aos-duration="500">Contenu</div>
```

## 🎨 Personnalisation

### Changer une animation

Par exemple, pour que Hero soit différent:

```jsx
// src/sections/Hero/Hero.jsx

// Pour l'image (au lieu de fade-right):
<div data-aos="zoom-in" data-aos-duration="1000">

// Pour le texte (au lieu de fade-left):
<div data-aos="slide-up" data-aos-duration="1000" data-aos-delay="300">
```

### Ajouter des animations ailleurs

Pour ajouter AOS au Header:

```jsx
// src/common/Header.jsx

<header data-aos="fade-down" data-aos-duration="600">
  {/* Contenu du header */}
</header>
```

## 📱 Mobile

Actuellement, AOS fonctionne sur mobile. Si vous voulez le désactiver sur petits écrans:

Ajoutez à `src/main.jsx`:

```javascript
AOS.init({
  duration: 1000,
  once: true,
  offset: 120,
  disable: window.innerWidth < 768,  // Désactiver sur mobile
});
```

## 🎬 Animations recommandées par type

| Type | Animation | Durée |
|------|-----------|-------|
| Images | zoom-in, fade-right | 800ms |
| Texte | fade-up, fade-left | 600-800ms |
| Cartes | zoom-in, flip-left | 700ms |
| Listes | fade-up | 600ms avec délai |
| Formulaires | slide-up, fade-up | 600ms |
| Boutons | fade-in, zoom-in | 500ms |

## ✅ Checklist avant livraison

- [ ] `npm install aos` fait
- [ ] `npm run dev` fonctionne
- [ ] Scrollez et voyez les animations
- [ ] Testez sur mobile
- [ ] Consultez AOS_GUIDE.md pour modifications
- [ ] Bâtissez le projet: `npm run build`

## 🔗 Ressources utiles

- [AOS Documentation](https://michalsnik.github.io/aos/)
- [Exemples AOS](https://michalsnik.github.io/aos/#examples)
- [GitHub AOS](https://github.com/michalsnik/aos)

## 💬 Questions fréquentes

**Q: Est-ce que AOS ralentit le site?**
A: Non, AOS est très léger (~7kb gzipped) et optimisé

**Q: Fonctionne-t-il sur tous les navigateurs?**
A: Oui, supporté par tous les navigateurs modernes

**Q: Puis-je utiliser d'autres animations?**
A: Oui! Consultez AOS_GUIDE.md pour les 17 animations disponibles

**Q: Comment changer les animations de base?**
A: Modifiez `AOS.init()` dans `src/main.jsx` ou les attributs `data-aos`

---

**Vous êtes prêt! 🎉 Lancez `npm run dev` et profitez des animations!**
