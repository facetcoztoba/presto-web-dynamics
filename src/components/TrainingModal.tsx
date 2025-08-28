import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

interface TrainingData {
  title: string;
  subtitle: string;
  description: string;
  details: string;
  outcome: string;
  fullProgram: string;
  targetGroup: string;
  participationConditions: string;
  organizationalConditions: string;
  groupSize: string;
  duration: string;
  location: string;
  price: string;
  funding: string;
}

interface TrainingModalProps {
  isOpen: boolean;
  onClose: () => void;
  training: TrainingData | null;
}

const TrainingModal: React.FC<TrainingModalProps> = ({ isOpen, onClose, training }) => {
  if (!training) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[85vh] p-0">
        <DialogHeader className="p-6 pb-4">
          <div className="space-y-2">
            <DialogDescription className="text-primary-light font-semibold text-sm uppercase tracking-wider">
              {training.subtitle}
            </DialogDescription>
            <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
              {training.title}
            </DialogTitle>
          </div>
        </DialogHeader>
        
        <ScrollArea className="flex-1 px-6 pb-6">
          <div className="space-y-8">
            {/* Ramowy program */}
            <section>
              <h3 className="text-xl font-bold text-primary mb-4">Ramowy program</h3>
              <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed">
                <div dangerouslySetInnerHTML={{ __html: training.fullProgram.replace(/\n/g, '<br />').replace(/•/g, '•&nbsp;') }} />
              </div>
            </section>

            <Separator />

            {/* Grupa docelowa */}
            <section>
              <h3 className="text-xl font-bold text-primary mb-4">Grupa docelowa</h3>
              <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed">
                <div dangerouslySetInnerHTML={{ __html: training.targetGroup.replace(/\n/g, '<br />').replace(/•/g, '•&nbsp;') }} />
              </div>
            </section>

            <Separator />

            {/* Warunki uczestnictwa */}
            <section>
              <h3 className="text-xl font-bold text-primary mb-4">Warunki uczestnictwa</h3>
              <p className="text-muted-foreground leading-relaxed">{training.participationConditions}</p>
            </section>

            <Separator />

            {/* Warunki organizacyjne */}
            <section>
              <h3 className="text-xl font-bold text-primary mb-4">Warunki organizacyjne</h3>
              <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed">
                <div dangerouslySetInnerHTML={{ __html: training.organizationalConditions.replace(/\n/g, '<br />') }} />
              </div>
            </section>

            <Separator />

            {/* Szczegóły praktyczne */}
            <section>
              <h3 className="text-xl font-bold text-primary mb-4">Szczegóły szkolenia</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Grupa szkoleniowa</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{training.groupSize}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Czas trwania</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{training.duration}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Miejsce realizacji</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{training.location}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Cena za osobę</h4>
                    <p className="text-primary font-bold text-lg">{training.price}</p>
                  </div>
                </div>
              </div>
            </section>

            <Separator />

            {/* Dofinansowanie */}
            <section className="bg-primary-light/5 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-primary mb-3">Możliwość dofinansowania</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{training.funding}</p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TrainingModal;