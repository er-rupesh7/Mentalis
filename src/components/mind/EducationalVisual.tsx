'use client';

import React, { useState } from 'react';
import {
  Image as ImageIcon,
  Info,
  Maximize2,
  ExternalLink,
  Shield,
  Layers,
  GitBranch,
  Columns,
  BarChart3,
  Sparkles,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
} from 'lucide-react';
import {
  EducationalVisualData,
  EducationalVisualType,
  FlowchartStep,
  ComparisonGraphicData,
  DiagramNode,
  InfographicMetric,
} from '../../core/mind/types';

interface EducationalVisualProps {
  visual: EducationalVisualData;
  className?: string;
  showCaption?: boolean;
  allowZoom?: boolean;
}

export const EducationalVisual: React.FC<EducationalVisualProps> = ({
  visual,
  className = '',
  showCaption = true,
  allowZoom = true,
}) => {
  const [imageError, setImageError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showCreditsModal, setShowCreditsModal] = useState<boolean>(false);
  const [activeFlowStep, setActiveFlowStep] = useState<number>(1);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const getVisualTypeBadge = (type: EducationalVisualType) => {
    switch (type) {
      case 'hero_image':
        return { label: 'Conceptual Visual', icon: Sparkles, color: 'text-violet-400 bg-violet-950/60 border-violet-700/50' };
      case 'concept_illustration':
        return { label: 'Concept Illustration', icon: Layers, color: 'text-indigo-400 bg-indigo-950/60 border-indigo-700/50' };
      case 'diagram':
        return { label: 'Structural Diagram', icon: GitBranch, color: 'text-cyan-400 bg-cyan-950/60 border-cyan-700/50' };
      case 'flowchart':
        return { label: 'Cognitive Flowchart', icon: GitBranch, color: 'text-amber-400 bg-amber-950/60 border-amber-700/50' };
      case 'comparison_graphic':
        return { label: 'Comparison Graphic', icon: Columns, color: 'text-emerald-400 bg-emerald-950/60 border-emerald-700/50' };
      case 'scenario_illustration':
        return { label: 'Scenario Context', icon: ImageIcon, color: 'text-pink-400 bg-pink-950/60 border-pink-700/50' };
      case 'infographic':
        return { label: 'Research Infographic', icon: BarChart3, color: 'text-teal-400 bg-teal-950/60 border-teal-700/50' };
    }
  };

  const badge = getVisualTypeBadge(visual.type);
  const BadgeIcon = badge.icon;

  // Render native SVG flowchart if data is present
  const renderFlowchart = (steps: FlowchartStep[]) => {
    return (
      <div className="p-4 sm:p-5 bg-slate-950/90 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
          <span className="font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <GitBranch className="w-3.5 h-3.5" />
            Decision Flow Sequence
          </span>
          <span>Click any step to inspect decision logic</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {steps.map((step) => {
            const isActive = activeFlowStep === step.stepNumber;
            return (
              <button
                key={step.stepNumber}
                type="button"
                onClick={() => setActiveFlowStep(step.stepNumber)}
                className={`text-left p-3.5 rounded-xl border transition-all flex flex-col justify-between relative ${
                  isActive
                    ? 'bg-amber-950/30 border-amber-500/70 shadow-lg shadow-amber-950/40 ring-1 ring-amber-500/50'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1.5">
                  <span
                    className={`w-6 h-6 rounded-full text-xs font-mono font-bold flex items-center justify-center shrink-0 ${
                      isActive
                        ? 'bg-amber-500 text-slate-950'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {step.stepNumber}
                  </span>
                  {step.cautionNotice && (
                    <span className="text-[10px] text-rose-400 bg-rose-950/60 border border-rose-800/60 px-1.5 py-0.5 rounded font-mono">
                      Trap Point
                    </span>
                  )}
                </div>

                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-white mb-1">{step.title}</h5>
                  <p className="text-[11px] sm:text-xs text-slate-300 leading-snug">{step.description}</p>
                </div>

                {step.decisionQuestion && (
                  <div className="mt-2.5 pt-2 border-t border-slate-800/80 text-[11px] text-amber-300/90 font-medium italic">
                    &ldquo;{step.decisionQuestion}&rdquo;
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Step Expanded Advice */}
        {steps.find((s) => s.stepNumber === activeFlowStep)?.cautionNotice && (
          <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-800/40 text-rose-200 text-xs flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold mb-0.5">Critical Heuristic Trap:</strong>
              {steps.find((s) => s.stepNumber === activeFlowStep)?.cautionNotice}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Render native comparison graphic
  const renderComparisonGraphic = (comp: ComparisonGraphicData) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Side A */}
        <div className={`p-4 sm:p-5 rounded-2xl border ${
          comp.sideA.isOptimal
            ? 'bg-emerald-950/20 border-emerald-500/40'
            : 'bg-rose-950/20 border-rose-500/40'
        }`}>
          <div className="flex items-center justify-between mb-2">
            <h5 className="font-bold text-sm sm:text-base text-white">{comp.sideA.title}</h5>
            {comp.sideA.badge && (
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase font-bold ${
                comp.sideA.isOptimal
                  ? 'bg-emerald-900/60 text-emerald-300 border-emerald-600/60'
                  : 'bg-rose-900/60 text-rose-300 border-rose-600/60'
              }`}>
                {comp.sideA.badge}
              </span>
            )}
          </div>
          <ul className="space-y-2 mt-3">
            {comp.sideA.points.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                  comp.sideA.isOptimal ? 'bg-emerald-400' : 'bg-rose-400'
                }`} />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Side B */}
        <div className={`p-4 sm:p-5 rounded-2xl border ${
          comp.sideB.isOptimal
            ? 'bg-emerald-950/20 border-emerald-500/40'
            : 'bg-slate-900/60 border-slate-800'
        }`}>
          <div className="flex items-center justify-between mb-2">
            <h5 className="font-bold text-sm sm:text-base text-white">{comp.sideB.title}</h5>
            {comp.sideB.badge && (
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase font-bold ${
                comp.sideB.isOptimal
                  ? 'bg-emerald-900/60 text-emerald-300 border-emerald-600/60'
                  : 'bg-slate-800 text-slate-300 border-slate-700'
              }`}>
                {comp.sideB.badge}
              </span>
            )}
          </div>
          <ul className="space-y-2 mt-3">
            {comp.sideB.points.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                  comp.sideB.isOptimal ? 'bg-emerald-400' : 'bg-slate-400'
                }`} />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  // Render diagram nodes
  const renderDiagram = (nodes: DiagramNode[]) => {
    return (
      <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800/80 pb-2">
          <span className="font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
            <GitBranch className="w-3.5 h-3.5" />
            Interactive Concept Model
          </span>
          <span>Interconnected Components</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 py-2">
          {nodes.map((node, idx) => (
            <React.Fragment key={node.id}>
              <div
                className={`p-3.5 rounded-xl border text-center min-w-[140px] max-w-[200px] shadow-md transition-all ${
                  node.category === 'trap'
                    ? 'bg-rose-950/30 border-rose-700/50 text-rose-200'
                    : node.category === 'antidote'
                    ? 'bg-emerald-950/30 border-emerald-700/50 text-emerald-200'
                    : 'bg-indigo-950/30 border-indigo-700/50 text-indigo-200'
                }`}
              >
                <div className="text-xs font-bold font-mono tracking-tight uppercase mb-0.5">
                  {node.label}
                </div>
                {node.subtext && (
                  <p className="text-[11px] text-slate-300/90 leading-tight mt-1">{node.subtext}</p>
                )}
              </div>

              {idx < nodes.length - 1 && (
                <ArrowRight className="w-4 h-4 text-slate-500 shrink-0 hidden sm:block" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };

  // Render infographic metric cards
  const renderInfographic = (metrics: InfographicMetric[]) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-slate-950/70 border border-teal-500/20 text-slate-200 flex flex-col justify-between space-y-2 shadow"
          >
            <div>
              <div className="text-2xl sm:text-3xl font-black text-teal-300 font-mono tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mt-0.5">
                {metric.label}
              </div>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-400 leading-snug">
              {metric.context}
            </p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <figure
      role="group"
      aria-label={visual.title}
      className={`rounded-2xl border border-slate-800 bg-slate-950/50 overflow-hidden shadow-lg ${className}`}
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/60 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold border ${badge.color}`}
          >
            <BadgeIcon className="w-3 h-3" />
            <span>{badge.label}</span>
          </span>
          <span className="text-xs font-semibold text-slate-300 truncate max-w-[200px] sm:max-w-md">
            {visual.title}
          </span>
        </div>

        <div className="flex items-center gap-1">
          {visual.credits && (
            <button
              type="button"
              onClick={() => setShowCreditsModal(!showCreditsModal)}
              title="View source attribution and methodology credit"
              className="p-1 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
            >
              <Info className="w-3.5 h-3.5" />
            </button>
          )}

          {allowZoom && (visual.imageUrl || visual.flowchartSteps || visual.comparisonData) && (
            <button
              type="button"
              onClick={() => setIsZoomed(!isZoomed)}
              title="Expand visual"
              className="p-1 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Main Visual Display Body */}
      <div className="p-4 sm:p-5 relative">
        {/* If image URL is provided and not errored */}
        {visual.imageUrl && !imageError ? (
          <div className="relative rounded-xl overflow-hidden bg-slate-900 border border-slate-800/80 flex items-center justify-center">
            {isLoading && (
              <div className="absolute inset-0 bg-slate-900 animate-pulse flex items-center justify-center text-slate-500 text-xs font-mono">
                Optimizing educational visual...
              </div>
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={visual.imageUrl}
              alt={visual.altText}
              loading={visual.priorityLoading ? 'eager' : 'lazy'}
              decoding="async"
              onLoad={() => setIsLoading(false)}
              onError={() => setImageError(true)}
              className={`w-full max-h-[420px] object-cover transition-opacity duration-300 ${
                isLoading ? 'opacity-0' : 'opacity-100'
              }`}
            />
          </div>
        ) : null}

        {/* Structured Vector Visuals (Flowchart, Comparison, Diagram, Infographic) */}
        {visual.flowchartSteps && visual.flowchartSteps.length > 0 && (
          <div className="mt-2">{renderFlowchart(visual.flowchartSteps)}</div>
        )}

        {visual.comparisonData && (
          <div className="mt-2">{renderComparisonGraphic(visual.comparisonData)}</div>
        )}

        {visual.diagramNodes && visual.diagramNodes.length > 0 && (
          <div className="mt-2">{renderDiagram(visual.diagramNodes)}</div>
        )}

        {visual.infographicMetrics && visual.infographicMetrics.length > 0 && (
          <div className="mt-2">{renderInfographic(visual.infographicMetrics)}</div>
        )}

        {/* Interactive explanation helper */}
        {visual.interactiveExplanation && (
          <div className="mt-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">{visual.interactiveExplanation}</p>
          </div>
        )}
      </div>

      {/* Captions & Alt Text accessibility */}
      {showCaption && visual.caption && (
        <figcaption className="px-4 py-2.5 bg-slate-900/40 border-t border-slate-800/80 text-xs text-slate-400 flex items-start gap-2">
          <Info className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
          <span className="leading-snug">{visual.caption}</span>
        </figcaption>
      )}

      {/* Credit / Source Popover Bar */}
      {showCreditsModal && visual.credits && (
        <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800 text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-slate-500">Source:</span>
            <span className="font-medium text-slate-300">
              {visual.credits.sourceName || visual.credits.authorOrAttribution || 'Mentalab Educational Cognitive Architecture'}
            </span>
            {visual.credits.license && (
              <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px] font-mono">
                {visual.credits.license}
              </span>
            )}
          </div>

          {visual.credits.sourceUrl && (
            <a
              href={visual.credits.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:text-violet-300 flex items-center gap-1 font-mono transition-colors"
            >
              <span>Verify Source</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      )}
    </figure>
  );
};
