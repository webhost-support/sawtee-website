import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { useDisclosure } from '@chakra-ui/react';
import { Link } from '@inertiajs/react';
import React from 'react';
import { MapModel } from '..';
import { SocialMenu } from '../header/social-menu';
import {
  CaretRightIcon,
  EmailIcon,
  FaxIcon,
  LocationPin,
  MailBoxIcon,
  PhoneIcon,
} from '../icons';

export default function Footer({ menu, socialMenu }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <footer className="w-full bg-bgDarker text-slate-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <Link
              href="/"
              className="flex w-32 justify-center lg:justify-start"
            >
              <img
                src="/assets/logo-sawtee.webp"
                alt="logo"
                className="w-full h-full object-cover"
              />
            </Link>

            <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
              Trusted in more than 100 countries & 5 million customers. Have any
              query ?
            </p>
            <a
              href="/contact"
              className="py-2.5 px-5 h-9 block w-fit bg-sky-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-sky-700 lg:mx-0"
            >
              Contact us
            </a>
          </div>
          {Object.entries(menu).map(([key, item]) => {
            return (
              <div key={key} className="lg:mx-auto text-left ">
                <h4 className="text-lg text-secondary-foreground font-medium mb-7">
                  {item.title}
                </h4>
                <ul className="text-sm  transition-all duration-500">
                  {item.title.includes('Contact')
                    ? item.children?.map(child_item => {
                        const { url, title } = child_item;
                        if (title.includes('Address')) {
                          return (
                            <TooltipProvider key={title}>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <MenuItem
                                    className="cursor-pointer"
                                    onClick={onOpen}
                                    onKeyDown={onOpen}
                                  >
                                    <LocationPin />
                                    {title}
                                    <MapModel
                                      isOpen={isOpen}
                                      onClose={onClose}
                                      mapLink={url}
                                    />
                                  </MenuItem>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Click to view map</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          );
                        }
                        if (title.includes('Email')) {
                          return (
                            <MenuItem key={title}>
                              <EmailIcon />
                              <Link className="" href={url}>
                                {title}
                              </Link>
                            </MenuItem>
                          );
                        }
                        if (title.includes('Phone')) {
                          return (
                            <MenuItem key={title}>
                              <PhoneIcon />
                              <Link className="" href={url}>
                                {title}
                              </Link>
                            </MenuItem>
                          );
                        }
                        if (title.includes('Fax')) {
                          return (
                            <MenuItem key={title}>
                              <FaxIcon />
                              <Link className="" href={url}>
                                {title}
                              </Link>
                            </MenuItem>
                          );
                        }
                        if (title.includes('Box')) {
                          return (
                            <MenuItem key={title}>
                              <MailBoxIcon />
                              <Link className="" href={url}>
                                {title}
                              </Link>
                            </MenuItem>
                          );
                        }
                      })
                    : item.children?.map(child_item => {
                        const { url, title } = child_item;
                        return (
                          <MenuItem key={title}>
                            <CaretRightIcon />
                            <Link href={url} className="">
                              {title}
                            </Link>
                          </MenuItem>
                        );
                      })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="py-7 border-t border-gray-200">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-sm text-secondary-foreground ">
              ©<Link href="/">{' SAWTEE'}</Link> {new Date().getFullYear()} ,
              All rights reserved.
            </span>
            <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
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
        'mb-6 flex gap-2 w-full justify-start items-center text-gray-600 text-secondary-foreground/80 hover:text-slate-900 dark:hover:text-secondary-foreground dark:text-secondary-foreground ',
        className
      )}
    >
      {children}
    </li>
  );
};
