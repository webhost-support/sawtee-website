import { Link } from '@inertiajs/react';
import generateGradient from '../../../lib/genarate-gradient';
import PostCategories from '../post/post-categories';
import {
    PostContent,
    PostImage,
    PostOverlay,
    PostTitle,
    PrimaryPostArticle,
    SecondaryPostArticle,
} from './components';

export const PrimaryPostPreview = ({ data, ...props }) => {
  const { title, category, featured_media, link } = data;

  return (
    <div {...props}>
      <PrimaryPostArticle bgImage={generateGradient()} role="group">
        <PostOverlay />
        <PostImage {...featured_media} />
        <PostContent>
          <Link href={link}>
            <PostTitle>{title}</PostTitle>
          </Link>
          {category.length > 0 && (
            <PostCategories
              category={category}
              className="w-full justify-center"
            />
          )}
        </PostContent>
      </PrimaryPostArticle>
    </div>
  );
};

export const SecondaryPostPreview = ({ data, ...props }) => {
  const { title, category, link, featured_media } = data;

  return (
    <div className="flex-1" {...props}>
      <SecondaryPostArticle
        bgImage={generateGradient()}
        role="group"
        alignItems="center"
      >
        <PostOverlay />
        <PostImage {...featured_media} />
        <PostContent className={'text-lfet mt-0 p-10'}>
          {category.length > 0 && (
            <PostCategories
              zIndex={50}
              justifyContent="flex-start"
              category={category}
            />
          )}
          <Link href={link}>
            <PostTitle className={'mt-auto text-2xl'}>{title}</PostTitle>
          </Link>
        </PostContent>
      </SecondaryPostArticle>
    </div>
  );
};

export const FeaturedPostSection = ({ data, ...props }) =>
  data.length > 2 && (
    <section
      className="relative flex flex-col gap-2 gap-y-8 bg-transparent lg:flex-row"
      {...props}
    >
      <div className="w-full grow lg:w-[65%]">
        <PrimaryPostPreview
          data={data[0]}
          className="overflow-hidden rounded-xl"
        />
      </div>
      <div className="flex w-full grow flex-col gap-2 gap-y-8 md:flex-row lg:w-[35%] lg:flex-col">
        {data.map((item, idx) => {
          if (idx > 0 && idx < data.length) {
            return (
              <SecondaryPostPreview
                key={item.id}
                data={item}
                className="overflow-hidden rounded-xl"
              />
            );
          }
        })}
      </div>
    </section>
  );
