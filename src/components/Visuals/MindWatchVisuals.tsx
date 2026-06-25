export function PerformanceComparisonVisual() {
const metrics = [
  {
    label: "Balanced Accuracy",
    baseline: 90.57,
    multimodal: 97.99,
    baselineText: "90.6%",
    multimodalText: "98.0%",
  },
  {
    label: "Macro F1",
    baseline: 68.14,
    multimodal: 89.7,
    baselineText: "68.1%",
    multimodalText: "89.7%",
  },
];

  return (
    <div className="flex aspect-video w-full flex-col justify-center rounded-xl bg-gradient-to-br from-violet-500/10 via-background to-pink-500/10 p-5 sm:p-7">
      <div className="mb-5">
        <p className="text-xs uppercase tracking-[0.2em] text-primary/70">
          EEG-only vs Multimodal
        </p>

        <h4 className="mt-2 text-lg font-semibold text-foreground">
          Performance Comparison
        </h4>
      </div>

      <div className="space-y-5">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <div className="mb-2 flex items-center justify-between gap-4">
              <span className="text-xs font-medium text-muted-foreground sm:text-sm">
                {metric.label}
              </span>

              <span className="text-xs font-semibold text-primary">
                {metric.multimodalText}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-16 text-[10px] text-muted-foreground">
                  EEG-only
                </span>

                <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted/50">
                  <div
                    className="h-full rounded-full bg-muted-foreground/40"
                    style={{ width: `${metric.baseline}%` }}
                  />
                </div>

                <span className="w-12 text-right text-[10px] text-muted-foreground">
                  {metric.baselineText}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-16 text-[10px] text-primary">
                  Multimodal
                </span>

                <div className="h-2 flex-1 overflow-hidden rounded-full bg-primary/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-400 to-pink-400"
                    style={{ width: `${metric.multimodal}%` }}
                  />
                </div>

                <span className="w-12 text-right text-[10px] font-semibold text-primary">
                  {metric.multimodalText}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between rounded-lg border border-primary/10 bg-primary/5 px-3 py-2">
        <span className="text-xs text-muted-foreground">
          Pre-ictal FPR
        </span>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-muted-foreground line-through">
            0.1572
          </span>

          <span className="text-primary">→</span>

          <span className="font-semibold text-primary">
            0.0323
          </span>
        </div>
      </div>
    </div>
  );
}

