import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import {
  ArrowRightIcon,
  MailIcon,
  PhoneIncoming,
  PhoneOff,
} from 'lucide-react';
import { SocialMenu } from '../header/social-menu';
import { EmailIcon, LocationPin } from '../icons';

export default function Footer({ menu, socialMenu, setMapModal }) {
  return (
    <footer className="w-full bg-bgDarker text-slate-500">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid max-w-sm grid-cols-2 gap-3 gap-y-8 py-10 sm:mx-auto sm:max-w-full sm:grid-cols-3 md:gap-8 lg:grid-cols-5">
          <div className="col-span-full mb-10 flex w-full flex-col gap-5 lg:col-span-2 lg:mb-0">
            <Link
              href="/"
              className="mx-auto flex w-32 justify-center lg:mx-0 lg:justify-start"
            >
              <img
                src="/assets/logo-sawtee.webp"
                alt="logo"
                className="h-full w-full object-cover"
              />
            </Link>

            <div className="flex w-full flex-col items-center justify-center gap-3 lg:items-start">
              <span className="text-lg text-secondary-foreground">
                ©<Link href="/">{' SAWTEE'}</Link>{' '}
                {new Date().getFullYear() + ' All rights reserved. '}
              </span>
              <div className="flex space-x-4">
                <SocialMenu className={'mt-0'} menu={socialMenu} />
              </div>
            </div>
          </div>
          {Object.entries(menu).map(([key, item]) => {
            return (
              <div
                key={key}
                className="col-span-2 w-full justify-self-center text-left sm:col-span-1 sm:mx-auto"
              >
                <h4 className="mb-7 text-xl font-medium text-secondary-foreground">
                  {item.title}
                </h4>
                <ul className="text-[0.9rem] transition-all duration-500">
                  {item.title.includes('Contact')
                    ? item.children?.map(child_item => {
                        const { url, title } = child_item;
                        if (title.includes('Address')) {
                          return (
                            <MenuItem
                              className="cursor-pointer"
                              onClick={() => setMapModal(true)}
                            >
                              <LocationPin />

                              {title}
                            </MenuItem>
                          );
                        }
                        if (title.includes('Email')) {
                          return (
                            <MenuItem key={title}>
                              <EmailIcon />
                              <a className="" href={`mailto:${url}`}>
                                {title}
                              </a>
                            </MenuItem>
                          );
                        }
                        if (title.includes('Phone')) {
                          return (
                            <MenuItem key={title}>
                              <PhoneIncoming />
                              <a className="" href={`tel:${url}`}>
                                {title}
                              </a>
                            </MenuItem>
                          );
                        }
                        if (title.includes('Fax')) {
                          return (
                            <MenuItem key={title}>
                              <PhoneOff />
                              <a className="" href={`tel:${url}`}>
                                {title}
                              </a>
                            </MenuItem>
                          );
                        }
                        if (title.includes('Box')) {
                          return (
                            <MenuItem key={title}>
                              <MailIcon />
                              {title}
                            </MenuItem>
                          );
                        }
                      })
                    : item.children?.map(child_item => {
                        const { url, title } = child_item;
                        return (
                          <MenuItem key={title}>
                            <ArrowRightIcon />
                            {title.includes('SAES') ? (
                              <a
                                href={url}
                                className=""
                                target="_blank"
                                referrerPolicy="no-referrer"
                              >
                                {title}
                              </a>
                            ) : (
                              <Link href={url}>{title}</Link>
                            )}
                          </MenuItem>
                        );
                      })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

const MenuItem = ({ children, className }) => {
  return (
    <li
      className={cn(
        'mb-6 flex w-full items-center justify-start gap-2 text-secondary-foreground/90 hover:text-slate-900 dark:text-secondary-foreground/80 dark:hover:text-secondary-foreground',
        className
      )}
    >
      {children}
    </li>
  );
};
