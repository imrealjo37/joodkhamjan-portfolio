export function EduLaptopRAGPipelineVisual() {
  const offlineStages = [
    {
      number: "01",
      title: "Load Dataset",
      subtitle: "991 laptop records",
    },
    {
      number: "02",
      title: "Preprocessing",
      subtitle: "Cleaning · SAR conversion",
    },
    {
      number: "03",
      title: "Build Documents",
      subtitle: "Laptop data → text documents",
    },
    {
      number: "04",
      title: "Vectorize & Save",
      subtitle: "TF-IDF · 8,000 features",
      highlight: true,
    },
  ];

  const onlineStages = [
    {
      number: "05",
      title: "User Query",
      subtitle: "Needs · Budget · Specs",
    },
    {
      number: "06",
      title: "Query Expansion",
      subtitle: "Domain-specific synonyms",
    },
    {
      number: "07",
      title: "Smart Filtering",
      subtitle: "RAM · GPU · CPU · OS",
      highlight: true,
    },
    {
      number: "08",
      title: "Similarity Ranking",
      subtitle: "TF-IDF · Cosine similarity",
    },
    {
      number: "09",
      title: "Top-K Retrieval",
      subtitle: "Most relevant laptops",
    },
    {
      number: "10",
      title: "Answer Generation",
      subtitle: "Llama 3.3 · Groq API",
      highlight: true,
    },
    {
      number: "11",
      title: "RAG Evaluation",
      subtitle: "Precision · Relevancy · Faithfulness",
    },
    {
      number: "12",
      title: "Streamlit UI",
      subtitle: "Interactive recommendation",
      output: true,
    },
  ];

  return (
    <div className="flex aspect-video w-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/10 via-background to-violet-500/10 p-5 sm:p-6">
      <div className="mb-4">
        <p className="text-xs uppercase tracking-[0.22em] text-primary/70">
          EduLaptop Advisor
        </p>

        <h4 className="mt-2 text-lg font-semibold text-foreground">
          Hybrid RAG Pipeline
        </h4>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-4">
        <HorizontalPipelinePhase
          title="Offline — Indexing Phase"
          stages={offlineStages}
          tone="blue"
        />

        <HorizontalPipelinePhase
          title="Online — Query Phase"
          stages={onlineStages}
          tone="violet"
        />
      </div>
    </div>
  );
}

type PipelineStage = {
  number: string;
  title: string;
  subtitle: string;
  highlight?: boolean;
  output?: boolean;
};

function HorizontalPipelinePhase({
  title,
  stages,
  tone,
}: {
  title: string;
  stages: PipelineStage[];
  tone: "blue" | "violet";
}) {
  return (
    <div
      className={`min-h-0 flex-1 rounded-xl border p-3 ${
        tone === "blue"
          ? "border-blue-400/20 bg-blue-400/5"
          : "border-violet-400/20 bg-violet-400/5"
      }`}
    >
      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {title}
      </p>

      <div className="group overflow-hidden pb-1">
        <div className="flex w-max animate-pipeline-scroll items-stretch group-hover:[animation-play-state:paused]">
          {[...stages, ...stages].map((stage, index) => (
            <div
              key={`${stage.number}-${index}`}
              className="flex items-center"
              aria-hidden={index >= stages.length}
            >
              <div
                className={`flex w-36 shrink-0 flex-col rounded-xl border p-3 sm:w-40 ${
                  stage.output
                    ? "border-emerald-400/25 bg-emerald-400/10"
                    : stage.highlight
                      ? "border-primary/30 bg-primary/10"
                      : "border-border/40 bg-background/50"
                }`}
              >
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-lg text-[9px] font-semibold ${
                    stage.output
                      ? "bg-emerald-400/15 text-emerald-300"
                      : stage.highlight
                        ? "bg-primary/15 text-primary"
                        : "bg-muted/40 text-muted-foreground"
                  }`}
                >
                  {stage.number}
                </div>

                <p className="mt-3 text-[10px] font-semibold text-foreground sm:text-xs">
                  {stage.title}
                </p>

                <p className="mt-1 text-[8px] leading-3 text-muted-foreground sm:text-[9px]">
                  {stage.subtitle}
                </p>
              </div>

              <div className="mx-2 flex items-center text-sm text-primary/50">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function EduLaptopEvaluationVisual() {
  const metrics = [
    {
      label: "Average Evaluation Score",
      before: 69,
      after: 83,
      beforeText: "0.69",
      afterText: "0.83",
    },
    {
      label: "Context Precision",
      before: 72,
      after: 100,
      beforeText: "Baseline",
      afterText: "1.00",
    },
    {
      label: "Faithfulness",
      before: 75,
      after: 98,
      beforeText: "Baseline",
      afterText: "0.98",
    },
  ];

  return (
    <div className="flex aspect-video w-full flex-col rounded-2xl bg-gradient-to-br from-violet-500/10 via-background to-emerald-500/10 p-5 sm:p-6">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-primary/70">
            System Evaluation
          </p>

          <h4 className="mt-2 text-lg font-semibold text-foreground">
            Retrieval and Grounding Improvement
          </h4>
        </div>

        <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-right">
          <p className="text-[9px] uppercase tracking-wider text-emerald-300/80">
            Improvement
          </p>

          <p className="mt-1 text-lg font-semibold text-emerald-300">
            +20.3%
          </p>
        </div>
      </div>

      <div className="flex-1 space-y-5">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <div className="mb-2 flex items-center justify-between gap-3">
              <p className="text-xs font-medium text-foreground sm:text-sm">
                {metric.label}
              </p>

              <p className="text-xs font-semibold text-primary">
                {metric.afterText}
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-14 text-[9px] text-muted-foreground">
                  Before
                </span>

                <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted/40">
                  <div
                    className="h-full rounded-full bg-muted-foreground/35"
                    style={{ width: `${metric.before}%` }}
                  />
                </div>

                <span className="w-14 text-right text-[9px] text-muted-foreground">
                  {metric.beforeText}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-14 text-[9px] font-medium text-primary">
                  Final
                </span>

                <div className="h-2 flex-1 overflow-hidden rounded-full bg-primary/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-400 to-emerald-400"
                    style={{ width: `${metric.after}%` }}
                  />
                </div>

                <span className="w-14 text-right text-[9px] font-semibold text-primary">
                  {metric.afterText}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        <EvaluationFeature
          title="Query Expansion"
          subtitle="Improved intent matching"
        />

        <EvaluationFeature
          title="Smart Filtering"
          subtitle="Reduced irrelevant results"
          highlighted
        />

        <EvaluationFeature
          title="Stopword Removal"
          subtitle="Improved precision"
        />
      </div>
    </div>
  );
}

function EvaluationFeature({
  title,
  subtitle,
  highlighted = false,
}: {
  title: string;
  subtitle: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border px-3 py-3 text-center ${
        highlighted
          ? "border-primary/25 bg-primary/10"
          : "border-border/40 bg-background/40"
      }`}
    >
      <p className="text-[9px] font-semibold text-foreground sm:text-[10px]">
        {title}
      </p>

      <p className="mt-1 text-[8px] leading-3 text-muted-foreground">
        {subtitle}
      </p>
    </div>
  );
}