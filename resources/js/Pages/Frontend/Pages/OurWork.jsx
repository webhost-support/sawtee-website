import { cn, htmlToText } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import CardWithEffect from '../../../components/Frontend/CardWithEffect';

export default function OurWork({ themes, sections, content }) {
  const [intro, setIntro] = useState(null);
  const [sectors, setSectors] = useState(null);

  const Themes = themes.filter(theme => theme.title !== 'Covid');

  useEffect(() => {
    const intro = sections.find(section => section.title === 'Intro');
    const sectors = sections.filter(section => section.parent_id !== null);
    intro && setIntro(intro);
    sectors && setSectors(sectors);
  }, [sections]);

  return (
    <div className="intro relative mx-auto max-w-7xl px-5 py-20 md:px-10">
      <h2 className="mb-6 text-center text-xl dark:text-zinc-300 md:text-2xl lg:text-4xl">
        Thematic Areas
      </h2>

      <div className="relative mx-auto mb-24 flex max-w-4xl flex-col items-center justify-center gap-8">
        {intro && (
          <blockquote className="blockquote m-0 self-center bg-bgDarker/90 py-10 text-xl dark:text-zinc-400">
            {htmlToText(intro.description)}
          </blockquote>
        )}
      </div>

      <div class="mb-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-6">
        {Themes?.map((theme, index) => {
          const colSpan = index <= 1 || index === Themes.length - 2 ? 3 : 2;

          return (
            <div
              key={theme.title}
              className={cn(
                'w-full bg-bgDarker last:col-span-3',
                `col-span-${colSpan}`
              )}
            >
              <div class="relative h-full">
                <span class="absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg bg-sky-500" />

                <div class="relative h-full rounded-lg border-2 border-sky-500 bg-bgDarker p-5">
                  <div class="-mt-1 flex items-center">
                    <h3 class="my-2 ml-3 text-lg font-bold text-slate-800 dark:text-slate-300">
                      {theme.title}
                    </h3>
                  </div>
                  <p class="mb-1 mt-3 text-xs font-medium uppercase text-sky-500">
                    ------------
                  </p>
                  <p class="mb-2 text-slate-700 dark:text-slate-400">
                    {theme.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="page_content mx-auto grid max-w-5xl items-center gap-8 px-8 py-12 md:grid-cols-2 md:px-4">
        {sectors?.map(({ id, title, description, media, link }) => {
          return (
            <CardWithEffect key={id} className="cards max-w-lg p-0">
              <img
                className="aspect-square h-full w-full object-cover"
                alt="sector cover"
                src={
                  media[0]
                    ? media[0].original_url
                    : '/assets/SM-placeholder-1024x512.png'
                }
              />
              <Link
                href={`/category/${link}`}
                className="group absolute inset-0 flex h-full w-full flex-col items-center justify-between bg-bgDarker bg-blend-lighten"
              >
                <h2 className="title w-full self-start py-6 text-center text-lg group-hover:bg-sky-500/50 dark:text-zinc-300 md:text-2xl">
                  {title}
                </h2>
                <p className="flex h-full w-full grow items-center justify-center px-6 dark:text-gray-200">
                  {description || 'Random text to check the positioning'}
                </p>
              </Link>
            </CardWithEffect>
          );
        })}
      </div>
    </div>
  );
}
