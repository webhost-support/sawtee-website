import { Heart, HeartIcon } from 'lucide-react';
import React from 'react';

export default function Footer() {
  return (
    <footer className="py-4 bg-slate-700 text-slate-200">
      <div className="max-w-5xl px-6 mx-auto">
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
            <div className="leading-normal text-center text-md lg:text-left">
              © {new Date().getFullYear()} made with&nbsp;
              <HeartIcon className="w-6 h-6 inline cursor-pointer animate-pulse" />
              &nbsp;by&nbsp;
              <a href="/" target="_blank" rel="noreferrer">
                Ankur Singh
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
