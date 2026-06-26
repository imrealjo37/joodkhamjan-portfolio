import {
  PerformanceComparisonVisual,
  MultimodalArchitectureVisual,
  ImbalanceStrategyVisual,
} from './Visuals/MindWatchVisuals';

import {
  EduLaptopRAGPipelineVisual,
  EduLaptopEvaluationVisual,
} from './Visuals/EduLaptopVisual';

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

    case 'edulaptop-rag-pipeline':
      return <EduLaptopRAGPipelineVisual />;

    case 'edulaptop-evaluation':
      return <EduLaptopEvaluationVisual />;

    default:
      return null;
  }
}