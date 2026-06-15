import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, Infinity, Users, Sparkles, Clock } from 'lucide-react';
import { useCountdown } from '@/hooks/use-countdown';

const FinalKiller: React.FC = () => {
  const { countdown } = useCountdown();
  
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <Badge variant="limited" className="mb-6">
          🔥 ULTIMA POSSIBILITÀ
        </Badge>
        
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Pronto a creare landing page efficaci in solo 10 lezioni?
        </h2>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Tra {countdown.displayTime.toLowerCase()} questo prezzo scomparirà per sempre. Non perdere l'occasione di acquisire una competenza che può cambiare il tuo business.
        </p>
        
        {/* Social Proof Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="conversion-card text-center">
            <Users className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">847+</div>
            <div className="text-sm text-muted-foreground">Studenti attivi</div>
          </div>
          <div className="conversion-card text-center">
            <Sparkles className="w-8 h-8 text-secondary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">4.9/5</div>
            <div className="text-sm text-muted-foreground">Valutazione media</div>
          </div>
          <div className="conversion-card text-center">
            <Infinity className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">∞</div>
            <div className="text-sm text-muted-foreground">Accesso a vita</div>
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="conversion-card bg-gradient-to-r from-secondary/10 to-primary/10 border-2 border-secondary/30 max-w-lg mx-auto">
          <div className="space-y-4">
            <div className="text-3xl font-bold text-foreground">Inizia subito per €27,97</div>
            
            <Button variant="secondary" size="lg" className="w-full text-xl py-6" onClick={(e) => e.preventDefault()}>
              Sì, voglio il corso Prime AI
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <div className="text-sm text-muted-foreground space-y-1">
              <p>✅ Solo €27,97 • Accesso immediato • Nessuna competenza richiesta</p>
              <p>✅ Disponibile per sempre • Garanzia 30 giorni • Supporto incluso</p>
            </div>
          </div>
        </div>
        
        {/* Final Guarantees */}
        <div className="grid md:grid-cols-3 gap-4 mt-10 text-sm">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Shield className="w-4 h-4 text-secondary" />
            <span>Garanzia 30 giorni</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span>Pagamenti sicuri</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Infinity className="w-4 h-4 text-secondary" />
            <span>Accesso a vita</span>
          </div>
        </div>
        
        {/* Final Urgency */}
        <div className="mt-8 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-secondary animate-pulse" />
            <p className="text-secondary font-semibold">
              ⏰ Questa offerta scade tra: {countdown.displayTime}
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            Dopo tornerà al prezzo pieno di €49,99. Non aspettare.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalKiller;
