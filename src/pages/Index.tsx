import aiBenchmarks from "@/assets/ai-benchmarks.jpg";
import organizationsAi from "@/assets/organizations-ai.jpg";
import computeGrowth from "@/assets/compute-growth.jpg";
import algorithmicProgress from "@/assets/algorithmic-progress.jpg";
import aiTrajectories from "@/assets/ai-trajectories.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-8 py-16">
        {/* Title */}
        <h1 className="text-6xl font-light text-center mb-16 text-foreground">
          Trends in AI progress
        </h1>

        {/* Introduction */}
        <section className="mb-16">
          <p className="text-xl text-foreground leading-relaxed font-light">
            In the 3 years since ChatGPT released, the capability and use of AI models has exploded. The question now is, what comes next?
          </p>
        </section>

        {/* First Image - AI Benchmarks */}
        <section className="mb-16">
          <a 
            href="https://epoch.ai/benchmarks" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <img 
              src={aiBenchmarks} 
              alt="Frontier performance across benchmarks"
              className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            />
            <p className="text-center text-sm text-muted-foreground mt-4">
              AI performance on leading benchmarks
            </p>
          </a>
        </section>

        {/* Text about frontier models */}
        <section className="mb-16">
          <p className="text-xl text-foreground leading-relaxed font-light">
            Frontier models are now able to reach human expert performance in mathematics and coding. Along with this increase in capability, we have seen an explosion in the use of chat models.
          </p>
        </section>

        {/* Second Image - Organizations Using AI */}
        <section className="mb-16">
          <a 
            href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <img 
              src={organizationsAi} 
              alt="Organizations are increasingly using AI in multiple functions"
              className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            />
          </a>
        </section>

        {/* Drivers of explosion */}
        <section className="mb-16">
          <p className="text-xl text-foreground leading-relaxed font-light">
            This improvement has been driven by an increase in the computing power used to train models, as well as breakthroughs in AI research that has made the allocation of this compute more efficient. A big step here was the discovery of 'scaling laws' - empirical relationships demonstrating that model capability scales with compute.
          </p>
        </section>

        {/* Third and Fourth Images - Compute Growth and Algorithmic Progress */}
        <section className="mb-16 space-y-12">
          <a 
            href="https://epoch.ai/blog/training-compute-of-frontier-ai-models-grows-by-4-5x-per-year" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <img 
              src={computeGrowth} 
              alt="Training compute growth"
              className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            />
          </a>

          <a 
            href="https://epoch.ai/blog/algorithmic-progress-in-language-models" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <img 
              src={algorithmicProgress} 
              alt="The relative contribution of compute and algorithmic breakthroughs to AI progress"
              className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            />
            <p className="text-center text-sm text-muted-foreground mt-4">
              The relative contribution of compute and algorithmic breakthroughs to AI progress.
            </p>
          </a>
        </section>

        {/* Uncertain Future */}
        <section className="mb-16">
          <p className="text-xl text-foreground leading-relaxed font-light">
            The future remains uncertain. We only have limited evidence of how LLMs using transformer architecture will continue to grow. AI development until now has been characterised by phases of explosive growth, followed by periods of slow progress known as 'AI Winters'. Will that prove true in this case too, if it turns out that current model architectures are unable to produce models that excel at the kind of long term messy tasks that are most useful in the real world? Or will the exponential trends that we have seen thus far continue? Only time will tell.
          </p>
        </section>

        {/* Final Image - AI Trajectories */}
        <section className="mb-16">
          <a 
            href="https://www.lesswrong.com/posts/PAYfmG2aRbdb74mEp/a-deep-critique-of-ai-2027-s-bad-timeline-models" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <img 
              src={aiTrajectories} 
              alt="Different trajectories that are consistent with observed trends on AI growth"
              className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            />
            <p className="text-center text-sm text-muted-foreground mt-4">
              Different trajectories that are consistent with observed trends on AI growth.
            </p>
          </a>
        </section>
      </main>
    </div>
  );
};

export default Index;
