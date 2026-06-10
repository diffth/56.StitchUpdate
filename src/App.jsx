import React, { useState } from 'react';
import ConsultAMaster from './components/ConsultAMaster';
import YourDestinyRevealed from './components/YourDestinyRevealed';

export default function App() {
  // 기본적으로 'destiny' (사주 분석 결과) 화면이 첫 화면으로 뜹니다.
  const [activeTab, setActiveTab] = useState('destiny');

  return (
    <div className="font-body-md text-on-surface min-h-screen">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/20 flex items-center justify-between px-margin-mobile md:px-margin-desktop h-16">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('destiny')}>
          <span className="material-symbols-outlined text-primary text-2xl">compost</span>
          <h1 className="font-headline-md text-headline-md text-primary tracking-widest uppercase">Saju Dosa</h1>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <button
            onClick={() => setActiveTab('destiny')}
            className={`font-label-md text-label-md transition-colors ${
              activeTab === 'destiny'
                ? 'text-primary bg-primary-container/20 rounded-xl px-3 py-1 font-bold'
                : 'text-on-surface-variant/70 hover:text-primary'
            }`}
          >
            Destiny
          </button>
          <button
            onClick={() => setActiveTab('consult')}
            className={`font-label-md text-label-md transition-colors ${
              activeTab === 'consult'
                ? 'text-primary bg-primary-container/20 rounded-xl px-3 py-1 font-bold'
                : 'text-on-surface-variant/70 hover:text-primary'
            }`}
          >
            Consult
          </button>
          <a
            className="font-label-md text-label-md text-on-surface-variant/70 hover:text-primary transition-colors"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert('준비 중인 페이지입니다! 😉');
            }}
          >
            Guidance
          </a>
        </nav>
        <button 
          className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors"
          onClick={() => alert('새로운 알림이 없습니다. ✨')}
        >
          notifications
        </button>
      </header>

      {/* Main Content Area */}
      <main className="pt-24 pb-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {activeTab === 'destiny' ? <YourDestinyRevealed /> : <ConsultAMaster />}
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 w-full z-50 rounded-t-xl bg-surface-container-highest/90 backdrop-blur-md border-t border-outline-variant/10 flex justify-around items-center h-20 px-2 pb-safe shadow-lg shadow-surface-container-lowest">
        <a
          className="flex flex-col items-center justify-center text-on-surface-variant/70 hover:text-primary transition-all group"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            alert('홈 화면은 준비 중입니다! 분석(Readings) 또는 상담(Consult)을 이용해 주세요. 💫');
          }}
        >
          <span className="material-symbols-outlined mb-1">home_mini</span>
          <span className="font-label-sm text-label-sm uppercase">Home</span>
        </a>
        
        <button
          onClick={() => setActiveTab('destiny')}
          className={`flex flex-col items-center justify-center transition-all px-4 py-2 rounded-xl ${
            activeTab === 'destiny'
              ? 'text-primary bg-primary-container/20 scale-95 font-bold'
              : 'text-on-surface-variant/70 hover:text-primary'
          }`}
        >
          <span 
            className="material-symbols-outlined mb-1"
            style={activeTab === 'destiny' ? { fontVariationSettings: "'FILL' 1" } : {}}
          >
            auto_awesome
          </span>
          <span className="font-label-sm text-label-sm uppercase">Readings</span>
        </button>

        <button
          onClick={() => setActiveTab('consult')}
          className={`flex flex-col items-center justify-center transition-all px-4 py-2 rounded-xl ${
            activeTab === 'consult'
              ? 'text-primary bg-primary-container/20 scale-95 font-bold'
              : 'text-on-surface-variant/70 hover:text-primary'
          }`}
        >
          <span 
            className="material-symbols-outlined mb-1"
            style={activeTab === 'consult' ? { fontVariationSettings: "'FILL' 1" } : {}}
          >
            groups
          </span>
          <span className="font-label-sm text-label-sm uppercase">Consult</span>
        </button>

        <a
          className="flex flex-col items-center justify-center text-on-surface-variant/70 hover:text-primary transition-all group"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            alert('마이페이지(Profile)는 준비 중입니다! 😉');
          }}
        >
          <span className="material-symbols-outlined mb-1">person</span>
          <span className="font-label-sm text-label-sm uppercase">Profile</span>
        </a>
      </nav>
    </div>
  );
}
