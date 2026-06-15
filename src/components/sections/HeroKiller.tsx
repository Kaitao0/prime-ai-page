import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { useCountdown } from '@/hooks/use-countdown';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';

const HeroKiller: React.FC = () => {
  const { countdown } = useCountdown();
  
  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(10, 14, 26)"
      gradientBackgroundEnd="rgb(20, 24, 36)"
      firstColor="18, 113, 255"
      secondColor="221, 74, 255"
      thirdColor="100, 220, 255"
      fourthColor="200, 50, 50"
      fifthColor="180, 180, 50"
      pointerColor="140, 100, 255"
      size="80%"
      blendingValue="hard-light"
      interactive={false}
    >
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* MOBILE: Flex Column Layout | DESKTOP: Grid Layout */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start lg:items-center">
            
            {/* 1. Badge + Title + Subtitle - SEMPRE PRIMO */}
            <div className="order-1 lg:order-2 w-full space-y-6 sm:space-y-8" data-aos="fade-right">
              <Badge variant="default" className="w-fit bg-primary/20 text-primary border border-primary/30">
                🚀 OFFERTA LIMITATA
              </Badge>
              
              <h1 className="hero-title">
                Questa landing page è stata creata con l'AI. Vuoi imparare a farlo anche tu?
              </h1>
              
              <p className="hero-subtitle">
                Il corso Prime AI è pratico e completo per creare landing page efficaci in soli 10 mini lezioni, anche se parti da zero
              </p>
            </div>

            {/* 2. Value Props ("Zero codice") - SECONDO SU MOBILE */}
            <div className="order-2 lg:order-2 w-full" data-aos="fade-up">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="conversion-card text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">€27,97</div>
                  <div className="text-sm text-muted-foreground">Investimento minimo</div>
                </div>
                <div className="conversion-card text-center">
                  <div className="text-2xl font-bold text-primary mb-1">10 lezioni</div>
                  <div className="text-sm text-muted-foreground">Solo 2 ore totali</div>
                </div>
                <div className="conversion-card text-center">
                  <div className="text-2xl font-bold text-foreground mb-1">Zero codice</div>
                  <div className="text-sm text-muted-foreground">Anche per principianti</div>
                </div>
              </div>
            </div>

            {/* 3. Hero Image - TERZO SU MOBILE (tra Zero codice e pricing) */}
            <div className="order-3 lg:order-1 w-full max-w-lg mx-auto lg:max-w-none" data-aos="fade-left">
              <img 
                src="https://vg-bunny-cdn.b-cdn.net/public/x0hdoi7c_.png"
                alt="Persona che lavora al computer con AI"
                className="w-full h-auto rounded-lg shadow-[var(--shadow-card)]"
                loading="eager"
              />
            </div>

            {/* 4. Pricing Card - QUARTO SU MOBILE (ultimo) */}
            <div className="order-4 lg:order-2 w-full" data-aos="zoom-in">
              <div className="conversion-card bg-muted/50 max-w-lg mx-auto lg:mx-0">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="price-crossed">€49,99</span>
                  <div className="price-display">
                    €<AnimatedCounter from={49} to={27} duration={1500} />,97
                  </div>
                </div>
                
                <Button variant="secondary" size="lg" className="w-full mb-4" onClick={(e) => e.preventDefault()}>
                  Inizia ora - Accedi al corso
                </Button>
                
                <p className="text-sm text-center text-muted-foreground mb-4">
                  Accesso immediato • Nessuna competenza tecnica richiesta
                </p>
                
                <div className="text-center p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                  <p className="text-secondary font-semibold text-sm">
                    Offerta scade tra: <span className="font-bold">{countdown.displayTime}</span>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </BackgroundGradientAnimation>
  );
};

export default HeroKiller;
