import PrimaryButton from '@/Components/Backend/PrimaryButton';
import { useForm } from '@inertiajs/react';
import {
	Box,
	Button,
	SimpleGrid,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Select,
	VStack,
	useToast,
	Input,
	Textarea,
	Text,
} from '@chakra-ui/react';
import FileUpload, { PreviewImage } from '@/Components/Backend/FileUpload';
import React from 'react';

export default function CreateCategoryForm({ categories }) {
	const { data, setData, post, processing, errors, reset } = useForm({
		name: '',
		slug: '',
		type: 'posts',
		parent_id: '',
		image: '',
		meta_title: '',
		meta_description: '',
	});
	const toast = useToast();
	const [image, setImage] = React.useState(null);

	const submit = e => {
		e.preventDefault();

		post(route('admin.categories.store'), {
			preserveScroll: true,
			onSuccess: () =>
				toast({
					position: 'top-right',
					title: 'Category Created.',
					description: 'Category Created Successfully',
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
		<VStack as="form" onSubmit={submit} gap="6" alignItems={'start'}>
			<FormControl mt="4" isInvalid={errors.name}>
				<FormLabel htmlFor="name">Name</FormLabel>

				<Input
					id="name"
					name="name"
					placeholder="enter category name"
					onChange={e => setData('name', e.target.value)}
					required
				/>

				{errors.name && <FormErrorMessage mt="2">{errors.name}</FormErrorMessage>}
			</FormControl>
			<SimpleGrid columns={2} gap={10} w="full">
				<FormControl>
					<FormLabel htmlFor="type">Select Category Type</FormLabel>

					<Select name="type" id="type" placeholder="Select Type" onChange={e => setData('type', e.target.value)}>
						{['post', 'publication', 'research', 'team'].map(item => (
							<option key={item} value={item}>
								{item}
							</option>
						))}
					</Select>
				</FormControl>

				<FormControl>
					<FormLabel htmlFor="parent_id">Select Parent</FormLabel>

					<Select
						name="parent_id"
						id="parent_id"
						placeholder="Select Parent"
						onChange={e => {
							setData('parent_id', e.target.value);
						}}
					>
						{categories &&
							categories.map(item => (
								<option key={item.id} value={item.id}>
									{item.name}
								</option>
							))}
					</Select>
				</FormControl>
			</SimpleGrid>

			<FormControl>
				<FormLabel htmlFor="image">Featured Image</FormLabel>

				{image && (
					<>
						<Box w="sm">
							<PreviewImage src={image} aspectRatio={16 / 9} />
						</Box>
						<Button
							mt={4}
							size={'sm'}
							colorScheme="red"
							onClick={() => {
								setImage(null);
							}}
						>
							Remove/Change Image
						</Button>
					</>
				)}

				{!image && (
					<FileUpload accept="image/.png,.jpg,.jpeg,.webp">
						<Input
							type="file"
							height="100%"
							width="100%"
							position="absolute"
							top="0"
							left="0"
							opacity="0"
							aria-hidden="true"
							accept="image/.png,.jpg,.jpeg,.webp"
							id="image"
							name="image"
							size="md"
							onChange={e => {
								setData('image', e.target.files[0]);
								setImage(URL.createObjectURL(e.target.files[0]));
							}}
						/>
					</FileUpload>
				)}
				{errors.image && <FormErrorMessage mt={2}>{errors.image}</FormErrorMessage>}
			</FormControl>
			<FormControl isInvalid={errors.meta_title}>
				<FormLabel htmlFor="meta_title">Meta Title</FormLabel>

				<Input
					id="meta_title"
					name="meta_title"
					placeholder="enter meta title"
					onChange={e => setData('meta_title', e.target.value)}
				/>

				{errors.meta_title && <FormErrorMessage mt="2">{errors.meta_title}</FormErrorMessage>}
			</FormControl>

			<FormControl isInvalid={errors.meta_description}>
				<FormLabel htmlFor="meta_description">Meta Description</FormLabel>

				<Textarea
					id="meta_description"
					name="meta_description"
					placeholder="enter meta_description"
					rows={3}
					resize="vertical"
					onChange={e => setData('meta_description', e.target.value)}
				/>

				{errors.meta_description && <FormErrorMessage mt="2">{errors.meta_description}</FormErrorMessage>}
			</FormControl>
			<PrimaryButton type="submit" isLoading={processing} minW="64">
				Save
			</PrimaryButton>
		</VStack>
	);
}
