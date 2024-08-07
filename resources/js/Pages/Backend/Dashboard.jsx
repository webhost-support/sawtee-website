import AuthenticatedLayout from '@/components/Layouts/AuthenticatedLayout';
import { useToast } from '@/components/ui/use-toast';
import { Head } from '@inertiajs/react';
import { BookOpenIcon, FileArchiveIcon, FilesIcon } from 'lucide-react';
import React from 'react';

export default function Dashboard({ auth, posts, publications, researchs }) {
  const { toast } = useToast();

  React.useState(() => {
    if (auth.user.email_verified_at == null) {
      return toast({
        title: 'Not verified!',
        description: `Seems like you have not verified your email address, please verify your email by clicking the verification link sent to your email (${auth.user.email}).`,
        variant: 'destructive',
      });
    }
  }, [auth]);

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Dashboard" />
      <div className="mx-auto px-8">
        <h1 className="text-2xl font-bold">Hello, {auth.user.name}.</h1>
        <div className="removable -mx-3 mb-5 flex flex-wrap">
          <div className="mb-6 w-full max-w-full px-3 sm:flex-none lg:w-1/3 xl:mb-0">
            <StatsCard
              title={'posts'}
              stat={posts}
              icon={
                <FileArchiveIcon
                  w="2em"
                  h="2em"
                  className="relative mx-auto text-lg leading-none text-white"
                />
              }
            />
          </div>
          <div className="mb-6 w-full max-w-full px-3 sm:flex-none lg:w-1/3 xl:mb-0">
            <StatsCard
              title={'publications'}
              stat={publications}
              icon={
                <BookOpenIcon
                  w="2em"
                  h="2em"
                  className="relative mx-auto text-lg leading-none text-white"
                />
              }
            />
          </div>
          <div className="mb-6 w-full max-w-full px-3 sm:flex-none lg:w-1/3 xl:mb-0">
            <StatsCard
              title={'Research'}
              stat={researchs}
              icon={
                <FilesIcon
                  w="2em"
                  h="2em"
                  className="relative mx-auto text-lg leading-none text-white"
                />
              }
            />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

const StatsCard = ({ title, stat, icon }) => {
  return (
    <div className="shadow-soft-xl relative mb-4 flex min-w-0 flex-col break-words rounded-2xl bg-white bg-clip-border">
      <div className="flex-auto p-4">
        <div className="-mx-3 flex flex-row">
          <div className="w-2/3 max-w-full flex-none px-3">
            <div>
              <p className="mb-0 font-sans text-sm font-semibold capitalize leading-normal">
                {title}
              </p>
              <h5 className="mb-0 font-bold">
                {' '}
                {stat}{' '}
                <span className="font-weight-bolder text-sm leading-normal text-lime-500">
                  +55%
                </span>
              </h5>
            </div>
          </div>
          <div className="basis-1/3 px-3 text-right">
            <div className="shadow-soft-2xl flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-tl from-blue-700 to-cyan-500">
              {icon}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
