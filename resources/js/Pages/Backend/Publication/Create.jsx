import AuthenticatedLayout from '@/Pages/Backend/Layouts/AuthenticatedLayout';

import { Head } from '@inertiajs/react';
import CreatePublicationForm from './Partials/CreatePublicationForm';

export default function Create({ auth, categories, tags }) {
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Add New Publication" />
      <CreatePublicationForm categories={categories} tags={tags} />
    </AuthenticatedLayout>
  );
}
