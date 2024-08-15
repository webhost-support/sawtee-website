import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { Separator } from '@radix-ui/react-dropdown-menu';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import { SearchIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState(null);
  const [postData, setPostData] = useState([]);
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: '0px',
  });
  function handleSubmit(e) {
    e.preventDefault();
    const URL = `/search?query=${searchQuery}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', URL);
    xhr.onload = () => {
      if (xhr.status === 200) {
        setPostData(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  }

  function handleQueryChange(query) {
    const URL = `/search?query=${query}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', URL);
    xhr.onload = () => {
      if (xhr.status === 200) {
        setPostData(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  }

  useEffect(() => {
    if (!postData) return;
    setPosts(postData.data);
  }, [postData]);

  useEffect(() => {
    !searchQuery && setPostData(null);
    searchQuery && handleQueryChange(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === '/' && !isOpen) {
        event.preventDefault();
        setIsOpen(true);
      }
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        setIsOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (entry?.isIntersecting) {
      const URL = `/search?query=${searchQuery}&page=${postData?.current_page + 1}`;
      const xhr = new XMLHttpRequest();
      xhr.open('GET', URL);
      xhr.onload = () => {
        if (xhr.status === 200) {
          setPosts([...posts, ...JSON.parse(xhr.responseText).data]);
        }
      };
      xhr.send();
    }
  }, [entry]);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => {
        setIsOpen(!isOpen);
        setSearchQuery(null);
        setPostData(null);
      }}
    >
      <div className="text-center">
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="relative inline-flex w-full max-w-xs items-center justify-between whitespace-nowrap rounded-lg border py-3.5 pl-4 pr-3 text-sm"
          >
            <div className="flex items-center justify-center">
              <svg
                className="mr-3 h-4 w-4 shrink-0 fill-slate-500"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Search</title>
                <path d="m14.707 13.293-1.414 1.414-2.4-2.4 1.414-1.414 2.4 2.4ZM6.8 12.6A5.8 5.8 0 1 1 6.8 1a5.8 5.8 0 0 1 0 11.6Zm0-2a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6Z" />
              </svg>
              <span>Press / or</span>
            </div>
            <div className="mx-3 flex items-center justify-center gap-1">
              <svg
                className="shrink-0 fill-slate-500"
                xmlns="http://www.w3.org/2000/svg"
                width={11}
                height={12}
                viewBox="0 0 11 12"
              >
                <title>CMD/CTRL</title>
                <path d="M2.277 11.224c-.418 0-.799-.101-1.143-.303a2.343 2.343 0 0 1-.826-.826A2.208 2.208 0 0 1 0 8.952c0-.421.103-.804.308-1.148.206-.345.48-.62.826-.826a2.191 2.191 0 0 1 1.143-.308h1.034V5.139H2.277c-.418 0-.799-.101-1.143-.304a2.357 2.357 0 0 1-.826-.82A2.2 2.2 0 0 1 0 2.867c0-.418.103-.799.308-1.144.206-.344.48-.618.826-.82A2.191 2.191 0 0 1 2.277.595c.418 0 .799.102 1.143.308.345.202.62.476.826.82.209.345.313.726.313 1.144v1.029h1.526v-1.03c0-.417.101-.798.303-1.143.206-.344.481-.618.826-.82A2.2 2.2 0 0 1 8.362.595c.418 0 .799.102 1.144.308.344.202.618.476.82.82.205.345.308.726.308 1.144a2.2 2.2 0 0 1-.308 1.148c-.206.342-.48.615-.825.82-.342.203-.721.304-1.139.304H7.333V6.67h1.03c.417 0 .796.103 1.138.308.344.206.62.48.825.826a2.2 2.2 0 0 1 .308 1.148c0 .414-.103.795-.308 1.143-.206.345-.48.62-.825.826-.342.202-.721.303-1.139.303-.42 0-.804-.101-1.148-.303a2.344 2.344 0 0 1-.826-.826 2.236 2.236 0 0 1-.303-1.143v-1.04H4.56v1.04c0 .414-.104.795-.313 1.143-.206.345-.48.62-.826.826a2.218 2.218 0 0 1-1.143.303Zm0-1.243a1.045 1.045 0 0 0 .895-.512.991.991 0 0 0 .14-.517v-1.04H2.276a.965.965 0 0 0-.517.145c-.156.093-.28.217-.373.373a1 1 0 0 0-.14.522c0 .189.046.361.135.517.093.156.217.28.373.373.16.093.333.14.522.14Zm0-6.085h1.034v-1.03a.975.975 0 0 0-.14-.516 1.045 1.045 0 0 0-.894-.512.991.991 0 0 0-.517.139c-.156.093-.28.217-.373.373a.975.975 0 0 0-.14.517c0 .189.046.363.135.522.093.156.217.28.373.373.16.09.333.134.522.134Zm5.056 0h1.03c.188 0 .36-.045.516-.134.156-.093.279-.217.368-.373a1 1 0 0 0 .14-.522.975.975 0 0 0-.14-.517 1.018 1.018 0 0 0-.885-.512 1 1 0 0 0-.522.139 1.002 1.002 0 0 0-.507.89v1.029Zm1.03 6.085a1.018 1.018 0 0 0 .885-.512.991.991 0 0 0 .138-.517 1 1 0 0 0-.139-.522 1.018 1.018 0 0 0-.368-.373.965.965 0 0 0-.517-.144H7.333v1.039c0 .189.045.361.134.517.093.156.217.28.373.373a1 1 0 0 0 .522.14ZM4.558 6.67h1.526V5.139H4.56V6.67Z" />
              </svg>
              <svg
                className="h-full shrink-0 fill-slate-500"
                xmlns="http://www.w3.org/2000/svg"
                width={8}
                height={9}
                viewBox="0 0 8 9"
              >
                <title>k</title>
                <path d="M0 8.727V0h1.581v4.01h.107L5.091 0h1.93L3.649 3.916l3.405 4.811H5.152L2.548 4.986l-.967 1.142v2.6H0Z" />
              </svg>
            </div>
            <span>to search</span>
          </Button>
        </DialogTrigger>
      </div>

      <DialogContent
        className={cn(
          'dark:text-white',
          posts
            ? 'max-w-3xl px-0 transition-all duration-200 ease-out'
            : 'max-w-lg'
        )}
      >
        <DialogHeader className={'px-6'}>
          <DialogTitle>
            <SearchIcon className="inline-flex h-4 w-4 shrink-0" />
            {' Search'}
          </DialogTitle>
          <DialogDescription>
            {searchQuery && posts
              ? `Found ${postData.total} ${postData.total > 1 ? 'results' : 'result'} for "${searchQuery}"`
              : 'Start typing to search the website'}
          </DialogDescription>
          <form onSubmit={handleSubmit} className="">
            <div className="flex items-center gap-2">
              <VisuallyHidden.Root>
                <label htmlFor="search-modal">Search</label>
              </VisuallyHidden.Root>

              <Input
                id="search-modal"
                className="[&::-webkit-search-decoration]:none placeholder-text-muted-foreground w-full appearance-none border bg-bgDarker py-3 text-sm"
                type="search"
                placeholder="Search"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              <Separator className="border border-b-2" />
            </div>
          </form>
        </DialogHeader>
        <ScrollArea className="max-h-[calc(85vh-44px)] px-6">
          {!posts && searchQuery && (
            <div class="flex h-20 items-center justify-center space-x-2 bg-white dark:invert">
              <span class="sr-only">Loading...</span>
              <div class="h-6 w-6 animate-bounce rounded-full bg-black [animation-delay:-0.3s]"></div>
              <div class="h-6 w-6 animate-bounce rounded-full bg-black [animation-delay:-0.15s]"></div>
              <div class="h-6 w-6 animate-bounce rounded-full bg-black"></div>
            </div>
          )}

          <div className="grid gap-4 md:grid-cols-2">
            {posts?.map(({ id, title, excerpt, category, slug }) => {
              return (
                <Card
                  key={id}
                  className="before:content:'' group relative z-0 overflow-hidden before:absolute before:right-[-32px] before:top-[-24px] before:z-[-1] before:h-8 before:w-8 before:origin-center before:scale-100 before:rounded-[32px] before:bg-sky-500/50 before:transition-transform before:duration-300 before:ease-out hover:before:scale-[32] dark:bg-bgDarker"
                >
                  <CardContent class="p-4">
                    <Link
                      href={`/category/${category.slug}/${slug}`}
                      className="flex flex-col gap-2"
                    >
                      <h5 className="text-lg font-bold leading-5 tracking-tight text-gray-900 dark:text-white">
                        {title}
                      </h5>
                      <p
                        className="line-clamp-2 text-sm font-normal text-gray-700 dark:text-gray-400"
                        dangerouslySetInnerHTML={{ __html: excerpt }}
                      />

                      <div
                        className="absolute right-0 top-0 flex h-8 w-8 items-center justify-center overflow-hidden rounded-[0_4px_0_32px] bg-gray-100 bg-sky-500/50 group-hover:bg-transparent"
                        href="#"
                      >
                        <div className="go-arrow">→</div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          {posts && <div ref={ref} className="-translate-y-20" />}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
