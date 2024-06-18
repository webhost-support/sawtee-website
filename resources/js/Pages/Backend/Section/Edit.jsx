import React from 'react';
import AuthenticatedLayout from '@/Pages/Backend/Layouts/AuthenticatedLayout';
import EditSectionForm from './Partials/EditSectionForm';
import { Head } from '@inertiajs/react';

export default function Edit({ auth, sections, section, pages }) {
	return (
		<AuthenticatedLayout user={auth.user}>
			<Head title="Edit Section" />
			<EditSectionForm sections={sections} section={section} pages={pages} />
		</AuthenticatedLayout>
	);
}
