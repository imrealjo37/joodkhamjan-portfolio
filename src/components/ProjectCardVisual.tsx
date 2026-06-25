import {
  PerformanceComparisonVisual,
  MultimodalArchitectureVisual,
  ImbalanceStrategyVisual,
} from './Visuals/MindWatchVisuals';

interface ProjectCardVisualProps {
  visualKey?: string;
}

export default function ProjectCardVisual({
  visualKey,
}: ProjectCardVisualProps) {
  switch (visualKey) {
    case 'mindwatch-performance':
      return <PerformanceComparisonVisual />;

    case 'mindwatch-architecture':
      return <MultimodalArchitectureVisual />;

    case 'mindwatch-imbalance':
      return <ImbalanceStrategyVisual />;

    default:
      return null;
  }
}