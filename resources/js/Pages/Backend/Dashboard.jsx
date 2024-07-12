import AuthenticatedLayout from '@/Pages/Backend/Layouts/AuthenticatedLayout';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { WarningIcon } from '@chakra-ui/icons';
import { Head } from '@inertiajs/react';
import { BookOpenIcon, FileArchiveIcon, FilesIcon } from 'lucide-react';

export default function Dashboard({
  auth,
  posts,
  categories,
  publications,
  researchs,
  users,
}) {
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Dashboard" />
      <div className="max-w-6xl mx-auto">
        {auth.user.email_verified_at == null && (
          <Alert className="bg-orange-400 mb-4 max-w-2xl mx-auto">
            <AlertTitle className="flex items-center gap-2 font-bold text-primary mb-2">
              Not verified!
              <WarningIcon className="h-6 w-6" />
            </AlertTitle>
            <AlertDescription>
              <p className="text-primary leading-3 font-medium text-lg m-0">
                Seems like you have not verified your email address,&nbsp;
                please verify your email by clicking the verification link sent
                to your email ({auth.user.email}).
              </p>
            </AlertDescription>
          </Alert>
        )}

        <h1>Hello, {auth.user.name}.</h1>
        <div className="flex flex-wrap -mx-3 mb-5 removable">
          <div className="w-full max-w-full px-3 mb-6 lg:w-1/3 sm:flex-none xl:mb-0">
            <StatsCard
              title={'posts'}
              stat={posts}
              icon={
                <FileArchiveIcon
                  w="2em"
                  h="2em"
                  className="text-lg leading-none relative top-3.5 text-white"
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
                  className="text-lg leading-none relative top-3.5 text-white"
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
                  className="text-lg leading-none relative top-3.5 text-white"
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
              <p className="mb-0 font-sans font-semibold leading-normal text-sm">
                {title}
              </p>
              <h5 className="mb-0 font-bold">
                {' '}
                {stat}{' '}
                <span className="leading-normal text-sm font-weight-bolder text-lime-500">
                  +55%
                </span>
              </h5>
            </div>
          </div>
          <div className="px-3 text-right basis-1/3">
            <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
              {icon}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
