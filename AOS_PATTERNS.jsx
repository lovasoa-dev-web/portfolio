// AOS_PATTERNS.jsx - Patterns réutilisables pour AOS

// 🎨 Pattern 1: Hero avec image et texte
export const HeroPattern = () => {
  return (
    <section className="hero">
      <div data-aos="fade-right" data-aos-duration="800">
        <img src="image.jpg" alt="Hero" />
      </div>
      <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
        <h1>Titre</h1>
        <p>Description</p>
      </div>
    </section>
  );
};

// 📋 Pattern 2: Grille avec délai progressif
export const GridPattern = ({ items }) => {
  return (
    <div className="grid">
      {items.map((item, index) => (
        <div
          key={index}
          data-aos="zoom-in"
          data-aos-duration="700"
          data-aos-delay={index * 100}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};

// 📝 Pattern 3: Formulaire avec animation progressive
export const FormPattern = () => {
  return (
    <form data-aos="fade-up" data-aos-duration="800">
      <input 
        placeholder="Nom"
        data-aos="slide-up"
        data-aos-delay="100"
        data-aos-duration="600"
      />
      <input 
        placeholder="Email"
        data-aos="slide-up"
        data-aos-delay="200"
        data-aos-duration="600"
      />
      <textarea 
        placeholder="Message"
        data-aos="slide-up"
        data-aos-delay="300"
        data-aos-duration="600"
      />
      <button
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Envoyer
      </button>
    </form>
  );
};

// 🎯 Pattern 4: Carte avec flip animation
export const CardPattern = ({ title, description, image }) => {
  return (
    <div
      className="card"
      data-aos="flip-left"
      data-aos-duration="700"
    >
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// 📊 Pattern 5: Liste avec animation staggered
export const ListPattern = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          data-aos="fade-left"
          data-aos-delay={index * 150}
          data-aos-duration="600"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

// 🏷️ Pattern 6: Badge/Tag avec animation
export const BadgePattern = ({ tags }) => {
  return (
    <div className="badges">
      {tags.map((tag, index) => (
        <span
          key={index}
          data-aos="zoom-in"
          data-aos-delay={index * 80}
          data-aos-duration="500"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

// 🖼️ Pattern 7: Galerie d'images
export const GalleryPattern = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((img, index) => (
        <div
          key={index}
          className="gallery-item"
          data-aos="fade-in"
          data-aos-duration="700"
          data-aos-delay={index * 100}
        >
          <img src={img} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

// 💡 Pattern 8: Bloc contenu avec accent
export const ContentBlockPattern = ({ title, subtitle, content, image }) => {
  return (
    <section className="content-block">
      <div data-aos="fade-right" data-aos-duration="800">
        <img src={image} alt={title} />
      </div>
      <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
        <h2 data-aos="fade-up" data-aos-delay="300">{title}</h2>
        <h3 data-aos="fade-up" data-aos-delay="400">{subtitle}</h3>
        <p data-aos="fade-up" data-aos-delay="500">{content}</p>
      </div>
    </section>
  );
};

// ⭐ Pattern 9: Caractéristiques/Features avec icônes
export const FeaturesPattern = ({ features }) => {
  return (
    <div className="features">
      {features.map((feature, index) => (
        <div
          key={index}
          className="feature-item"
          data-aos="fade-up"
          data-aos-delay={index * 120}
          data-aos-duration="700"
        >
          <img src={feature.icon} alt={feature.title} />
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

// 🎬 Pattern 10: Timeline avec animation alternée
export const TimelinePattern = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div
          key={index}
          className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
          data-aos-delay={index * 150}
          data-aos-duration="700"
        >
          <h4>{event.title}</h4>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
};

// 🎛️ Classe CSS pour différentes vitesses d'animation
export const AnimationSpeeds = {
  veryFast: "data-aos-duration='300'",
  fast: "data-aos-duration='500'",
  normal: "data-aos-duration='800'",
  slow: "data-aos-duration='1000'",
  verySlow: "data-aos-duration='1200'"
};

// 📌 Présets d'animations courantes
export const AosPresets = {
  heroImage: {
    'data-aos': 'fade-right',
    'data-aos-duration': '800'
  },
  heroText: {
    'data-aos': 'fade-left',
    'data-aos-duration': '800',
    'data-aos-delay': '200'
  },
  projectCard: {
    'data-aos': 'zoom-in',
    'data-aos-duration': '700',
    // Utiliser: data-aos-delay={index * 100}
  },
  skillItem: {
    'data-aos': 'flip-left',
    'data-aos-duration': '600'
  },
  formInput: {
    'data-aos': 'slide-up',
    'data-aos-duration': '600'
    // Utiliser: data-aos-delay={index * 100}
  }
};
