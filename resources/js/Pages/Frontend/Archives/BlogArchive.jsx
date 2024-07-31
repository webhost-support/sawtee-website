import PostPreviewCard from '@/components/Frontend/PostPreviewCard';
import { FeaturedPostSection } from '@/components/Frontend/featured-post';
import { splitPosts } from '@/lib/helpers';

const BlogArchive = ({ posts }) => {
  // Get the data of the current list.
  const [firstThreePosts, othersPosts] = splitPosts(posts);

  return (
    <section>
      <FeaturedPostSection data={firstThreePosts} />

      <div className="mx-auto w-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:w-[80%]">
        <h3 className="text-accent-400 dark:text-accent-50 text-center text-4xl font-bold uppercase md:text-6xl">
          Latest Blog Posts
        </h3>

        <div className="mt-16 grid gap-10 md:mt-20 md:grid-cols-2">
          {othersPosts.map((post, idx) => {
            return (
              <PostPreviewCard
                showImage={false}
                key={post.id}
                data={post}
                color={'gray.700'}
                _dark={{ color: 'whiteAlpha.700' }}
                rounded="xl"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogArchive;
