import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { SocialMenu } from '../header/social-menu';
import {
    CaretRightIcon,
    EmailIcon,
    FaxIcon,
    LocationPin,
    MailBoxIcon,
    PhoneIcon,
} from '../icons';

export default function Footer({ menu, socialMenu, setMapModal }) {

  return (
    <footer className="w-full bg-bgDarker text-slate-500">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 gap-y-8 py-10 max-sm:mx-auto max-sm:max-w-sm sm:grid-cols-4 md:gap-8 lg:grid-cols-5">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <Link
              href="/"
              className="flex w-32 justify-center lg:justify-start"
            >
              <img
                src="/assets/logo-sawtee.webp"
                alt="logo"
                className="h-full w-full object-cover"
              />
            </Link>

            <p className="py-8 text-center text-sm text-gray-500 lg:max-w-xs lg:text-left">
              Trusted in more than 100 countries & 5 million customers. Have any
              query ?
            </p>
            <a
              href="/contact"
              className="mx-auto block h-9 w-fit rounded-full bg-sky-600 px-5 py-2.5 text-xs text-white shadow-sm transition-all duration-500 hover:bg-sky-700 lg:mx-0"
            >
              Contact us
            </a>
          </div>
          {Object.entries(menu).map(([key, item]) => {
            return (
              <div key={key} className="text-left lg:mx-auto">
                <h4 className="mb-7 text-lg font-medium text-secondary-foreground">
                  {item.title}
                </h4>
                <ul className="text-sm transition-all duration-500">
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
                              <PhoneIcon />
                              <a className="" href={`tel:${url}`}>
                                {title}
                              </a>
                            </MenuItem>
                          );
                        }
                        if (title.includes('Fax')) {
                          return (
                            <MenuItem key={title}>
                              <FaxIcon />
                              <a className="" href={`tel:${url}`}>
                                {title}
                              </a>
                            </MenuItem>
                          );
                        }
                        if (title.includes('Box')) {
                          return (
                            <MenuItem key={title}>
                              <MailBoxIcon />
                              {title}
                            </MenuItem>
                          );
                        }
                      })
                    : item.children?.map(child_item => {
                        const { url, title } = child_item;
                        return (
                          <MenuItem key={title}>
                            <CaretRightIcon />
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
        <div className="border-t border-gray-200 py-7">
          <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
            <span className="text-sm text-secondary-foreground">
              ©<Link href="/">{' SAWTEE'}</Link> {new Date().getFullYear()} ,
              All rights reserved.
            </span>
            <div className="mt-4 flex space-x-4 sm:justify-center lg:mt-0">
              <SocialMenu menu={socialMenu} />
            </div>
          </div>
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
