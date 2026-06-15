import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CircleCheck as CheckCircle, Clock, Zap, Shield } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { useCountdown } from '@/hooks/use-countdown';

const StrategicPricing: React.FC = () => {
  const { countdown } = useCountdown();
  
  const features = [
    "10 video lezioni step-by-step (2 ore totali)",
    "Template pronti per ogni settore",
    "Prompt AI ottimizzati per landing page",
    "Guida copywriting che converte",
    "Checklist di ottimizzazione mobile",
    "Supporto community Telegram",
    "Aggiornamenti gratuiti a vita"
  ];
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <Badge variant="limited" className="mb-4">
            ⚡ SOLO OGGI - PREZZO LANCIO
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tutto questo a soli €27,97
          </h2>
          <p className="text-xl text-muted-foreground">
            Un piccolo investimento per una competenza che ti accompagnerà per sempre
          </p>
        </div>
        
        {/* Main Pricing Card */}
        <div className="conversion-card max-w-md mx-auto bg-gradient-to-br from-background to-muted/30 border-2 border-secondary/20">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="price-crossed">€49,99</span>
              <Badge variant="secondary" className="text-xs">-44%</Badge>
            </div>
            <div className="price-display">
              €<AnimatedCounter from={49} to={27} duration={2000} />,97
            </div>
            <p className="text-muted-foreground mt-2">Pagamento unico • Accesso per sempre</p>
          </div>
          
          {/* Features List */}
          <div className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>
          
          {/* Main CTA */}
          <Button variant="secondary" size="lg" className="w-full mb-4" onClick={(e) => e.preventDefault()}>
            Sì, voglio imparare - Acquista il corso
          </Button>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-4 text-center text-xs text-muted-foreground">
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-4 h-4 text-secondary" />
              <span>Garanzia 30gg</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Zap className="w-4 h-4 text-secondary" />
              <span>Accesso immediato</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Clock className="w-4 h-4 text-secondary" />
              <span>Disponibile 24/7</span>
            </div>
          </div>
        </div>
        
        {/* Additional Urgency */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-lg border border-secondary/20">
            <Clock className="w-4 h-4 text-secondary" />
            <p className="text-sm font-semibold text-secondary">
              Offerta scade tra: {countdown.displayTime}
            </p>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Dopo tornerà al prezzo pieno di €49,99
          </p>
        </div>
      </div>
    </section>
  );
};

export default StrategicPricing;
