import AuthenticatedLayout from '@/Pages/Backend/Layouts/AuthenticatedLayout';

import { Head } from '@inertiajs/react';
import EditTagForm from './Partials/EditTagForm';

export default function Edit({ auth, tag }) {
	return (
		<AuthenticatedLayout user={auth.user}>
			<Head title={'Edit ' + tag.name} />

			<EditTagForm tag={tag} />
		</AuthenticatedLayout>
	);
}
