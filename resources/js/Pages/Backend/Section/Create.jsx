import React from 'react';
import CreateSectionForm from './Partials/CreateSectionForm';
import AuthenticatedLayout from '@/Pages/Backend/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Create({ auth, sections, pages }) {
	return (
		<AuthenticatedLayout user={auth.user}>
			<Head title="Create Section" />
			<CreateSectionForm sections={sections} pages={pages} />
		</AuthenticatedLayout>
	);
}
