import GuestLayout from '@/Pages/Backend/Layouts/GuestLayout';
import PrimaryButton from '@/Components/Backend/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';
import { useColorModeValue } from '@chakra-ui/react';

export default function VerifyEmail({ status }) {
	const { post, processing } = useForm({});

	const submit = e => {
		e.preventDefault();

		post(route('verification.send'));
	};

	return (
		<GuestLayout>
			<Head title="Email Verification" />

			<Container maxW="7xl" p={{ base: 5, md: 10 }}>
				<Center>
					<Stack spacing={4} boxSize={{ base: 'sm', sm: 'md', md: 'lg' }}>
						<Stack align="center">
							<Text fontSize={'sm'} textAlign={'center'} md={4} color={useColorModeValue('gray.600', 'gray.400')}>
								Thanks for signing up! Before getting started, could you verify your email address by clicking on the
								link we just emailed to you? If you didn't receive the email, we will gladly send you another.
							</Text>
							{status === 'verification-link-sent' && (
								<Text fontWeight={'medium'} my={4} color={useColorModeValue('green.600', 'green.400')}>
									A new verification link has been sent to the email address you provided during registration.
								</Text>
							)}
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
								<PrimaryButton disabled={processing}>Resend Verification Email</PrimaryButton>

								<Link href={route('logout')} method="post" as="button">
									<Button
										color={useColorModeValue('gray.600', 'gray.400')}
										__hover={{
											color: useColorModeValue('gray.900', 'gray.100'),
										}}
										variant={'link'}
									>
										Log Out
									</Button>
								</Link>
							</VStack>
						</VStack>
					</Stack>
				</Center>
			</Container>
		</GuestLayout>
	);
}
