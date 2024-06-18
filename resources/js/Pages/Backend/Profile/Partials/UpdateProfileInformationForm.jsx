import PrimaryButton from '@/Components/Backend/PrimaryButton';
import { Link, useForm, usePage } from '@inertiajs/react';
import {
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	Text,
	Box,
	FormControl,
	Flex,
	useColorModeValue,
	useToast,
	VStack,
} from '@chakra-ui/react';

export default function UpdateProfileInformation({ mustVerifyEmail, status, className = '' }) {
	const user = usePage().props.auth.user;
	const toast = useToast();
	const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
		name: user.name,
		email: user.email,
	});

	const submit = e => {
		e.preventDefault();
		patch(route('admin.profile.update'), {
			preserveScroll: true,
			onSuccess: () => {
				toast({
					title: 'Success',
					description: 'Profile information updated.',
					status: 'success',
					duration: 9000,
					isClosable: true,
				});
			},
		});
	};

	return (
		<Box as="section" className={className}>
			<header>
				<Heading as="h2" fontSize={'lg'} fontWeight={'medium'} color={useColorModeValue('gray.900', 'gray.100')}>
					Profile Information
				</Heading>

				<Text mt={1} fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
					Update your account's profile information and email address.
				</Text>
			</header>

			<VStack as="form" onSubmit={submit} mt={6} py={6} gap={4} alignItems={'flex-start'}>
				<FormControl isRequired>
					<FormLabel htmlFor="name">Name</FormLabel>

					<Input id="name" value={data.name} onChange={e => setData('name', e.target.value)} autoComplete="name" />

					<FormErrorMessage mt={2}>{errors.name}</FormErrorMessage>
				</FormControl>

				<FormControl isRequired>
					<FormLabel htmlFor="email">Email</FormLabel>

					<Input
						id="email"
						type="email"
						value={data.email}
						onChange={e => setData('email', e.target.value)}
						autoComplete="username"
					/>

					<FormErrorMessage mt={2}>{errors.email}</FormErrorMessage>
				</FormControl>

				{mustVerifyEmail && user.email_verified_at === null && (
					<Box>
						<Text as="p" mt={2} fontSize={'sm'} color={useColorModeValue('gray.800', 'gray.200')}>
							Your email address is unverified.
							<Link
								href={route('verification.send')}
								method="post"
								as="button"
								className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
							>
								Click here to re-send the verification email.
							</Link>
						</Text>

						{status === 'verification-link-sent' && (
							<Box mt={2} fontSize={'sm'} fontWeight="md" color={useColorModeValue('green.600', 'green.400')}>
								A new verification link has been sent to your email address.
							</Box>
						)}
					</Box>
				)}

				<Flex justifyCenter gap={4}>
					<PrimaryButton minW={64} type="submit" isLoading={processing}>
						Save
					</PrimaryButton>
				</Flex>
			</VStack>
		</Box>
	);
}
