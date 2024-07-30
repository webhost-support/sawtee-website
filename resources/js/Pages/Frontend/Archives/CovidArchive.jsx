import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { DateFormat } from '@/lib/helpers';
import { Link } from '@chakra-ui/react';

const CovidArchive = ({ posts }) => {
  return (
    <div className="grid w-full gap-x-4 gap-y-10 px-4 md:grid-cols-2 md:px-8">
      {posts.map(post => {
        const authors = () => {
          if (post.author) {
            const result = post.author.replace('and', ',').split(',');
            return result;
          }
        };
        return (
          <Card key={post.id} className="relative border-2 border-borderColor">
            <CardContent className="flex relative w-full h-full flex-col gap-4 space-y-4 p-6">
            <span class="absolute -z-[1] top-0 left-0 w-full h-full mt-1 ml-1 bg-primary/90 rounded-xl" />
              <div className="flex w-full justify-between">
                {post.genre && (
                  <Badge className="rounded-md">{post.genre}</Badge>
                )}

                <time
                  className="self-end text-sm font-medium"
                  fontSize={'xs'}
                  fontWeight="medium"
                  justifySelf={'flex-end'}
                >
                  {DateFormat(post.published_at)}
                </time>
              </div>
              <Link href={post.link} className="primary-link">
                <h3 className="text-md font-normal tracking-normal lg:text-lg lg:leading-5">
                  {post.title}
                </h3>
              </Link>
              <div className="flex flex-wrap items-center gap-x-2">
                {post.author && (
                  <div class="flex -space-x-4 transition-all delay-150 duration-300 ease-in hover:space-x-1 rtl:space-x-reverse">
                    <TooltipProvider>
                      {authors().map(author => (
                        <Tooltip key={author}>
                          <TooltipTrigger>
                            <div class="relative inline-flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full border bg-gray-100 shadow-sm dark:bg-gray-600">
                              <span class="font-medium text-gray-600 dark:text-gray-300">
                                {author.split(' ')[0][0]}
                                {author.split(' ')[1][0]}
                              </span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{author}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </TooltipProvider>
                  </div>
                )}
              </div>
            </CardContent>
            {/* <CardFooter>
            </CardFooter> */}
          </Card>
        );
      })}
    </div>
  );
};

export default CovidArchive;
