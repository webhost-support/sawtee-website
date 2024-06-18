import { useEffect } from 'react';
import GuestLayout from '@/Pages/Backend/Layouts/GuestLayout';
import PrimaryButton from '@/Components/Backend/PrimaryButton';
import { Head, useForm } from '@inertiajs/react';

export default function ConfirmPassword() {
	const { data, setData, post, processing, errors, reset } = useForm({
		password: '',
	});

	useEffect(() => {
		return () => {
			reset('password');
		};
	}, []);

	const submit = e => {
		e.preventDefault();

		post(route('password.confirm'));
	};

	return (
		<GuestLayout>
			<Head title="Confirm Password" />
			<Container maxW="7xl" p={{ base: 5, md: 10 }}>
				<Center>
					<Stack spacing={4} boxSize={{ base: 'sm', sm: 'md', md: 'lg' }}>
						<Stack align="center">
							<Text fontSize={'2xl'} textAlign={'center'} md={4} color={useColorModeValue('gray.600', 'gray.400')}>
								This is a secure area of the application. Please confirm your password before continuing.
							</Text>
						</Stack>
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

								<PrimaryButton ml={4} disabled={processing}>
									Confirm
								</PrimaryButton>
							</VStack>
						</VStack>
					</Stack>
				</Center>
			</Container>
		</GuestLayout>
	);
}
