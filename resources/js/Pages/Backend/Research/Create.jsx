import AuthenticatedLayout from '@/Pages/Backend/Layouts/AuthenticatedLayout';

import { Head } from '@inertiajs/react';
import CreateResearchForm from './Partials/CreateResearchForm';

export default function Create({ auth }) {
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Add New Research" />
      <CreateResearchForm />
    </AuthenticatedLayout>
  );
}
