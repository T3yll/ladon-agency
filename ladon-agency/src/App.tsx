import GlassButton from './components/Button';

const LagdonHomepage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden" style={{ fontFamily: 'Inter Tight, -apple-system, BlinkMacSystemFont, sans-serif' }}>
      {/* Background gradient effects - plus fidèle à l'original */}
      <div className="absolute inset-0">
        {/* Effet principal vert émeraude au centre-droite */}
        <div className="absolute top-1/2 right-1/3 transform translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-emerald-400/30 via-emerald-500/20 to-transparent rounded-full blur-3xl"></div>
        {/* Effet secondaire plus sombre */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-teal-600/20 via-emerald-800/15 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Header avec effet glassmorphism */}
      <header className="relative z-10 px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo - exactement comme sur l'image */}
          <div className="flex items-center space-x-2">
            <div className="bg-white text-black px-4 py-2 rounded font-bold text-xl">
              Lagdon
            </div>
            <span className="text-xs text-gray-400 font-medium tracking-wider">AGENCY</span>
          </div>

          {/* Navigation avec vrais botons glass */}
          <nav className="hidden md:flex space-x-4">
            {['Notre philosophie', 'Nos offres', 'Prendre RDV', 'Contact'].map((item, index) => (
              <GlassButton 
                key={index}
                variant="dark"
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
      <main className="relative z-10 px-8 pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 items-center min-h-[80vh]">
            
            {/* Left Content - texte principal */}
            <div className="col-span-12 lg:col-span-7 space-y-12">
              <div className="space-y-8 max-w-2xl">
                <h1 className="text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight" style={{ fontFamily: 'Inter Tight, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                  <div className="mb-2">Nous ne crions pas plus fort.</div>
                  <div className="text-white">Nous visons plus juste.</div>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  Du brouillon à l'affirmation. Transformez dès maintenant
                  <br />
                  votre business vers la stabilité et le résultat.
                </p>
              </div>

              {/* CTA Button avec effet vitre */}
              <GlassButton 
                variant="primary"
                size="lg"
                className="group flex items-center space-x-3"
              >
                <span>Discutons</span>
                <svg 
                  className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </GlassButton>
            </div>

            {/* Right Content - Project Showcase avec glassmorphism */}
            <div className="col-span-12 lg:col-span-5">
              <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold">Notre dernier projet</h3>
                  <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
                </div>
                
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Charlot est une application
                  <br />
                  de gestion de jeu de rôle.
                </p>

                {/* Mock app interface - plus détaillé */}
                <div className="backdrop-blur-sm bg-gray-900/80 border border-gray-700/50 rounded-2xl p-6 space-y-4">
                  {/* Window controls */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="ml-4 text-xs text-gray-500">Charlot - Gestionnaire RPG</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {/* Left sidebar */}
                    <div className="space-y-3">
                      <div className="bg-emerald-500 h-10 rounded-lg flex items-center justify-center text-xs font-semibold shadow-lg">
                        Personnages
                      </div>
                      <div className="bg-yellow-500 h-8 rounded-lg flex items-center justify-center text-xs font-medium">
                        Quêtes
                      </div>
                      <div className="bg-blue-500 h-8 rounded-lg flex items-center justify-center text-xs font-medium">
                        Inventaire
                      </div>
                      <div className="bg-purple-500 h-8 rounded-lg flex items-center justify-center text-xs font-medium">
                        Maps
                      </div>
                    </div>
                    
                    {/* Main content */}
                    <div className="col-span-2 space-y-3">
                      {/* Character image */}
                      <div className="bg-gradient-to-br from-orange-600 to-red-700 h-24 rounded-xl flex items-center justify-center shadow-lg">
                        <div className="w-16 h-16 bg-orange-500 rounded-lg opacity-80"></div>
                      </div>
                      
                      {/* Stats bars */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="bg-red-500 h-3 rounded-full w-full"></div>
                          <span className="text-xs text-gray-400">HP</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="bg-blue-500 h-3 rounded-full w-3/4"></div>
                          <span className="text-xs text-gray-400">MP</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="bg-green-500 h-3 rounded-full w-1/2"></div>
                          <span className="text-xs text-gray-400">XP</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom actions */}
                  <div className="flex space-x-2 pt-4 border-t border-gray-700/50">
                    <div className="bg-gray-700 h-6 rounded-full w-20 flex items-center justify-center">
                      <div className="text-xs text-gray-300">Action</div>
                    </div>
                    <div className="bg-gray-700 h-6 rounded-full w-24 flex items-center justify-center">
                      <div className="text-xs text-gray-300">Dialogue</div>
                    </div>
                    <div className="bg-gray-700 h-6 rounded-full w-16 flex items-center justify-center">
                      <div className="text-xs text-gray-300">Save</div>
                    </div>
                  </div>
                </div>

                {/* View more button avec glassmorphism */}
                <GlassButton 
                  className="w-full mt-8 py-4 rounded-2xl group flex items-center justify-center space-x-3"
                >
                  <span>Voir plus de projets</span>
                  <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </GlassButton>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Gradient overlay pour plus de profondeur */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40 pointer-events-none"></div>
    </div>
  );
};

export default LagdonHomepage;