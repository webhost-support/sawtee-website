import { ExploreButton, GlassBox } from '@/components/Frontend/index';
import { formatDate } from '@/lib/helpers';

import { Link } from '@inertiajs/react';
import React from 'react';
import SimpleList from './SimpleList';

const SidebarWidget = ({ array, title, link, ...rest }) => {
  return (
    <GlassBox
      className="sidebar_widget relative max-h-max overflow-y-auto shadow-none border-none "
      {...rest}
    >
      <SimpleList className={'border-none px-8'} heading={title}>
        {array?.map(post => {
          return (
            <li className="mb-4 group" key={post.id}>
              <Link
                className="underline underline-offset-2 text-secondary-foreground group-hover:underline-offset-4 group-hover:text-primary/80 dark:group-hover:text-secondary-foreground/80"
                href={`${link}/${post.slug}`}
              >
                <p className="text-sm md:text-md lg:text-lg leading-5">
                  {post.title}
                </p>
              </Link>
              <p className="text-muted-foreground text-xs mt-2">
                {formatDate(post.published_at)}
              </p>
            </li>
          );
        })}
        <ExploreButton text={`More ${title}`} link={link} className="p-0 " />
      </SimpleList>
    </GlassBox>
  );
};

export default SidebarWidget;
