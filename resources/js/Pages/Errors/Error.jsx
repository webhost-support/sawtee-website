import Page404 from '@/Components/Frontend/page404';
import { Head } from '@inertiajs/react';
import MainLayout from '../../components/Layouts/MainLayout';

const ErrorPage = ({ status, message }) => {
  return (
    <MainLayout>
      <Head>
        <title>{message}</title>
      </Head>
      <Page404 status={status} message={message} />
    </MainLayout>
  );
};

export default ErrorPage;
