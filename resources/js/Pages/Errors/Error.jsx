import { Head, Link } from '@inertiajs/react';
import MainLayout from '../../components/Layouts/MainLayout';

const ErrorPage = ({ status, message }) => {
  return (
    <MainLayout>
      <Head>
        <title>{message}</title>
      </Head>
      <div class="flex h-screen items-center justify-center bg-gray-100">
        <div class="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
          <h1 class="mb-8 text-4xl font-bold text-gray-800">
            {status} - Page Not Found
          </h1>
          <p class="mb-6 text-gray-600">
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable. {message}
          </p>
          <Link
            href="/"
            class="inline-block rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white hover:bg-sky-600"
          >
            Go back to homepage
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default ErrorPage;
