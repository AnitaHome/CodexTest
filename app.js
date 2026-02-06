import React from "https://esm.sh/react@18";
import { createRoot } from "https://esm.sh/react-dom@18/client";

const features = [
  {
    title: "快",
    description: "秒級產出可執行的程式碼，縮短開發週期。",
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" aria-hidden="true">
        <path
          d="M4 13.5 12.5 4l-1.5 7.5H20L11.5 20l1.5-6.5H4Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "準",
    description: "理解需求、輸出高品質結果，讓測試一次過。",
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="m9 12 2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "易",
    description: "自然語言互動，上手零門檻，團隊協作更順暢。",
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" aria-hidden="true">
        <path
          d="M7 6h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7l-4 3V8a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 11h6M9 15h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const logos = ["TechNova", "CloudHawk", "VertexAI", "Nexa", "Hyperion"];

function App() {
  return (
    <div className="min-h-screen">
      <header className="relative overflow-hidden bg-hero text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-xl">
                ⌁
              </span>
              AI 寫程式神器
            </div>
            <div className="hidden items-center gap-6 text-sm font-medium md:flex">
              <a href="#features" className="transition hover:text-brand-50">特色</a>
              <a href="#customers" className="transition hover:text-brand-50">客戶</a>
              <a href="#subscribe" className="transition hover:text-brand-50">訂閱</a>
            </div>
            <button className="rounded-full border border-white/40 px-4 py-2 text-sm font-semibold transition hover:bg-white/10">
              登入
            </button>
          </nav>
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-20 pt-12 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                全新 AI 工程團隊夥伴
                <span className="rounded-full bg-white/20 px-2 py-1 text-xs">Beta</span>
              </p>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                AI 寫程式神器
                <span className="block text-brand-50">讓每段程式碼更快、更準、更易</span>
              </h1>
              <p className="text-lg text-white/80">
                從需求到部署，全流程自動化。即時生成、即時修正，讓產品迭代快人一步。
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button className="rounded-full bg-brand-500 px-6 py-3 text-base font-semibold text-white shadow-glow transition hover:bg-brand-600">
                  立即試用
                </button>
                <button className="rounded-full border border-white/40 px-6 py-3 text-base font-semibold text-white/90 transition hover:bg-white/10">
                  觀看示範
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <span className="text-xl">⚡</span> 每日 1,200+ 次生成
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🛡️</span> 企業級安全合規
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-white/70">
                  <span>AI Console</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">Live</span>
                </div>
                <div className="space-y-3 rounded-2xl bg-slate-950/60 p-4 text-sm text-green-200">
                  <p>// 提示：建立支付 API</p>
                  <p>{"> Generating secure endpoints..."}</p>
                  <p>{"> Tests passed ✔"}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs text-white/70">
                  <div className="rounded-2xl bg-white/10 p-3">
                    <p className="text-white">速度提升</p>
                    <p className="text-lg font-semibold text-brand-50">+68%</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-3">
                    <p className="text-white">缺陷降低</p>
                    <p className="text-lg font-semibold text-brand-50">-42%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="features" className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-col gap-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-50">
              核心特色
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">專為現代開發團隊打造</h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              縮短交付時間、提升品質、讓每位成員都能高速前進。
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:border-brand-200 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white dark:bg-slate-800 dark:text-brand-50">
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="customers" className="border-y border-slate-200 bg-slate-100 py-16 dark:border-slate-800 dark:bg-slate-900/40">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-2xl font-semibold">受到全球產品團隊信賴</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                從新創到企業都在使用 AI 寫程式神器提升效率。
              </p>
            </div>
            <div className="mt-8 grid items-center justify-center gap-6 text-center sm:grid-cols-3 lg:grid-cols-5">
              {logos.map((logo) => (
                <div
                  key={logo}
                  className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-sm font-semibold text-slate-500 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white px-6 py-16 dark:bg-slate-950">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">掌握最新 AI 開發趨勢</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              每週提供案例、教學與產品更新，成為團隊的秘密武器。
            </p>
            <form id="subscribe" className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="輸入你的 Email"
                className="w-full flex-1 rounded-full border border-slate-300 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-900"
              />
              <button
                type="submit"
                className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                訂閱
              </button>
            </form>
          </div>
          <div className="space-y-4 md:pl-10">
            <h4 className="text-lg font-semibold">社群追蹤</h4>
            <div className="flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
              <a className="rounded-full border border-slate-200 px-4 py-2 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700" href="#">
                LinkedIn
              </a>
              <a className="rounded-full border border-slate-200 px-4 py-2 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700" href="#">
                GitHub
              </a>
              <a className="rounded-full border border-slate-200 px-4 py-2 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700" href="#">
                YouTube
              </a>
              <a className="rounded-full border border-slate-200 px-4 py-2 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700" href="#">
                X / Twitter
              </a>
            </div>
            <p className="text-xs text-slate-400">© 2024 AI 寫程式神器. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
