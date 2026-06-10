import React, { useState } from 'react';

export default function ConsultAMaster() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filters = [
    { id: 'ALL', label: 'ALL MASTERS' },
    { id: 'CAREER', label: 'CAREER & WEALTH' },
    { id: 'LOVE', label: 'LOVE & HARMONY' },
    { id: 'LUCK', label: 'NEW YEAR LUCK' },
  ];

  return (
    <div className="relative">
      {/* Hero Intro Section */}
      <section className="mb-16 text-center">
        <h2 className="font-display-lg text-display-lg text-primary mb-4 italic">
          Guided by Ancient Stars
        </h2>
        <p className="max-w-2xl mx-auto text-on-surface-variant/80 font-body-lg text-body-lg">
          Connect with Korea's most revered Saju masters. Unlock the secrets of your birth chart and find clarity in career, love, and life path.
        </p>
        <div className="sage-divider">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      {/* Masters Filter/Chips */}
      <section className="mb-12 flex flex-wrap justify-center gap-3">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-6 py-2 font-label-md text-label-md rounded-none tracking-widest transition-all ${
              activeFilter === filter.id
                ? 'bg-primary text-on-primary shadow-lg shadow-primary/10'
                : 'border border-outline-variant/30 text-on-surface-variant hover:border-primary'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </section>

      {/* Saju Masters List (Asymmetric Bento Grid) */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-20">
        {/* Master Card 1 */}
        <div className="md:col-span-8 glass-card hanji-texture rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center md:items-stretch">
          <div className="relative w-48 h-48 md:w-64 md:h-auto min-h-[250px] shrink-0 overflow-hidden rounded-lg">
            <img
              alt="Master Myeong-ja"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzgW9gxorj0IFwOENpC8cse6csV46RqTeAXHQd7hrenwRP0qz78K4__75w855qL5aDQmAGH1gswm1tT6QfdJ-SIz69NMsGKgBQqsa3sr5vzPnaO4oOMwVhnqdhV2NBCnwrIcW0n6uWseYGPjGLNXAQSnoYhzSL99u-BtM4Uji9Pfdqw0t4eGZPIyW8QN9MDtRUdPWqOCE2RGMmLuJo8_WsXAtUoofjdeiCM-_9pD9DAWIEJUcm-QkZOM0__4USKT92Ulu6VccH52cQ"
            />
            <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 font-label-sm text-label-sm tracking-tighter">
              ELITE MASTER
            </div>
          </div>
          <div className="flex flex-col justify-between flex-1">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline-md text-headline-md text-primary">Master Myeong-ja</h3>
                <div className="flex items-center gap-1 text-primary">
                  <span
                    className="material-symbols-outlined text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="font-label-md text-label-md">4.9 (1.2k)</span>
                </div>
              </div>
              <p className="text-secondary font-label-sm text-label-sm mb-4 tracking-[0.2em] uppercase">
                Specialty: Global Career &amp; Wealth Strategy
              </p>
              <p className="text-on-surface-variant/80 font-body-md text-body-md mb-6 leading-relaxed italic">
                "The flow of capital is like the flow of water; it follows the path of least resistance in your elemental alignment."
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-2 py-1 bg-surface-container-high text-on-surface-variant text-label-sm font-label-sm rounded uppercase">
                  WOOD
                </span>
                <span className="px-2 py-1 bg-surface-container-high text-on-surface-variant text-label-sm font-label-sm rounded uppercase">
                  EARTH
                </span>
              </div>
            </div>
            <button className="w-full md:w-auto px-10 py-4 bg-primary text-on-primary font-label-md text-label-md rounded-none transition-all hover:shadow-[0_0_15px_rgba(167,209,166,0.3)] active:scale-95">
              BOOK PRIVATE SESSION
            </button>
          </div>
        </div>

        {/* Master Card 2 */}
        <div className="md:col-span-4 glass-card hanji-texture rounded-xl p-6 flex flex-col justify-between">
          <div>
            <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-lg">
              <img
                alt="Sage Ji-hye"
                className="w-full h-full object-cover brightness-90 hover:brightness-100 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjLSyrlTCFsfpN_dsFT7oaCmdUNuS_Js_Pj8eRP87NwtEAd4ROvQJE2PKx1uZla1TGXJ91z9S-yvAODebJw2W5xcef5voThk9AKButMbf_9mWduamBRzJfitbgFEsBk8Ei1VloS3-lheN_ekQETcyWZvRzOHaF8QXnifTxBGhf3HkLASlg4VGDdXXFTf1CKySKW3o_wpL9VzbCMG41hxh9ysZhXa-uDmH1oZmDA39aGc0A8QCSOE1MSyGMH4YOa6dtokkNB6rc4HkM"
              />
            </div>
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-headline-md text-headline-md text-primary">Sage Ji-hye</h3>
              <div className="flex items-center gap-1 text-primary">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span className="font-label-md text-label-md">5.0</span>
              </div>
            </div>
            <p className="text-secondary font-label-sm text-label-sm mb-4 tracking-[0.2em] uppercase">
              Specialty: Relationship Harmony
            </p>
            <p className="text-on-surface-variant/70 font-body-md text-body-md line-clamp-3 mb-6">
              Expert in Gunghap (compatibility) and emotional resilience through the Five Elements.
            </p>
          </div>
          <button className="w-full py-3 border border-primary text-primary font-label-md text-label-md rounded-none hover:bg-primary/10 transition-all active:scale-95">
            CHECK AVAILABILITY
          </button>
        </div>

        {/* Master Card 3 */}
        <div className="md:col-span-4 glass-card hanji-texture rounded-xl p-6 flex flex-col justify-between">
          <div>
            <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-lg">
              <img
                alt="Seer Tae-ho"
                className="w-full h-full object-cover contrast-125 hover:contrast-100 transition-all"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLkc2rYVQgKQ3Eh2PAESdjI9xsGzSnJmXvuoy1sN0reHpaoiEVoGci0jx_gximIvy-GVXFBh1GCeGe9Qojvjggdn9mGiqqdMQNQfQmHbmySoXqhCSUjW-jfyNIhJdCsjdkYAUFYRiaC43J7sbosuRoeBEF5or3CDnTs0R_cVQC6tclNRUFq9O-RiYAic-T25U5lTon_magCeHuaToAeSwS7jxmmq0zxj1sFlLwVnvJAVHL2DBYsFBipM0Wjnqe6dkBk6yQAEDduNjM"
              />
            </div>
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-headline-md text-headline-md text-primary">Seer Tae-ho</h3>
              <div className="flex items-center gap-1 text-primary">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span className="font-label-md text-label-md">4.8</span>
              </div>
            </div>
            <p className="text-secondary font-label-sm text-label-sm mb-4 tracking-[0.2em] uppercase">
              Specialty: Strategic Timing
            </p>
            <p className="text-on-surface-variant/70 font-body-md text-body-md line-clamp-3 mb-6">
              Finding the perfect date for major life events—weddings, business launches, and moves.
            </p>
          </div>
          <button className="w-full py-3 border border-primary text-primary font-label-md text-label-md rounded-none hover:bg-primary/10 transition-all active:scale-95">
            RESERVE TIME
          </button>
        </div>

        {/* Master Card 4 */}
        <div className="md:col-span-8 glass-card hanji-texture rounded-xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h3 className="font-headline-md text-headline-md text-primary mb-2">Elder Shin-don</h3>
            <p className="text-secondary font-label-sm text-label-sm mb-4 tracking-[0.2em] uppercase">
              The Grand Patriarch of Saju
            </p>
            <p className="text-on-surface-variant/80 font-body-md text-body-md mb-8 leading-relaxed">
              With over 50 years of experience in mountain temples, Elder Shin-don provides the most profound life-path readings available in the modern world.
            </p>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-primary font-headline-md text-headline-md">15k+</p>
                <p className="text-label-sm font-label-sm text-on-surface-variant/50">READINGS</p>
              </div>
              <div className="w-px h-8 bg-outline-variant/30"></div>
              <div className="text-center">
                <p className="text-primary font-headline-md text-headline-md">50yr</p>
                <p className="text-label-sm font-label-sm text-on-surface-variant/50">EXPERIENCE</p>
              </div>
            </div>
            <button className="mt-8 px-8 py-4 bg-primary text-on-primary font-label-md text-label-md rounded-none transition-all hover:shadow-[0_0_15px_rgba(167,209,166,0.3)] active:scale-95 self-start">
              BOOK ELDER SESSION
            </button>
          </div>
          <div className="md:w-1/2 relative h-64 md:h-auto">
            <img
              alt="Mountain Temple"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB96TgpO4qKcDMoo3jq4cOTxLkKMjzoTj2lrLGsYbW8L1wmCuGUwIsFzupkO1TPHv5f8Jq9am9tkmJ9hRqBb7uEtNVBOj_6fRZWVZwgeuOv9DX7zwuhP8lBzvwOKARRplu2BxQgOLtptiLdcKIbFTBmCNUWfyAy2---PWOOLYjvlTEEUyUjyPfYTPbqGcjylqcRRWPoVmqt2Xf1PdigQdWK-z63wUAI72TcDDdCCY5qx6kSoBukcZSVMWN0g9hXq7MWEEJUx0r0CNd3"
            />
          </div>
        </div>
      </section>

      {/* Sage Wisdom Section (Featured Articles) */}
      <section className="mt-32">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-headline-md text-headline-md text-primary mb-2 italic">Sage Wisdom</h2>
            <p className="text-on-surface-variant/60 font-label-sm text-label-sm tracking-wide uppercase">
              Insights into Korean Mysticism
            </p>
          </div>
          <a
            className="font-label-md text-label-md text-primary border-b border-primary pb-1 hover:opacity-70 transition-opacity"
            href="#"
          >
            READ ALL ARTICLES
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Article 1 */}
          <article className="group cursor-pointer">
            <div className="relative overflow-hidden mb-6 aspect-[4/5] rounded-lg">
              <img
                alt="Five Elements"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7FxcgnyFOtUHcue0Yk9UQWuUJJcnzlX7HVj46aDuYblKICrx8UV5lNsN2uon8cXMq40TORkE63C1tJgnpDN_anPE4wt1EmnDTz4M0MdOe3FGwfCS2lfZG949EMgqn514t1s3nGgB314U_94OySiBc0UNFU7NtAm7i9zkbOW17KTiWZpEiCtbcY4ybuNPloyMObDFHDd96RYc78RcUi06hFimghaLcxyk7oI-kLN-hplgLSplRqKOhuKHBk5EkFI7n592wnOL0xS_w"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6">
                <span className="px-3 py-1 bg-primary/20 backdrop-blur-md text-primary font-label-sm text-label-sm tracking-widest border border-primary/20">
                  PHILOSOPHY
                </span>
              </div>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-primary transition-colors">
              Decoding the Five Elements in Your Daily Routine
            </h3>
            <p className="text-on-surface-variant/70 font-body-md text-body-md line-clamp-2">
              Learn how to balance your inner energy by aligning your environment with your dominant Saju element.
            </p>
          </article>

          {/* Article 2 */}
          <article className="group cursor-pointer">
            <div className="relative overflow-hidden mb-6 aspect-[4/5] rounded-lg">
              <img
                alt="Moonlight Consultation"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA72jlrDEDv0v5MO9L5-upyEYevOIcPCHZMEGMIUOXFDvelMM_Mbu3wG9YFBeRK_-fAhd-H6i1NgVZGZKhoajwaMahtrS-nA_WEuIsQ7_rxJe53BddsVQA9vNGzeuw-gfXHxVPbz117keBYyu5-4W0RLFlV9DpTBkOipU05xfKnilVbDaz1T_1T9Wbk4UYj8xRr42kSEL9JPFnGBSc4n_9wrbi46w3nIUuP2KZj_Ne-vufoKiiStZ33sGpHSUxJ5JPFEsdcNExfgHfr"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6">
                <span className="px-3 py-1 bg-primary/20 backdrop-blur-md text-primary font-label-sm text-label-sm tracking-widest border border-primary/20">
                  PRACTICE
                </span>
              </div>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-primary transition-colors">
              The Art of the Silent Consultation
            </h3>
            <p className="text-on-surface-variant/70 font-body-md text-body-md line-clamp-2">
              Why the most profound insights are often found in the silence between a Master's words.
            </p>
          </article>

          {/* Article 3 */}
          <article className="group cursor-pointer">
            <div className="relative overflow-hidden mb-6 aspect-[4/5] rounded-lg">
              <img
                alt="Gureum Pattern"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeTh1JKagNpNsK6sssX9sofXloR4W8Nh5ZES6c5r0w9ymn5VK-ehwfthw3tk7tNEuspfuZyqxkB_dJm--tv3TkoGQoNY1PEP0UfwwCc2HuqrfbN6yuqOD0sbWmuJQ0-_6gsLY0czAT5xpnaIoOkOgdULhjNRWSDeJuPSiP4qi873XnTM0Lpwre_4azt-dUlJFyANBF98t4yjcqRHnruUK0qdW4HJQabOAH5uLYnbof2mWdy6MNqp8a1DlDLHyyx5R75CvtfeUViOHD"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6">
                <span className="px-3 py-1 bg-primary/20 backdrop-blur-md text-primary font-label-sm text-label-sm tracking-widest border border-primary/20">
                  SYMBOLS
                </span>
              </div>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-primary transition-colors">
              Visual Omens: Traditional Patterns
            </h3>
            <p className="text-on-surface-variant/70 font-body-md text-body-md line-clamp-2">
              Every curve of a cloud and brushstroke of a mountain carries meaning in the seeker's journey.
            </p>
          </article>
        </div>
      </section>

      {/* Background Decoration */}
      <div className="fixed top-0 right-0 -z-10 w-1/3 h-1/2 opacity-10 pointer-events-none rotate-12 translate-x-20 -translate-y-20">
        <img
          alt="Cloud Pattern Watermark"
          className="w-full h-full object-contain"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcZ6aIzeWosZC82M23Dtfksz4v3aZMRV16dIWoTQpMce4zDgSlGNKXvI4rRbrbVfqYfBUg8zs9uthpeESbhnw8TYqj24PpQ1B7AmivsxZCWss_treFYX1SlO3wk-dZQ3jmpukxmUZpUszIFtOqUU6ky7qfV9qSFK4U70KUvlfE6DhrQnMTmoO0R-ZO0-he7EHikB6vuSL8u9cRjzz8zOEpWDq1caFHoqA7oEINTj92uFlkUGa0GTzfNnKoA2w9r4cKPeqLPe9zNlD2"
        />
      </div>
    </div>
  );
}
