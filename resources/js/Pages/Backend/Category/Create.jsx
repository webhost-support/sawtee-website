import AuthenticatedLayout from '@/components/Layouts/AuthenticatedLayout';

import { Head } from '@inertiajs/react';
import CreateCategoryForm from './Partials/CreateCategoryForm';

export default function Create({ auth, categories }) {
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Add New Category" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
            <CreateCategoryForm className="max-w-xl" categories={categories} />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
