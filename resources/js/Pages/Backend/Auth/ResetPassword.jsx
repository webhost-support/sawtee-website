import { useEffect } from 'react';
import GuestLayout from '@/Pages/Backend/Layouts/GuestLayout';
import PrimaryButton from '@/Components/Backend/PrimaryButton';
import { Head, useForm } from '@inertiajs/react';

export default function ResetPassword({ token, email }) {
	const { data, setData, post, processing, errors, reset } = useForm({
		token: token,
		email: email,
		password: '',
		password_confirmation: '',
	});

	useEffect(() => {
		return () => {
			reset('password', 'password_confirmation');
		};
	}, []);

	const submit = e => {
		e.preventDefault();

		post(route('password.store'));
	};

	return (
		<GuestLayout>
			<Head title="Reset Password" />
			<Container maxW="7xl" p={{ base: 5, md: 10 }}>
				<Center>
					<Stack spacing={4} boxSize={{ base: 'sm', sm: 'md', md: 'lg' }}>
						<VStack
							boxSize={{ base: 'sm', sm: 'md', md: 'lg' }}
							h="max-content !important"
							bg={useColorModeValue('white', 'gray.700')}
							rounded="lg"
							boxShadow="lg"
							p={{ base: 5, sm: 10 }}
							spacing={8}
							as={'form'}
							onSubmit={submit}
						>
							<VStack spacing={4} w="100%">
								<FormControl>
									<FormLabel htmlFor="email">Email</FormLabel>

									<Input
										id="email"
										type="email"
										name="email"
										value={data.email}
										placeholder="Email"
										mt={1}
										w={'full'}
										onChange={e => setData('email', e.target.value)}
									/>

									{errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
								</FormControl>
								<FormControl>
									<FormLabel htmlFor="password">Password</FormLabel>

									<Input
										id="password"
										type="password"
										name="password"
										value={data.password}
										mt={1}
										w={'full'}
										onChange={e => setData('password', e.target.value)}
									/>

									{errors.password && <FormErrorMessage>{errors.password}</FormErrorMessage>}
								</FormControl>

								<FormControl>
									<FormLabel htmlFor="password_confirmation">Confirm Password</FormLabel>

									<Input
										id="password_confirmation"
										type="password_confirmation"
										name="password_confirmation"
										value={data.password_confirmation}
										mt={1}
										w={'full'}
										onChange={e => setData('password_confirmation', e.target.value)}
									/>

									{errors.password_confirmation && <FormErrorMessage>{errors.password_confirmation}</FormErrorMessage>}
								</FormControl>

								<PrimaryButton ml={4} disabled={processing}>
									Reset Password
								</PrimaryButton>
							</VStack>
						</VStack>
					</Stack>
				</Center>
			</Container>
		</GuestLayout>
	);
}
