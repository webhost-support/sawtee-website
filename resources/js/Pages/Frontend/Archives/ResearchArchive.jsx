import { GlassBox } from '@/components/Frontend';
import { cn } from '@/lib/utils';
import {
    Link,
    Text
} from '@chakra-ui/react';
import { FileText } from 'lucide-react';

const ResearchArchive = ({ posts }) => {
  // Get the data of the current list.
  if (!posts || posts.length <= 0)
    return <Text fontSize={'2xl'}>"No posts found"</Text>;

  const sortedPosts = Object.entries(posts).sort(([a], [b]) => b - a);

  return (
    <div className='w-full max-w-3xl mx-auto flex flex-col gap-10 mb-5 items-start justify-start'>
        {sortedPosts.map(tagitem => {
          return (
            <div className='w-full z-10' key={tagitem[0]}>
              <h2 className='text-lg md:text-xl xl:text-2xl font-bold my-5' >
                {tagitem[0]}
              </h2>
              <GlassBox
              className={'w-full p-4 rounded-xl text-left'}

              >
                {tagitem[1].map((researchItem, idx) => (
                  <ReasearchItem
                    key={researchItem.id}
                    skipTrail={idx  !== tagitem[1].length - 1}
                    className={idx !== tagitem[1].length - 1 ? 'min-h-12' : 'min-h-auto'}
                  >
                    <h3 className='text-md md:text-lg tracking-wide text-secondary-foreground/90 hover:underline hover:underline-offset-4 hover:text-primary/80 dark:hover:text-secondary-foreground/80'>
                      <Link
                        target="_blank"
                        href={
                          researchItem.file
                            ? `/Research_Reports/${researchItem.file.name}`
                            : researchItem.link
                        }
                      >
                        {researchItem.title}
                      </Link>
                    </h3>
                  </ReasearchItem>
                ))}
              </GlassBox>
            </div>
          );
        })}
    </div>
  );
};

export default ResearchArchive;

const ReasearchItem = ({
  skipTrail,
  children,
  className
}) => {
  return (
    <div className={cn('flex items-start ', className)} >
      <div className='flex flex-col justify-center items-center mr-4 relative'>
        <div
        className='h-10 w-10 rounded-full bg-zinc-200 dark:bg-zinc-700'

        >
        <FileText className='h-5 w-5 translate-x-1/2 translate-y-1/2 text-zinc-600 dark:text-zinc-400' />
        </div>
        {skipTrail ? (
          <div
          className='w-[2px] h-12 bg-zinc-200 dark:bg-zinc-700'

          />
        ) : null}
      </div>
      <div className='' >
        {children}
      </div>
    </div>
  );
};
