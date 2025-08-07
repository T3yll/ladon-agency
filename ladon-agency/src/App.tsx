import GlassButton from "./components/Button";
import chariotImage from "./assets/chariot.png";
import logoImage from "./assets/logomoyen.png";
import backgroundImage from "./assets/background.png";

const LadonHomepage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay sombre pour maintenir la lisibilité */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Background gradient effects - par-dessus l'image */}
      <div className="absolute inset-0">
        {/* Effet principal vert émeraude au centre-droite */}
        <div className="absolute top-1/2 right-1/3 transform translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-emerald-400/20 via-emerald-500/15 to-transparent rounded-full blur-3xl"></div>
        {/* Effet secondaire plus sombre */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-teal-600/15 via-emerald-800/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Header avec effet glassmorphism */}
      <header className="relative z-10 px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center">
          {/* Logo - exactement comme sur l'image */}
          <div className="flex items-center space-x-2">
            <img 
              src={logoImage} 
              alt="Logo" 
              className="h-8 w-auto md:h-10 lg:h-12"
            />
          </div>

          {/* Navigation avec vrais botons glass */}
          <nav className="hidden md:flex space-x-4 ml-48">
            {['Notre philosophie', 'Nos offres', 'Prendre RDV', 'Contact'].map((item, index) => (
              <GlassButton 
                key={index}
                variant="primary"
                size="nav"
                className="text-sm"
              >
                {item}
              </GlassButton>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content - positionnement exact */}
      <main className="relative z-10 px-8 pt-18">
        <div className="max-w-8xl mx-auto">
          <div className="ml-32 grid grid-cols-12 gap-8 items-center min-h-[75vh]">
            
            {/* Left Content - texte principal */}
            <div className="col-span-12 lg:col-span-7 space-y-5 pt-64">
              <div className="space-y-3 max-w-2xl pt-24">
                <h1 className="text-4xl lg:text-5xl font-light">
                  <div className="mb-2">Nous ne crions pas plus fort.</div>
                  <div className="text-white">Nous visons plus juste.</div>
                </h1>
                
                <p className="text-md text-white leading-relaxed max-w-lg">
                  Du brouillon à l'affirmation. Transformez dès maintenant
                  <br />
                  votre business vers la stabilité et le résultat.
                </p>
              </div>

              {/* CTA Button avec variante white */}
              <GlassButton 
                variant="white"
                size="lg"
                className="group font-semibold"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-md">Discutons</span>
                  <svg 
                    className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </GlassButton>
            </div>

            {/* Right Content - Project Showcase avec glassmorphism */}
            <div className="col-span-12 lg:col-span-4 mt-28">
              <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <h3 className="text-3xl font-semibold">Notre dernier projet</h3>
                  <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
                </div>

                <div className="flex justify-center mb-4">
                  <div className="w-full h-1 bg-white rounded-full"></div>
                </div>
                
                <p className="text-white mb-4 text-lg leading-relaxed">
                  Chariot est une application
                  <br />
                  de gestion de jeu de rôle.
                </p>

                {/* Mock app interface - plus détaillé */}
                <div className="backdrop-blur-sm bg-gray-900/80 border border-gray-700/50 rounded-2xl p-6 space-y-4">
                  <img src={chariotImage} alt="Charlot - Application de gestion de jeu de rôle" />
                </div>

                {/* View more button avec glassmorphism */}
                <GlassButton 
                  className="w-full mt-8 py-4 rounded-2xl group"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <span>Voir plus de projets</span>
                    <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </GlassButton>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Gradient overlay pour plus de profondeur - ajusté pour l'image de fond */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/30 pointer-events-none"></div>
    </div>
  );
};

export default LadonHomepage;