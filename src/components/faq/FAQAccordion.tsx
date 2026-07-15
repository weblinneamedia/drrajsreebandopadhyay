"use client";

import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { faqs, faqCategories } from "@/data/faq";
import { cn } from "@/lib/utils";

export function FAQAccordion({
  limit,
  showSearch = true,
  showCategories = true,
}: {
  limit?: number;
  showSearch?: boolean;
  showCategories?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  let filtered = faqs;
  if (category !== "All") {
    filtered = filtered.filter((f) => f.category === category);
  }
  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (f) =>
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q)
    );
  }
  if (limit) filtered = filtered.slice(0, limit);

  return (
    <div>
      {showSearch && (
        <div className="relative mb-6 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="search"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:border-accent"
            aria-label="Search FAQs"
          />
        </div>
      )}

      {showCategories && (
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setCategory("All")}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
              category === "All"
                ? "bg-accent text-white"
                : "bg-section text-slate-600 hover:bg-slate-200"
            )}
          >
            All
          </button>
          {faqCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                category === cat
                  ? "bg-accent text-white"
                  : "bg-section text-slate-600 hover:bg-slate-200"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-3">
        {filtered.map((faq, index) => (
          <div key={index} className="card overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-5 text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold text-navy pr-4">{faq.question}</span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-accent shrink-0 transition-transform",
                  openIndex === index && "rotate-180"
                )}
              />
            </button>
            {openIndex === index && (
              <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-slate-500 py-8">
            No questions found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}