export function MultimodalArchitectureVisual() {
  const stages = [
    {
      number: '01',
      title: 'Multimodal Signals',
      subtitle: 'EEG · ECG · EMG · Motion',
    },
    {
      number: '02',
      title: 'Preprocessing',
      subtitle: 'Filtering · Alignment · Windowing',
    },
    {
      number: '03',
      title: 'CNN + BiLSTM',
      subtitle: 'Spatial and temporal learning',
      highlight: true,
    },
    {
      number: '04',
      title: 'Imbalance Control',
      subtitle: 'LDAM-DRW · Weighted Loss',
    },
    {
      number: '05',
      title: 'Prediction',
      subtitle: 'Pre-ictal · Ictal · Post-ictal',
      output: true,
    },
  ];

  return (
    <div className="w-full rounded-2xl bg-gradient-to-br from-blue-500/10 via-background to-violet-500/10 p-5 sm:p-6">
      <div className="mb-5">
        <p className="text-xs uppercase tracking-[0.22em] text-primary/70">
          Mind Watch Pipeline
        </p>

        <h4 className="mt-2 text-lg font-semibold text-foreground">
          Multimodal Architecture
        </h4>
      </div>

      <div className="space-y-2">
        {stages.map((stage, index) => (
          <div key={stage.number}>
            <div
              className={`flex items-center gap-4 rounded-xl border px-4 py-3 ${
                stage.output
                  ? 'border-pink-400/25 bg-pink-400/10'
                  : stage.highlight
                    ? 'border-primary/25 bg-primary/10'
                    : 'border-border/40 bg-background/50'
              }`}
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-semibold ${
                  stage.output
                    ? 'bg-pink-400/15 text-pink-300'
                    : stage.highlight
                      ? 'bg-primary/15 text-primary'
                      : 'bg-muted/40 text-muted-foreground'
                }`}
              >
                {stage.number}
              </div>

              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">
                  {stage.title}
                </p>

                <p className="mt-1 text-[10px] text-muted-foreground sm:text-xs">
                  {stage.subtitle}
                </p>
              </div>
            </div>

            {index < stages.length - 1 && (
              <div className="flex h-5 justify-center">
                <div className="h-full border-l border-dashed border-primary/30" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ArchitectureBox({
  title,
  subtitle,
  highlight = false,
}: {
  title: string;
  subtitle: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border px-2 py-3 text-center ${
        highlight
          ? 'border-primary/20 bg-primary/10'
          : 'border-border/40 bg-background/60'
      }`}
    >
      <p className="text-[10px] font-semibold text-foreground sm:text-xs">
        {title}
      </p>

      <p className="mt-1 text-[8px] text-muted-foreground sm:text-[10px]">
        {subtitle}
      </p>
    </div>
  );
}

function Arrow() {
  return (
    <span className="text-xs text-primary/50">
      →
    </span>
  );
}

export function ImbalanceStrategyVisual() {
  return (
    <div className="w-full rounded-2xl bg-gradient-to-br from-pink-500/10 via-background to-violet-500/10 p-5 sm:p-6">
      <div className="mb-5">
        <p className="text-xs uppercase tracking-[0.22em] text-primary/70">
          Class Imbalance Control
        </p>

        <h4 className="mt-2 text-lg font-semibold text-foreground">
          Balancing Minority Seizure States
        </h4>
      </div>

      <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1.15fr_auto_1fr]">
        {/* Before */}
        <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-foreground">
                Before
              </p>

              <p className="mt-1 text-[10px] text-muted-foreground">
                Majority-class dominance
              </p>
            </div>

            <span className="rounded-full bg-red-400/10 px-2 py-1 text-[9px] font-semibold text-red-300">
              Imbalanced
            </span>
          </div>

          <div className="mt-5 flex h-32 items-end justify-center gap-4">
            <ClassBar
              label="Normal"
              value="90.65%"
              height="h-28"
              tone="normal"
            />

            <ClassBar
              label="Pre-ictal"
              value="8.62%"
              height="h-10"
              tone="preictal"
            />

            <ClassBar
              label="Ictal"
              value="0.73%"
              height="h-3"
              tone="ictal"
            />
          </div>
        </div>

        <CenterArrow />

        {/* Methods */}
        <div className="flex flex-col justify-center gap-3">
          <ImbalanceMethod
            number="01"
            title="Weighted Random Sampler"
            description="Increases minority-class exposure inside training batches."
            badge="Sampling Level"
          />

          <div className="flex items-center justify-center gap-2 text-xs text-primary/60">
            <span className="h-px flex-1 bg-primary/20" />
            +
            <span className="h-px flex-1 bg-primary/20" />
          </div>

          <ImbalanceMethod
            number="02"
            title="LDAM-DRW"
            description="Improves class separation and activates re-weighting after stable learning."
            badge="Loss Level"
            highlighted
          />
        </div>

        <CenterArrow />

        {/* After */}
        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-foreground">
                After
              </p>

              <p className="mt-1 text-[10px] text-muted-foreground">
                Better minority representation
              </p>
            </div>

            <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[9px] font-semibold text-emerald-300">
              Improved
            </span>
          </div>

          <div className="mt-5 flex h-32 items-end justify-center gap-4">
            <ClassBar
              label="Normal"
              value="Controlled"
              height="h-20"
              tone="normal"
            />

            <ClassBar
              label="Pre-ictal"
              value="More visible"
              height="h-16"
              tone="preictal"
            />

            <ClassBar
              label="Ictal"
              value="More visible"
              height="h-12"
              tone="ictal"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <OutcomeCard
          title="Balanced Training Exposure"
          text="Minority sequences appear more frequently during training."
        />

        <OutcomeCard
          title="Better Seizure-State Detection"
          text="Improved learning of Pre-ictal and Ictal patterns."
          highlighted
        />
      </div>
    </div>
  );
}

function ClassBar({
  label,
  value,
  height,
  tone,
}: {
  label: string;
  value: string;
  height: string;
  tone: 'normal' | 'preictal' | 'ictal';
}) {
  const toneClasses = {
    normal: 'from-slate-500/70 to-slate-400/30',
    preictal: 'from-violet-400/80 to-violet-300/30',
    ictal: 'from-pink-400/80 to-pink-300/30',
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-end">
      <span className="mb-2 text-[8px] text-muted-foreground sm:text-[9px]">
        {value}
      </span>

      <div
        className={`w-full max-w-12 rounded-t-lg bg-gradient-to-t ${height} ${toneClasses[tone]}`}
      />

      <span className="mt-2 text-center text-[8px] font-medium text-foreground sm:text-[9px]">
        {label}
      </span>
    </div>
  );
}

function ImbalanceMethod({
  number,
  title,
  description,
  badge,
  highlighted = false,
}: {
  number: string;
  title: string;
  description: string;
  badge: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 ${
        highlighted
          ? 'border-primary/30 bg-primary/10'
          : 'border-border/40 bg-background/50'
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-semibold ${
            highlighted
              ? 'bg-primary/15 text-primary'
              : 'bg-muted/40 text-muted-foreground'
          }`}
        >
          {number}
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-sm font-semibold text-foreground">
              {title}
            </p>

            <span className="rounded-full border border-border/40 bg-background/50 px-2 py-0.5 text-[8px] uppercase tracking-wider text-muted-foreground">
              {badge}
            </span>
          </div>

          <p className="mt-2 text-[10px] leading-4 text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function OutcomeCard({
  title,
  text,
  highlighted = false,
}: {
  title: string;
  text: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border px-4 py-3 ${
        highlighted
          ? 'border-pink-400/20 bg-pink-400/10'
          : 'border-border/40 bg-background/40'
      }`}
    >
      <p className="text-xs font-semibold text-foreground">
        {title}
      </p>

      <p className="mt-1 text-[10px] leading-4 text-muted-foreground">
        {text}
      </p>
    </div>
  );
}

function CenterArrow() {
  return (
    <div className="hidden items-center justify-center text-xl text-primary/50 md:flex">
      →
    </div>
  );
}