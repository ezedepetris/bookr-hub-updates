import Link from "next/link";
import Image from "next/image";
import { getDictionary, getUpdates } from "./lib/dictionary";

interface PageProps {
  searchParams: Promise<{ locale?: string }>;
}

export default async function Changelog({ searchParams }: PageProps) {
  const params = await searchParams;
  const locale = params.locale === "es" ? "es" : "en";
  const dict = getDictionary(locale);
  const updates = getUpdates(locale);
  const updateList = Object.entries(updates).map(([slug, data]) => ({ slug, ...data }));
  const BASE_URL = "https://www.bookrhub.com";

  return (
    <main className="flex-1">
      <header className="border-b border-[#e7e5e4] bg-white/80 backdrop-blur-sm px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <Link
            href={`${BASE_URL}/?locale=${locale}`}
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#57534e] transition-colors hover:text-[#4f46e5]"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            {dict.backToBookrHub}
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/icon.svg"
              alt="BookrHub"
              width={48}
              height={48}
              className="rounded-xl"
            />
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-[#1c1917]">
                {dict.updates}
              </h1>
            </div>
          </div>
          <p className="text-lg text-[#57534e] mb-6">
            {dict.updatesSubtitle}
          </p>
          <div className="flex items-center justify-between">
            <div></div>
            <Link
              href={`?locale=${locale === "en" ? "es" : "en"}`}
              className="inline-flex items-center rounded-lg border border-[#e7e5e4] bg-white px-3 py-2 text-sm font-medium text-[#57534e] transition-colors hover:border-[#4f46e5] hover:text-[#4f46e5]"
            >
              {dict.localeSwitch}
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-12 gradient-background">
        {updateList.map((update, index) => (
          <article
            key={update.slug}
            className={index === 0 
              ? "rounded-2xl border border-[#e7e5e4] bg-white px-8 py-8 -mx-4" 
              : "pt-6 pb-12 border-b border-[#e7e5e4]"}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-[#eef2ff] px-2.5 py-0.5 text-xs font-medium text-[#4f46e5]">
                {dict.categories[update.category as keyof typeof dict.categories]}
              </span>
              <time className="text-sm text-[#a8a29e]">{update.date}</time>
            </div>
            <Link href={`/${update.slug}?locale=${locale}`}>
              <h2 className="text-xl font-semibold text-[#1c1917] hover:text-[#4f46e5]">
                {update.title}
              </h2>
            </Link>
            <p className="mt-3 text-[#57534e]">{update.excerpt}</p>
            <Link
              href={`/${update.slug}?locale=${locale}`}
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#4f46e5] hover:text-[#3730a3]"
            >
              {dict.readMore}
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </article>
        ))}
      </div>

      <footer className="border-t border-[#e7e5e4] bg-white/80 backdrop-blur-sm px-6 py-8">
        <div className="mx-auto max-w-3xl text-center text-sm text-[#a8a29e]">
          <p>
            {dict.footer}{" "}
            <Link
              href={`${BASE_URL}/?locale=${locale}`}
              className="font-medium text-[#4f46e5] hover:text-[#3730a3]"
            >
              {dict.tryBookrHub}
            </Link>
          </p>
        </div>
      </footer>
    </main>
  );
}
