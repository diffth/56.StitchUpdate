import React from 'react';

export default function YourDestinyRevealed() {
  return (
    <div className="relative">
      {/* Hero Section: Day Master */}
      <section className="relative mb-12 flex flex-col md:flex-row items-center gap-12 overflow-hidden rounded-xl p-8 glass-card hanji-texture">
        <div className="relative z-10 text-center md:text-left flex-1">
          <span className="font-label-sm text-label-sm text-primary mb-2 block uppercase">
            The Celestial Core
          </span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4">
            Golden Dragon Day Master
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant/90 max-w-xl">
            Born under the radiance of the Metal Dragon, your essence is defined by unyielding strength and refined ambition. You are a natural leader whose presence commands the room like dawn breaking over the mountains.
          </p>
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <button className="bg-primary text-on-primary px-8 py-3 rounded-none font-label-md text-label-md transition-all hover:shadow-[0_0_20px_rgba(167,209,166,0.4)] active:scale-95">
              REVEAL DEPTHS
            </button>
            <button className="border border-primary text-primary px-8 py-3 rounded-none font-label-md text-label-md transition-all hover:bg-primary/5 active:scale-95">
              SHARE FATE
            </button>
          </div>
        </div>
        <div className="relative z-10 w-64 h-64 flex items-center justify-center">
          <div className="absolute inset-0 border border-primary/20 rounded-full animate-cosmic"></div>
          <div className="absolute inset-4 border border-primary/40 rounded-full animate-cosmic" style={{ animationDirection: 'reverse', animationDuration: '40s' }}></div>
          <div className="bg-surface-container-high w-48 h-48 rounded-full flex items-center justify-center border border-primary/60 shadow-[0_0_40px_rgba(167,209,166,0.2)]">
            <span 
              className="material-symbols-outlined text-7xl text-primary" 
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              diagonal_line
            </span>
          </div>
        </div>
      </section>

      {/* Elemental Balance: Bento Grid Layout */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-headline-md text-headline-md text-on-surface">The Five Elements Balance</h3>
          <span className="text-primary font-label-md text-label-md">Year of the Wood Snake</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Balance Chart */}
          <div className="md:col-span-8 glass-card p-8 rounded-xl flex flex-col items-center justify-center relative overflow-hidden">
            <div className="relative z-10 w-full grid grid-cols-5 gap-4 mt-8">
              {/* Fire */}
              <div className="flex flex-col items-center group">
                <div className="h-32 w-4 bg-surface-container-highest rounded-full overflow-hidden mb-4 border border-outline-variant/30">
                  <div className="bg-red-500 w-full mt-auto h-[65%] shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>
                </div>
                <span className="material-symbols-outlined text-red-400 group-hover:scale-125 transition-transform">local_fire_department</span>
                <span className="font-label-sm text-label-sm mt-2 uppercase">Fire</span>
              </div>
              {/* Water */}
              <div className="flex flex-col items-center group">
                <div className="h-32 w-4 bg-surface-container-highest rounded-full overflow-hidden mb-4 border border-outline-variant/30">
                  <div className="bg-blue-500 w-full mt-auto h-[40%] shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                </div>
                <span className="material-symbols-outlined text-blue-400 group-hover:scale-125 transition-transform">water_drop</span>
                <span className="font-label-sm text-label-sm mt-2 uppercase">Water</span>
              </div>
              {/* Wood */}
              <div className="flex flex-col items-center group">
                <div className="h-32 w-4 bg-surface-container-highest rounded-full overflow-hidden mb-4 border border-outline-variant/30">
                  <div className="bg-green-500 w-full mt-auto h-[85%] shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
                </div>
                <span className="material-symbols-outlined text-green-400 group-hover:scale-125 transition-transform">park</span>
                <span className="font-label-sm text-label-sm mt-2 uppercase">Wood</span>
              </div>
              {/* Metal */}
              <div className="flex flex-col items-center group">
                <div className="h-32 w-4 bg-surface-container-highest rounded-full overflow-hidden mb-4 border border-outline-variant/30">
                  <div className="bg-primary w-full mt-auto h-[95%] shadow-[0_0_15px_rgba(167,209,166,0.5)]"></div>
                </div>
                <span className="material-symbols-outlined text-primary group-hover:scale-125 transition-transform">diamond</span>
                <span className="font-label-sm text-label-sm mt-2 uppercase">Metal</span>
              </div>
              {/* Earth */}
              <div className="flex flex-col items-center group">
                <div className="h-32 w-4 bg-surface-container-highest rounded-full overflow-hidden mb-4 border border-outline-variant/30">
                  <div className="bg-yellow-700 w-full mt-auto h-[55%] shadow-[0_0_15px_rgba(161,98,7,0.5)]"></div>
                </div>
                <span className="material-symbols-outlined text-yellow-700 group-hover:scale-125 transition-transform">terrain</span>
                <span className="font-label-sm text-label-sm mt-2 uppercase">Earth</span>
              </div>
            </div>
            <p className="mt-8 font-body-md text-on-surface-variant/80 italic text-center max-w-md">
              Your Metal and Wood energies are exceptionally high, creating a dynamic tension between structure and growth.
            </p>
          </div>

          {/* Summary Mini Cards */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="glass-card p-6 rounded-xl flex items-center gap-4 hover:border-primary/40 transition-colors cursor-pointer">
              <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
                <span className="material-symbols-outlined text-primary">balance</span>
              </div>
              <div>
                <h4 className="font-headline-md text-[18px]">Harmony Score</h4>
                <p className="text-primary font-bold text-2xl">88/100</p>
              </div>
            </div>
            <div className="glass-card p-6 rounded-xl flex flex-col flex-1 justify-center">
              <span className="font-label-sm text-label-sm text-tertiary mb-2 uppercase">Critical Insight</span>
              <h4 className="font-headline-md text-[20px] mb-2">Wood Over Metal</h4>
              <p className="font-body-md text-sm text-on-surface-variant/80">
                Excess wood energy suggests great creativity but potential for mental exhaustion. Balance with grounded Earth rituals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="sage-divider">
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Three Pillars Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Your Nature */}
        <div className="glass-card p-8 rounded-xl group hover:-translate-y-2 transition-transform duration-300">
          <div className="mb-6 relative overflow-hidden rounded-lg h-48">
            <img 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" 
              alt="Golden dragon scales macro" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo7-4EzU_x9pLLHYnirVJ4Qg_J1R80hZH65jrTLuKV4ZZxTqN5yf9hU5sEA5NXlrxrysONHY6DlH0PZUCTINfnhtpe2lCPWmoAEcd5UIaOFyHdLrAgNA1Tae7s4G6aEjli6V6osaEYjJ3FdLIjoMA3m7chMPswqGTSiTtCJ-Fb1chqFwwXscDGpxzDT1xxDNR92dgrYWrg7yCDt-OwlKP5RNR4AZt1ECRDchaQPJzWpcbesL1pwgSjsJu-wDdD2kROXOeBd9A5SbN7"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
            <span className="absolute bottom-4 left-4 font-headline-md text-xl">Your Nature</span>
          </div>
          <p className="font-body-md text-on-surface-variant mb-6">
            You possess the 'Cold Steel' quality—principled, sharp-witted, and loyal. Your path is one of refining the raw materials of life into works of art.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-surface-container-high px-3 py-1 rounded-full text-[10px] font-label-md border border-outline-variant/40">ANALYTICAL</span>
            <span className="bg-surface-container-high px-3 py-1 rounded-full text-[10px] font-label-md border border-outline-variant/40">RESILIENT</span>
          </div>
        </div>

        {/* Career Path */}
        <div className="glass-card p-8 rounded-xl group hover:-translate-y-2 transition-transform duration-300">
          <div className="mb-6 relative overflow-hidden rounded-lg h-48">
            <img 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" 
              alt="Traditional scholar's workspace" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJfZevUq2G8tJ8HaiRLEBCLW1mb8HcepIG9LGFRnqXMLO_q2ShJc4jWqPc4HKGJNYm2F9_TD4STnFcATMjHyGniDGxIwZzFGU_YUWPZBXDb5bV5DEk_N-nJxgOTGbUL4J9hEWX1ZuEMjWjAeoYRLKR6_nijBYaD4YUONPxUQssG-ioAU_pH3ihabSK2fl13p9LbiSYtRCShUKAiGRPx-HrxcH6b3QQrbDKmW9G-a-uRTpC_XLoD6Ky51PV8X3G9Hr4F_VFdP_-gwWM"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
            <span className="absolute bottom-4 left-4 font-headline-md text-xl">Career Path</span>
          </div>
          <p className="font-body-md text-on-surface-variant mb-6">
            Alignment with the 'Metal' pillar suggests success in finance, architecture, or executive leadership where decisiveness is paramount.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-label-md border border-primary/30">LEADERSHIP</span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-label-md border border-primary/30">STRATEGY</span>
          </div>
        </div>

        {/* Fortune Forecast */}
        <div className="glass-card p-8 rounded-xl group hover:-translate-y-2 transition-transform duration-300 border-primary/30">
          <div className="mb-6 relative overflow-hidden rounded-lg h-48">
            <img 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" 
              alt="Cosmic sky and constellations" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9CRqMBS-qlCvRWFtbRZXjw67n4I6tr5DzlzvBQzwSPMBLrJRQLr0SqudZdy3N1SV9fmgBf1_ir5M5AIfNGb04ZoJ723_grPEQiEh0BP0ZcOhwxbWavR2NBuvPEgDkYE5QI4MvWjzYi6aYq8MG6169rYPn-OPdj3sPmE1Kq7CjNb3dOGIrB4DkKOQ56mPdam6VvBk3XjXkmuFemziQYTWgeR8dX-IOUTJ52LN-t5XsP-0VuLMh855TSJ0WOzZCwUEIX4aoxclUpAlF"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
            <span className="absolute bottom-4 left-4 font-headline-md text-xl">Fortune Forecast</span>
          </div>
          <p className="font-body-md text-on-surface-variant mb-6">
            The upcoming season brings the 'Triple Harmony' configuration. It is an auspicious time for investments and expanding your social circle.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-tertiary/10 text-tertiary px-3 py-1 rounded-full text-[10px] font-label-md border border-tertiary/30">AUSPICIOUS</span>
            <span className="bg-tertiary/10 text-tertiary px-3 py-1 rounded-full text-[10px] font-label-md border border-tertiary/30">GROWTH</span>
          </div>
        </div>
      </section>

      {/* Detailed Forecast Card */}
      <section className="glass-card p-12 rounded-xl mb-12 border-primary/10 relative overflow-hidden">
        <div className="absolute left-0 bottom-0 opacity-5 pointer-events-none translate-y-1/4 -translate-x-1/4">
          <span className="material-symbols-outlined text-[300px]">cloud</span>
        </div>
        <div className="relative z-10 flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-outline-variant/30 pb-8 md:pb-0 md:pr-12">
            <h3 className="font-headline-md text-headline-md text-primary mb-4">Lunar Cycle Guidance</h3>
            <div className="flex items-end gap-2 mb-2">
              <span className="font-headline-lg text-headline-lg leading-none">Waxing</span>
              <span className="font-label-md text-on-surface-variant pb-1 uppercase tracking-widest">Gibbous</span>
            </div>
            <p className="font-body-md text-on-surface-variant/80">
              Energy is building. Now is the time for action rather than contemplation. Avoid the 'Three Shas' by remaining calm in conflict.
            </p>
          </div>
          <div className="md:w-2/3">
            <h4 className="font-headline-md text-xl mb-6">Weekly Flux Map</h4>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="font-label-sm w-12 opacity-50 uppercase">Mon</span>
                <div className="flex-1 h-2 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-2/3"></div>
                </div>
                <span className="font-label-sm text-primary uppercase">High</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-label-sm w-12 opacity-50 uppercase">Wed</span>
                <div className="flex-1 h-2 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-1/4"></div>
                </div>
                <span className="font-label-sm text-on-surface-variant uppercase">Rest</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-label-sm w-12 opacity-50 uppercase">Fri</span>
                <div className="flex-1 h-2 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-full shadow-[0_0_10px_rgba(167,209,166,0.5)]"></div>
                </div>
                <span className="font-label-sm text-primary uppercase">Peak</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
