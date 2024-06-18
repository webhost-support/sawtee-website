import PrimaryButton from '@/Components/Backend/PrimaryButton';
import { useForm } from '@inertiajs/react';
import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Textarea,
	VStack,
	HStack,
	useToast,
	Input,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
} from '@chakra-ui/react';
import FileUpload, { PreviewImage } from '@/Components/Backend/FileUpload';
import React from 'react';

export default function CreateTeamForm({}) {
	const { data, setData, post, processing, errors, reset } = useForm({
		name: '',
		email: '',
		designation: null,
		bio: '',
		order: 0,
		image: '',
	});
	const toast = useToast();
	const [image, setImage] = React.useState(null);

	const submit = e => {
		e.preventDefault();
		post(route('admin.teams.store'), {
			preserveScroll: true,
			onSuccess: () =>
				toast({
					position: 'top-right',
					title: 'Team member Created.',
					description: 'Team member Created Successfully',
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
			<HStack w="full" gap={8} justifyContent="space-evenly" alignItems="center">
				<FormControl isRequired isInvalid={errors.name}>
					<FormLabel htmlFor="name">Name</FormLabel>

					<Input
						id="name"
						name="name"
						placeholder="enter member name"
						onChange={e => setData('name', e.target.value)}
						required
					/>

					{errors.name && <FormErrorMessage mt={2}>{errors.name}</FormErrorMessage>}
				</FormControl>

				<FormControl isInvalid={errors.email}>
					<FormLabel htmlFor="email">email</FormLabel>

					<Input
						type="email"
						id="email"
						name="email"
						placeholder="enter member email"
						onChange={e => setData('email', e.target.value)}
					/>

					{errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
				</FormControl>
			</HStack>
			<HStack w="full" gap={8} justifyContent="space-between" alignItems="center">
				<VStack w="full" gap="6" alignItems={'start'}>
					<HStack w="full" gap={8} justifyContent="space-evenly" alignItems="center">
						<FormControl isInvalid={errors.designation} isRequired>
							<FormLabel htmlFor="designation">Designation</FormLabel>
							<Input
								id="designation"
								name="designation"
								placeholder="enter member designation"
								onChange={e => setData('designation', e.target.value)}
							/>
							{errors.designation && <FormErrorMessage mt={2}>{errors.designation}</FormErrorMessage>}
						</FormControl>
						<FormControl maxW="64" isRequired isInvalid={errors.order}>
							<FormLabel htmlFor="order">Order</FormLabel>
							<NumberInput
								id="order"
								name="order"
								defaultValue={data.order}
								onChange={e => setData('order', e.target.value)}
							>
								<NumberInputField />
								<NumberInputStepper>
									<NumberIncrementStepper />
									<NumberDecrementStepper />
								</NumberInputStepper>
							</NumberInput>
							{errors.order && <FormErrorMessage mt={2}>{errors.order}</FormErrorMessage>}
						</FormControl>
					</HStack>
					<FormControl>
						<FormLabel htmlFor="bio">Bio</FormLabel>
						<Textarea
							id="bio"
							name="bio"
							placeholder="enter member bio"
							rows={10}
							resize={'vertical'}
							onChange={e => setData('bio', e.target.value)}
						/>
						{errors.bio && <FormErrorMessage mt={2}>{errors.bio}</FormErrorMessage>}
					</FormControl>
				</VStack>

				<FormControl isInvalid={errors.image} maxW="lg">
					<FormLabel htmlFor="image">Image</FormLabel>

					{image && (
						<>
							<Box w="48">
								<PreviewImage src={image} aspectRatio={3 / 4} />
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
			</HStack>
			<PrimaryButton type="submit" isLoading={processing} minW="64">
				Save
			</PrimaryButton>
		</VStack>
	);
}
