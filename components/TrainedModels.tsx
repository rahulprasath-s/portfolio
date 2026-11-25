"use client";

import { motion } from "framer-motion";
import { ChevronDown, Cpu, Download, ExternalLink, Github } from "lucide-react";
import { trainedModels } from "@/lib/data";
import { useLanguage } from "./LanguageProvider";

export default function TrainedModels() {
  const { language, t } = useLanguage();
  const locale = language === "de" ? "de-DE" : "en-US";
  const count = new Intl.NumberFormat(locale);
  const score = new Intl.NumberFormat(locale, { minimumFractionDigits: 4, maximumFractionDigits: 4 });

  if (trainedModels.length === 0) return null;

  return (
    <section id="models" aria-labelledby="models-title" className="scroll-mt-28 bg-[#0b0b0b] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex max-w-full items-center gap-4 rounded-2xl border border-white/10 bg-[#151515] px-7 py-4">
            <Cpu aria-hidden="true" className="h-8 w-8 shrink-0 text-brand-ink" />
            <h2 id="models-title" className="text-3xl font-black uppercase sm:text-4xl">{t("Trained Models")}</h2>
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
            {t("Training, evaluating, and releasing neural networks, with reproducible code and reported limitations.")}
          </p>
        </motion.div>

        <div className="space-y-8">
          {trainedModels.map((model) => (
            <article key={model.id} aria-labelledby={`model-${model.id}`} className="min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-[#151515]">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase text-brand-ink">{t("Research release")} · {model.version}</p>
                    <h3 id={`model-${model.id}`} className="text-2xl font-extrabold sm:text-3xl">{model.name}</h3>
                    <p className="mt-2 text-base font-semibold text-white/70">{t(model.task)}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a href={model.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-sm font-semibold transition-colors hover:border-brand-500/40 hover:text-brand-ink">
                      <Github aria-hidden="true" className="h-4 w-4" />{t("Code")}
                    </a>
                    <a href={model.weightsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-3 text-sm font-bold text-neutral-950 transition-colors hover:bg-brand-400">
                      <Download aria-hidden="true" className="h-4 w-4" />{t("Model weights")}
                    </a>
                  </div>
                </div>

                <p className="mt-5 max-w-4xl text-sm leading-7 text-white/60">{t(model.summary)}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {model.environment.map((item) => <li key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">{item}</li>)}
                </ul>
                <p className="mt-3 text-xs leading-6 text-white/60">{t(model.caveat)}</p>
              </div>

              <details className="group/details border-t border-white/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 text-sm font-semibold text-brand-ink transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-brand-500 sm:px-8 [&::-webkit-details-marker]:hidden">
                  <span className="group-open/details:hidden">{t("View training & evaluation")}</span>
                  <span className="hidden group-open/details:inline">{t("Hide details")}</span>
                  <ChevronDown aria-hidden="true" className="h-4 w-4 shrink-0 transition-transform group-open/details:rotate-180" />
                </summary>
                <div className="px-6 pb-6 pt-2 sm:px-8 sm:pb-8">
                  <p className="max-w-4xl text-sm leading-7 text-white/60">{t(model.description)}</p>
                  <div className="mt-7 grid gap-7 border-t border-white/10 pt-7 lg:grid-cols-[1.5fr_1fr]">
                    <div>
                      <h4 className="mb-3 text-sm font-bold text-white">{t("Training & release")}</h4>
                      <p className="text-sm leading-7 text-white/60">{t(model.training)}</p>
                      <a href={model.architectureUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-ink underline-offset-4 hover:underline">
                        {t("Based on Point2Roof")}<ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
                      </a>
                    </div>
                    <div>
                      <h4 className="mb-3 text-sm font-bold text-white">{t("Verified training environment")}</h4>
                      <ul className="flex flex-wrap gap-2">
                        {model.environment.map((item) => <li key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">{item}</li>)}
                      </ul>
                      <p className="mt-3 text-sm leading-7 text-white/60">{t("Custom CUDA operations must be compiled before inference. See each release's documentation for verified environments.")}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 p-6 sm:p-8">
                  <h4 className="text-lg font-bold">{t("Evaluation results")}</h4>
                  <p className="mb-5 mt-2 text-sm leading-7 text-white/60">{t(model.limitations)}</p>
                  <div role="region" aria-label={t("Koor evaluation results")} tabIndex={0} className="overflow-x-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500">
                    <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                      <caption className="sr-only">{t("Corner and edge micro-F1 on synthetic and real roof point clouds.")}</caption>
                      <thead className="border-b border-white/10 text-white/60">
                        <tr>
                          {["Test set", "Buildings", "Corner tolerance", "Corner F1", "Edge F1"].map((label) => <th key={label} scope="col" className="px-3 py-3 font-semibold first:pl-0">{t(label)}</th>)}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        {model.results.map((row) => (
                          <tr key={`${row.dataset}-${row.tolerance}`}>
                            <th scope="row" className="py-3 pr-3 font-medium text-white/70">{t(row.dataset)}</th>
                            <td className="px-3 py-3 tabular-nums">{count.format(row.buildings)}</td>
                            <td className="px-3 py-3 tabular-nums">{row.tolerance}%</td>
                            <td className="px-3 py-3 font-semibold tabular-nums">{score.format(row.cornerF1)}</td>
                            <td className="px-3 py-3 font-semibold tabular-nums">{score.format(row.edgeF1)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-5 text-xs leading-6 text-white/60">{t(model.evaluationNote)}</p>
                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm">
                    <a href={model.resultsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-brand-ink underline-offset-4 hover:underline">{t("Evaluation methodology")}<ExternalLink aria-hidden="true" className="h-3.5 w-3.5" /></a>
                    <a href={model.licensingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/60 underline-offset-4 hover:underline">{t("Licensing & dataset terms")}<ExternalLink aria-hidden="true" className="h-3.5 w-3.5" /></a>
                  </div>
                  <p className="mt-3 text-xs leading-6 text-white/60">{t("Public model availability does not imply unrestricted commercial use. Review the documented model licensing, dataset terms, and upstream Point2Roof license.")}</p>
                </div>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
