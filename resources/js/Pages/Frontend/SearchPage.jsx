import WebsiteHead from '@/components/Frontend/Head';
import PostHeader from '@/components/Frontend/post/post-header';
import PostPreviewCard from '@/components/Frontend/PostPreviewCard';
import MainLayout from '@/components/Layouts/MainLayout';
import { Input } from '@/components/ui/input';
import { router } from '@inertiajs/react';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import { useEffect, useState } from 'react';

export default function SearchPage({ posts, query }) {
  const [searchQuery, setSearchQuery] = useState(query ?? '');
  const [state, setState] = useState({
    query: query,
    loading: false,
    error: null,
    data: posts?.data,
  });
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: '0px',
  });
  function handleSubmit(e) {
    e.preventDefault();
    router.visit(`/search`, {
      data: { query: searchQuery, page: 1 },
      preserveScroll: true,
      //   replace: true,
      //   preserveState: true,
      onSuccess: () => {
        setState({ ...state, data: posts?.data });
      },
    });
  }

  //   useEffect(() => {
  //     setState({ ...state, data: posts?.data });
  //   }, [posts]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setState({ ...state, query: searchQuery });
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  useEffect(() => {
    if (entry?.isIntersecting && posts?.next_page_url) {
      router.reload({
        data: { query: searchQuery, page: posts?.current_page + 1 },
        preserveScroll: true,
        onSuccess: () => {
          setState({ ...state, data: [...state.data, ...posts?.data] });
          window.history.replaceState(
            {},
            searchQuery ? `Search result for: ${searchQuery}` : `Search Page`,
            '/search?query=' + searchQuery
          );
        },
      });
    }
  }, [entry]);
  return (
    <>
      <WebsiteHead title={'Search Page'} />

      <MainLayout>
        <div>
          <div className="relative z-0 h-80 max-h-80 w-full bg-white/20 dark:bg-black/75">
            <div
              className="absolute inset-0 -z-[1] h-full w-full bg-[url(/assets/pattern-tile-green.svg)] dark:bg-[url(/assets/pattern-tile-light-fade.svg)]"
              style={{
                backgroundSize: '1018px',
                backgroundPosition: 'top center',
                backgroundBlendMode: 'multiply',
              }}
            />
            <PostHeader
              className={
                'absolute bottom-4 left-12 z-10 px-2 text-left text-gray-800 dark:text-gray-200'
              }
              heading={'Search Page'}
            />
          </div>
          <div className="mx-auto max-w-5xl px-[32px] py-[80px] text-lg leading-8 md:px-0">
            <form onSubmit={handleSubmit} className="mb-10">
              <label
                htmlFor="search-modal"
                className="font-bold text-slate-800 dark:text-slate-300"
              >
                Search
              </label>

              <Input
                id="search-modal"
                className="[&::-webkit-search-decoration]:none placeholder-text-muted-foreground h-12 w-full appearance-none border bg-bgDarker py-3 text-sm"
                type="search"
                placeholder="Search"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </form>
            {searchQuery && posts
              ? `Found ${posts?.total} ${posts?.total > 1 ? 'results' : 'result'} for "${searchQuery}"`
              : 'Start typing to search the website'}

            <div className="grid place-items-center gap-10 md:grid-cols-2">
              {!state.data && searchQuery && (
                <div class="flex h-20 items-center justify-center space-x-2 bg-white dark:invert">
                  <span class="sr-only">Loading...</span>
                  <div class="h-6 w-6 animate-bounce rounded-full bg-black [animation-delay:-0.3s]"></div>
                  <div class="h-6 w-6 animate-bounce rounded-full bg-black [animation-delay:-0.15s]"></div>
                  <div class="h-6 w-6 animate-bounce rounded-full bg-black"></div>
                </div>
              )}
              {state.data?.map(post => {
                return (
                  <PostPreviewCard
                    className="w-full"
                    key={post.id + Math.floor(Math.random() * 1000)}
                    post={post}
                    showCategoryTag={true}
                  />
                );
              })}
            </div>
            {state.data && <div ref={ref} className="-translate-y-20" />}
          </div>
        </div>
      </MainLayout>
    </>
  );
}
