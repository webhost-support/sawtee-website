
import React from 'react';

const BlogCard6 = () => {
  return (
    <div className="mb-4 p-0 sm:p-4 md:w-1/3 max-w-2xl">
      {' '}
      {/* Card container */}
      <div className="group h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">
        {/* :CARD IMAGE & CATEGORY */}
        <div className="relative w-full overflow-hidden">
          {/* ::Image */}
          <img
            src="https://fancytailwind.com/static/static/d419798309e078ee6c942d5617605f7b/17574/media3.webp"
            alt=""
            className="w-full h-full object-cover object-center transition-all duration-300 transform group-hover:scale-110"
          />
          {/* ::Category */}
          <h2 className="absolute top-6 left-6 inline-block pt-0.5 pb-1.5 px-2 rounded-md text-sm text-gray-100 subpixel-antialiased font-medium bg-gradient-to-br from-green-500 to-blue-500 cursor-pointer">
            Category
          </h2>
        </div>

        {/* :CARD BODY */}
        <div className="my-6 py-3 px-8 flex flex-col justify-around items-center">
          {/* ::Title */}
          <h1 className="title-font text-2xl text-center font-bold text-gray-800 antialiased">
            Fancy Blog Card 6 you're gonna like !
          </h1>
          {/* ::Excerpt */}
          <p className="line-clamp-8 py-5 overflow-hidden leading-relaxed text-sm text-gray-500 text-left font-medium cursor-pointer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, illum
            cum autem incidunt magni voluptatum alias reiciendis possimus
            doloremque, enim consequuntur quia. Voluptas exercitationem soluta
            debitis labore aliquam molestiae illum?
          </p>
          {/* ::Read more */}
          <a
            href="#link"
            className="self-start p-2 bg-gradient-to-br from-green-500 to-blue-500 bg-clip-text text-transparent font-medium no-underline transform hover:scale-105"
          >
            Read more
          </a>
        </div>

        {/* ::CARD FOOTER */}
        <div className="py-3 px-2 flex flex-wrap justify-around border-t border-gray-200">
          {/* ::Author */}
          <span className="py-0.5 px-1.5 flex items-center text-xs text-gray-500 font-semibold tracking-wide cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            Laetitia
          </span>
          {/* ::Date */}
          <span className="py-0.5 px-1.5 flex items-center text-xs text-gray-500 font-semibold tracking-wide">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Oct 30, 2021
          </span>
          {/* ::Reading time */}
          <span className="py-0.5 px-1.5 flex items-center text-xs text-gray-500 font-semibold tracking-wide">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            3 min read
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard6;
