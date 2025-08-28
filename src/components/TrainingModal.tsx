import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Users, 
  CheckCircle, 
  Settings, 
  Clock, 
  MapPin, 
  DollarSign, 
  Award,
  Phone,
  X
} from 'lucide-react';

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
      <DialogContent className="max-w-5xl max-h-[90vh] p-0 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        {/* Enhanced Header with Gradient */}
        <div className="relative bg-gradient-to-r from-primary/90 via-primary to-primary/80 text-primary-foreground">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-glow/20 to-transparent" />
          <div className="relative p-8 pb-6">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-3 flex-1">
                <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  {training.subtitle}
                </Badge>
                <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  {training.title}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-8 space-y-8">
            {/* Program Overview Card */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-bold text-foreground">Ramowy program</h2>
              </div>
              <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed bg-background/50 rounded-lg p-4">
                <div dangerouslySetInnerHTML={{ __html: training.fullProgram.replace(/\n/g, '<br />').replace(/•/g, '• ') }} />
              </div>
            </div>

            {/* Target Group Card */}
            <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl p-6 border border-secondary/20">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-secondary" />
                <h2 className="text-xl font-bold text-foreground">Grupa docelowa</h2>
              </div>
              <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed bg-background/50 rounded-lg p-4">
                <div dangerouslySetInnerHTML={{ __html: training.targetGroup.replace(/\n/g, '<br />').replace(/•/g, '• ') }} />
              </div>
            </div>

            {/* Participation Conditions Card */}
            <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-6 border border-accent/20">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-6 w-6 text-accent" />
                <h2 className="text-xl font-bold text-foreground">Warunki uczestnictwa</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed bg-background/50 rounded-lg p-4">
                {training.participationConditions}
              </p>
            </div>

            {/* Organizational Conditions Card */}
            <div className="bg-gradient-to-br from-muted/20 to-muted/30 rounded-2xl p-6 border border-muted/40">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="h-6 w-6 text-muted-foreground" />
                <h2 className="text-xl font-bold text-foreground">Warunki organizacyjne</h2>
              </div>
              <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed bg-background/50 rounded-lg p-4">
                <div dangerouslySetInnerHTML={{ __html: training.organizationalConditions.replace(/\n/g, '<br />') }} />
              </div>
            </div>

            {/* Training Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {/* Group Size */}
                <div className="bg-background/80 rounded-xl p-4 border border-border/50 hover:shadow-md transition-all duration-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Grupa szkoleniowa</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{training.groupSize}</p>
                </div>

                {/* Duration */}
                <div className="bg-background/80 rounded-xl p-4 border border-border/50 hover:shadow-md transition-all duration-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="h-5 w-5 text-secondary" />
                    <h3 className="font-semibold text-foreground">Czas trwania</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{training.duration}</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Location */}
                <div className="bg-background/80 rounded-xl p-4 border border-border/50 hover:shadow-md transition-all duration-200">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="h-5 w-5 text-accent" />
                    <h3 className="font-semibold text-foreground">Miejsce realizacji</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{training.location}</p>
                </div>

                {/* Price */}
                <div className="bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl p-4 border border-primary/30 hover:shadow-md transition-all duration-200">
                  <div className="flex items-center gap-3 mb-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Cena za osobę</h3>
                  </div>
                  <p className="text-primary font-bold text-xl">{training.price}</p>
                </div>
              </div>
            </div>

            {/* Funding Section */}
            <div className="bg-gradient-to-br from-primary/10 via-primary-glow/5 to-primary/5 rounded-2xl p-6 border border-primary/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-primary">Możliwość dofinansowania</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{training.funding}</p>
                
                {/* CTA Button */}
                <Button className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 group">
                  <Phone className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                  Skontaktuj się z nami
                </Button>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TrainingModal;