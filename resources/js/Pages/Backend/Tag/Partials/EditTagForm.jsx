import PrimaryButton from '@/Components/Backend/PrimaryButton';
import { useForm } from '@inertiajs/react';
import { Box, FormControl, FormErrorMessage, FormLabel, useToast, Input } from '@chakra-ui/react';

export default function EditThemeForm({ tag }) {
	const { data, setData, post, processing, errors, reset } = useForm({
		name: tag.name,
	});
	const toast = useToast();

	const submit = e => {
		e.preventDefault();

		post(route('admin.tags.store'), {
			preserveScroll: true,
			onSuccess: () =>
				toast({
					position: 'top-right',
					title: 'Tag edited.',
					description: 'Tag edited Successfully',
					status: 'success',
					duration: 6000,
					isClosable: true,
				}),
			onError: errors => {
				if (errors.name) {
					reset('name');
				}
			},
		});
	};

	return (
		<form onSubmit={submit}>
			<FormControl mt="4" isInvalid={errors.name}>
				<FormLabel htmlFor="name">Name</FormLabel>

				<Input
					id="name"
					name="name"
					placeholder="enter tag name"
					value={data.name}
					onChange={e => setData('name', e.target.value)}
					required
				/>

				<FormErrorMessage message={errors.name} className="mt-2" />
			</FormControl>

			<Box display="flex" gap="4" mt="4">
				<PrimaryButton type="submit" disabled={processing}>
					Save
				</PrimaryButton>
			</Box>
		</form>
	);
}
