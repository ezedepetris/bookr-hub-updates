import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getDictionary, getUpdate, getUpdates } from "../lib/dictionary";

const BASE_URL = "https://www.bookrhub.com";

export async function generateStaticParams() {
  const updatesEn = getUpdates("en");
  return Object.keys(updatesEn).map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ locale?: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const update = getUpdate(slug, "en");

  if (!update) {
    return {
      title: "Update Not Found",
      description: "This update was not found.",
    };
  }

  return {
    title: update.title,
    description: update.excerpt,
    openGraph: {
      title: update.title,
      description: update.excerpt,
      type: "article",
      publishedTime: update.date,
      url: `https://updates.bookrhub.com/${slug}`,
      siteName: "BookrHub Updates",
    },
    alternates: {
      canonical: `https://updates.bookrhub.com/${slug}`,
      languages: {
        en: `https://updates.bookrhub.com/${slug}?locale=en`,
        es: `https://updates.bookrhub.com/${slug}?locale=es`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function UpdatePage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const search = await searchParams;
  const locale = search.locale === "es" ? "es" : "en";
  const dict = getDictionary(locale);
  const update = getUpdate(slug, locale);

  if (!update) {
    notFound();
  }

  const paragraphs = update.content.split("\n\n");

  return (
    <main className="flex-1 flex flex-col">
      <header className="border-b border-[#e7e5e4] bg-white/80 backdrop-blur-sm px-6 py-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link
                href={`/?locale=${locale}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#57534e] transition-colors hover:text-[#4f46e5]"
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
                {dict.allUpdates}
              </Link>
            </div>
            <Link
              href={`?locale=${locale === "en" ? "es" : "en"}`}
              className="inline-flex items-center rounded-lg border border-[#e7e5e4] bg-white px-3 py-2 text-sm font-medium text-[#57534e] transition-colors hover:border-[#4f46e5] hover:text-[#4f46e5]"
            >
              {dict.localeSwitch}
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-[#eef2ff] px-2.5 py-0.5 text-xs font-medium text-[#4f46e5]">
              {dict.categories[update.category as keyof typeof dict.categories]}
            </span>
            <time className="text-sm text-[#a8a29e]">{update.date}</time>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#1c1917]">
            {update.title}
          </h1>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-12">
        <div className="prose prose-zinc max-w-none">
          {paragraphs.map((paragraph, index) => {
            if (paragraph.startsWith("### ")) {
              return (
                <h3 key={index} className="mt-6 first:mt-0 text-lg font-semibold text-[#1c1917]">
                  {paragraph.replace("### ", "")}
                </h3>
              );
            }
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={index} className="mt-8 first:mt-0 text-[#1c1917]">
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("- ")) {
              const items = paragraph
                .split("\n")
                .filter((line) => line.startsWith("- "));
              return (
                <ul key={index} className="list-disc pl-6 text-[#57534e]">
                  {items.map((item, i) => {
                    const text = item.replace("- ", "");
                    const formatted = text.replace(
                      /\*\*(.*?)\*\*/g,
                      "<strong>$1</strong>"
                    );
                    return (
                      <li key={i}>
                        <span dangerouslySetInnerHTML={{ __html: formatted }} />
                      </li>
                    );
                  })}
                </ul>
              );
            }
            if (paragraph.startsWith("**") && paragraph.includes("**")) {
              const formatted = paragraph.replace(
                /\*\*(.*?)\*\*/g,
                "<strong>$1</strong>"
              );
              return (
                <p key={index} className="text-[#57534e]">
                  <span dangerouslySetInnerHTML={{ __html: formatted }} />
                </p>
              );
            }
            return <p key={index} className="text-[#57534e]">{paragraph}</p>;
          })}
          {"images" in update && update.images && update.images.length > 0 && (
            <div className="my-8 space-y-6">
              {update.images.map((image, imgIndex) => (
                <figure key={imgIndex} className="overflow-hidden rounded-xl border border-[#e7e5e4]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={450}
                    className="w-full h-auto"
                  />
                  {image.caption && (
                    <figcaption className="mt-2 text-center text-sm text-[#a8a29e]">
                      {image.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}
        </div>
      </article>

      <footer className="mt-auto border-t border-[#e7e5e4] bg-white/80 backdrop-blur-sm px-6 py-8">
        <div className="mx-auto max-w-3xl text-center text-sm text-[#a8a29e]">
          <p>
            {dict.footer}{" "}
            <Link
              href={`${BASE_URL}/?locale=${locale}`}
              className="font-medium text-[#4f46e5] hover:text-[#3730a3]"
            >
              {dict.startFreeTrial}
            </Link>
          </p>
        </div>
      </footer>
    </main>
  );
}
