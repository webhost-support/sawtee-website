import AuthenticatedLayout from "@/components/Layouts/AuthenticatedLayout";
import { useToast } from '@/components/ui/use-toast';
import { Head } from "@inertiajs/react";
import { BookOpenIcon, FileArchiveIcon, FilesIcon } from "lucide-react";
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
        <div className="px-8 mx-auto">
          <h1 className="text-2xl font-bold">Hello, {auth.user.name}.</h1>
          <div className="flex flex-wrap -mx-3 mb-5 removable">
            <div className="w-full max-w-full px-3 mb-6 lg:w-1/3 sm:flex-none xl:mb-0">
              <StatsCard
                title={'posts'}
                stat={posts}
                icon={
                  <FileArchiveIcon
                    w="2em"
                    h="2em"
                    className="text-lg leading-none relative text-white mx-auto"
                  />
                }
              />
            </div>
            <div className="w-full max-w-full px-3 mb-6 lg:w-1/3 sm:flex-none xl:mb-0">
              <StatsCard
                title={'publications'}
                stat={publications}
                icon={
                  <BookOpenIcon
                    w="2em"
                    h="2em"
                    className="text-lg leading-none relative text-white mx-auto"
                  />
                }
              />
            </div>
            <div className="w-full max-w-full px-3 mb-6 lg:w-1/3 sm:flex-none xl:mb-0">
              <StatsCard
                title={'Research'}
                stat={researchs}
                icon={
                  <FilesIcon
                    w="2em"
                    h="2em"
                    className="text-lg leading-none relative text-white mx-auto"
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
    <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border mb-4">
      <div className="flex-auto p-4">
        <div className="flex flex-row -mx-3">
          <div className="flex-none w-2/3 max-w-full px-3">
            <div>
              <p className="mb-0 font-sans font-semibold capitalize leading-normal text-sm">
                {title}
              </p>
              <h5 className="mb-0 font-bold">
                {" "}
                {stat}{" "}
                <span className="leading-normal text-sm font-weight-bolder text-lime-500">
                  +55%
                </span>
              </h5>
            </div>
          </div>
          <div className="px-3 text-right basis-1/3">
            <div className="flex justify-center items-center w-12 h-12 rounded-lg bg-gradient-to-tl from-blue-700 to-cyan-500 shadow-soft-2xl">
              {icon}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
