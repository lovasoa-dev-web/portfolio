# 🎨 Guide d'utilisation d'AOS (Animate On Scroll)

## 📦 Installation

```bash
npm install aos
```

## ⚙️ Configuration (main.jsx)

```javascript
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init({
  duration: 1000,      // Durée par défaut (ms)
  once: true,          // Animation une seule fois
  offset: 120,         // Distance avant animation (px)
  easing: 'ease-in-out' // Animation fluide
});
```

## 🎬 Animations disponibles

| Nom | Description |
|-----|------------|
| **fade-up** | Apparition fade de bas en haut |
| **fade-down** | Apparition fade de haut en bas |
| **fade-left** | Apparition fade de droite vers gauche |
| **fade-right** | Apparition fade de gauche vers droite |
| **flip-up** | Flip de bas en haut |
| **flip-down** | Flip de haut en bas |
| **flip-left** | Flip de droite vers gauche |
| **flip-right** | Flip de gauche vers droite |
| **zoom-in** | Zoom entrante |
| **zoom-in-up** | Zoom en montant |
| **zoom-in-down** | Zoom en descendant |
| **zoom-in-left** | Zoom en allant à gauche |
| **zoom-in-right** | Zoom en allant à droite |
| **slide-up** | Glissement vers le haut |
| **slide-down** | Glissement vers le bas |
| **slide-left** | Glissement vers la gauche |
| **slide-right** | Glissement vers la droite |

## 📝 Attributs data-aos

```html
<!-- Animation de base -->
<div data-aos="fade-up">Contenu</div>

<!-- Avec durée personnalisée -->
<div data-aos="fade-up" data-aos-duration="1200">Contenu</div>

<!-- Avec délai -->
<div data-aos="fade-up" data-aos-delay="200">Contenu</div>

<!-- Animation fluide -->
<div data-aos="fade-up" data-aos-easing="ease-in-out">Contenu</div>

<!-- Déclencher avant d'arriver -->
<div data-aos="fade-up" data-aos-offset="120">Contenu</div>

<!-- Plusieurs fois ou une fois -->
<div data-aos="fade-up" data-aos-once="true">Une seule fois</div>
```

## 🛠️ Durées recommandées (en ms)

```
300   - Rapide
400   - Rapide+
500   - Normal
750   - Lent
1000  - Plus lent
1200  - Très lent
```

## 📋 Implémentation dans le portfolio

### 1️⃣ Hero Section

```jsx
// Image du héros
<div data-aos="fade-right" data-aos-duration="800">
  <img src={heroImg} alt="Photo de profil" />
</div>

// Infos du héros
<div data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
  <h1>Votre nom</h1>
  <h2>Votre profession</h2>
</div>
```

### 2️⃣ About Section

```jsx
<section data-aos="fade-up" data-aos-duration="800">
  <img data-aos="fade-right" src={aboutImg} alt="Photo" />
  <div data-aos="fade-left" data-aos-delay="200">
    <h1>À propos</h1>
    <p>Votre description...</p>
  </div>
</section>
```

### 3️⃣ Projects Section

```jsx
<h1 data-aos="fade-up">Projects</h1>

{projects.map((project, index) => (
  <div 
    key={index}
    data-aos="zoom-in"
    data-aos-duration="800"
    data-aos-delay={index * 100} // Délai progressif
  >
    <img src={project.src} alt={project.h4} />
    <h4>{project.h4}</h4>
    <p>{project.p}</p>
  </div>
))}
```

### 4️⃣ Skills Section

```jsx
<h1 data-aos="fade-up">Compétences</h1>

{/* Groupe 1 */}
<div data-aos="fade-up" data-aos-delay="100">
  <SkillList skill="HTML" />
  <SkillList skill="CSS" />
</div>

{/* Groupe 2 */}
<div data-aos="fade-up" data-aos-delay="200">
  <SkillList skill="React" />
  <SkillList skill="JavaScript" />
</div>

{/* Chaque compétence */}
<span data-aos="flip-left" data-aos-duration="600">
  <img src={icon} alt="Checkmark" />
  <p>HTML</p>
</span>
```

### 5️⃣ Contact Section

```jsx
<h1 data-aos="fade-up">Contact</h1>

{submitted && (
  <div data-aos="fade-in" data-aos-duration="500">
    ✓ Message envoyé!
  </div>
)}

<form data-aos="fade-up" data-aos-delay="100">
  <input data-aos="fade-up" data-aos-delay="200" />
  <input data-aos="fade-up" data-aos-delay="300" />
  <textarea data-aos="fade-up" data-aos-delay="400" />
  <button data-aos="fade-up" data-aos-delay="500">Envoyer</button>
</form>
```

### 6️⃣ Footer Section

```jsx
<footer data-aos="fade-up" data-aos-duration="800">
  <p>&copy; 2024 Votre nom. Tous droits réservés.</p>
</footer>
```

## 🎯 Bonnes pratiques

✅ **À faire:**
- Utiliser des délais progressifs pour les listes : `delay={index * 100}`
- Adapter la durée au contenu (300-800ms pour petit, 800-1200ms pour grand)
- Combiner plusieurs animations sur une même section
- Tester sur mobile (les animations peuvent être trop lentes)
- Utiliser `once: true` pour éviter les animations répétées

❌ **À éviter:**
- Trop d'animations simultanées (max 3-4)
- Durées trop longues (max 1500ms)
- Animations trop rapides (min 300ms)
- Délais excessifs (max 500ms)
- Laisser `once: false` (animation à chaque scroll peut être lourd)

## 🔄 Réinitialiser AOS

Si vous modifiez le DOM dynamiquement:

```javascript
import AOS from 'aos';

// Après ajout de nouveaux éléments
AOS.refresh();
```

## 📱 Optimisation mobile

Pour désactiver AOS sur mobile:

```javascript
AOS.init({
  disable: window.innerWidth < 768, // Désactiver sur mobile
});
```

Ou en CSS:

```css
@media (max-width: 768px) {
  [data-aos] {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
```

## 🌈 Combinaisons recommandées

```jsx
// Pour images
data-aos="zoom-in-up" data-aos-duration="800"

// Pour texte
data-aos="fade-up" data-aos-duration="600"

// Pour cartes/projets
data-aos="zoom-in" data-aos-duration="700"

// Pour listes
data-aos="fade-up" data-aos-delay={index * 100}

// Pour formes
data-aos="slide-up" data-aos-duration="600"
```

## 🔗 Ressources

- [Documentation officielle AOS](https://michalsnik.github.io/aos/)
- [Exemples d'animations](https://michalsnik.github.io/aos/#examples)

---

**Votre portfolio est maintenant prêt avec AOS! 🚀**
