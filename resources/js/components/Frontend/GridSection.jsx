import React from 'react';

export default function GridSection() {
  return (
    <div class="bg-white py-6">
      <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div class="flex flex-row flex-wrap">
          <div class="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
            <div class="relative hover-img max-h-98 overflow-hidden">
              <a href="abc#">
                <img
                  class="max-w-full w-full mx-auto h-auto"
                  src="src/img/dummy/img1.jpg"
                  alt="alt-text"
                />
              </a>
              <div class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                <a href="adc#">
                  <h2 class="text-3xl font-bold capitalize text-white mb-3">
                    Amazon Shoppers Are Ditching Designer Belts for This
                    Best-Selling
                  </h2>
                </a>
                <p class="text-gray-100 hidden sm:inline-block">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This very helpfull for generate
                  default content..
                </p>
                <div class="pt-2">
                  <div class="text-gray-100">
                    <div class="inline-block h-3 border-l-2 border-theme-600 mr-2" />
                    Europe
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex-shrink max-w-full w-full lg:w-1/2">
            <div class="box-one flex flex-row flex-wrap">
              <article class="flex-shrink max-w-full w-full sm:w-1/2">
                <div class="relative hover-img max-h-48 overflow-hidden">
                  <a href="aaa#">
                    <img
                      class="max-w-full w-full mx-auto h-auto"
                      src="src/img/dummy/img2.jpg"
                      alt="alt-text"
                    />
                  </a>
                  <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                    <a href="avf#">
                      <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">
                        News magazines are becoming obsolete, replaced by
                        gadgets
                      </h2>
                    </a>
                    <div class="pt-1">
                      <div class="text-gray-100">
                        <div class="inline-block h-3 border-l-2 border-theme-600 mr-2" />
                        Techno
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article class="flex-shrink max-w-full w-full sm:w-1/2">
                <div class="relative hover-img max-h-48 overflow-hidden">
                  <a href="#add">
                    <img
                      class="max-w-full w-full mx-auto h-auto"
                      src="src/img/dummy/img3.jpg"
                      alt="alt-text"
                    />
                  </a>
                  <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                    <a href="acd#">
                      <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">
                        Minimalist designs are starting to be popular with the
                        next generation
                      </h2>
                    </a>
                    <div class="pt-1">
                      <div class="text-gray-100">
                        <div class="inline-block h-3 border-l-2 border-theme-600 mr-2" />
                        Architecture
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article class="flex-shrink max-w-full w-full sm:w-1/2">
                <div class="relative hover-img max-h-48 overflow-hidden">
                  <a href="aaa#">
                    <img
                      class="max-w-full w-full mx-auto h-auto"
                      src="src/img/dummy/img4.jpg"
                      alt="alt-text"
                    />
                  </a>
                  <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                    <a href="acd#">
                      <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">
                        Tips for decorating the interior of the living room
                      </h2>
                    </a>
                    <div class="pt-1">
                      <div class="text-gray-100">
                        <div class="inline-block h-3 border-l-2 border-theme-600 mr-2" />
                        Interior
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article class="flex-shrink max-w-full w-full sm:w-1/2">
                <div class="relative hover-img max-h-48 overflow-hidden">
                  <a href="acc#">
                    <img
                      class="max-w-full w-full mx-auto h-auto"
                      src="src/img/dummy/img5.jpg"
                      alt="alt-text"
                    />
                  </a>
                  <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                    <a href="#ssws">
                      <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">
                        Online taxi users are increasing drastically ahead of
                        the new year
                      </h2>
                    </a>
                    <div class="pt-1">
                      <div class="text-gray-100">
                        <div class="inline-block h-3 border-l-2 border-theme-600 mr-2" />
                        Lifestyle
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
