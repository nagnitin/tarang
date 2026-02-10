import { useEffect, useState } from "react";
import { Smartphone, Microchip, Star } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

type GearArticle = {
  title: string;
  description: string | null;
  source?: { name?: string };
  publishedAt?: string;
  url?: string;
};

const fallbackGadgets = [
  {
    icon: Smartphone,
    title: "First Looks",
    desc: "New consumer gadgets — phones, laptops, and smart home devices.",
    tag: "NEW",
  },
  {
    icon: Microchip,
    title: "For the Makers",
    desc: "Boards, sensors, and modules for hobby and project work.",
    tag: "MAKER",
  },
  {
    icon: Star,
    title: "Mini-Reviews",
    desc: "Brief, hands-on product tests with key takeaways.",
    tag: "REVIEW",
  },
];

const GEAR_QUERY =
  "smartphone OR laptop OR \"consumer electronics\" OR gadget OR \"Raspberry Pi\" OR Arduino";

const formatDate = (dateString?: string) => {
  if (!dateString) return "";
  try {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return "";
  }
};

export const GadgetCornerSection = () => {
  const [articles, setArticles] = useState<GearArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchGear = async () => {
    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams({
        q: GEAR_QUERY,
        language: "en",
        sortBy: "publishedAt",
        pageSize: "6",
      });

      const res = await fetch(`/api/news?${params.toString()}`);

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const data = (await res.json()) as {
        articles?: GearArticle[];
        status?: string;
        message?: string;
      };

      if (data.status !== "ok" || !data.articles) {
        throw new Error(data.message || "Unexpected response from news service.");
      }

      const cleaned = data.articles
        .filter((a) => a.title && (a.description || a.source?.name))
        .slice(0, 3);

      setArticles(cleaned);
    } catch (err) {
      console.error(err);
      setError("Unable to load latest gadgets at the moment.");
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchGear();
  }, []);

  const hasLiveGear = articles.length > 0 && !error;

  const getTag = (index: number) => {
    if (index === 0) return "NEW";
    if (index === 1) return "MAKER";
    return "REVIEW";
  };

  const getIcon = (index: number) => {
    if (index === 0) return Smartphone;
    if (index === 1) return Microchip;
    return Star;
  };

  return (
    <AnimatedSection id="gadget-corner" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="badge-tag mb-4">Gadget Corner</span>
            <h2 className="section-title mt-4">
              Latest <span className="gradient-text-accent">Gear</span>
            </h2>
            <p className="section-subtitle mt-3">
              From consumer technology to maker boards — curated picks and concise insights.
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            {loading && <span>Fetching latest devices…</span>}
            {error && <span className="text-destructive">{error}</span>}
          </div>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hasLiveGear
            ? articles.map((article, idx) => {
                const Icon = getIcon(idx);
                const tag = getTag(idx);

                return (
                  <StaggerItem key={article.title + idx}>
                    <article className="glass-card-hover p-6 h-full flex flex-col group">
                      <div className="flex items-center justify-between mb-4">
                        <Icon className="w-7 h-7 text-accent" />
                        <span className="text-[10px] font-mono font-semibold tracking-widest text-accent/70 bg-accent/10 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 leading-snug line-clamp-2">
                        {article.title}
                      </h3>
                      {article.description && (
                        <p className="text-muted-foreground text-sm leading-relaxed flex-1 line-clamp-3">
                          {article.description}
                        </p>
                      )}
                      <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                        <span>{formatDate(article.publishedAt)}</span>
                        {article.url && (
                          <a
                            href={article.url}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-accent hover:underline"
                          >
                            Read more
                          </a>
                        )}
                      </div>
                    </article>
                  </StaggerItem>
                );
              })
            : fallbackGadgets.map((g) => (
                <StaggerItem key={g.title}>
                  <div className="glass-card-hover p-6 h-full flex flex-col group cursor-pointer">
                    <div className="flex items-center justify-between mb-4">
                      <g.icon className="w-7 h-7 text-accent" />
                      <span className="text-[10px] font-mono font-semibold tracking-widest text-accent/70 bg-accent/10 px-2 py-0.5 rounded">
                        {g.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{g.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{g.desc}</p>
                  </div>
                </StaggerItem>
              ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
};
