import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { yupResolver } from '@hookform/resolvers/yup';
import Link from "next/link";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import * as yup from 'yup';
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";

type CreateUserFormData = {
	name: string;
	email: string;
	password: string;
	password_confirmation: string;
  };

const schema = yup.object({
	name: yup.string().required(),
	email: yup.string().required().email(),
	password: yup.string().required().min(6),
	password_confirmation: yup.string().oneOf([
		null, yup.ref('password')
	], 'The passwords mus be equals'),
});

export default function CreateUser() {
	const router = useRouter();
	const createUser = useMutation(async(user: CreateUserFormData) => {
		const response = await api.post('users', {
			user : {
				...user,
				created_at: new Date()
			}
		});

		return response.data.user;
	}, {
		onSuccess: () => {
			queryClient.invalidateQueries('users')
		}
	})

	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(schema)
	});

	const { errors } = formState;

	const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
		await createUser.mutateAsync(values);

		router.push('/users');
	}

	return(
		<Box>
			<Header />

			<Flex w="100%" my="6" maxW="1480" mx="auto" px="6">
				<Sidebar />

				<Box
					as="form"
					flex="1"
					borderRadius={8}
					bg="gray.800"
					p={["6", "8"]}
					onSubmit={handleSubmit(handleCreateUser)}
				>
					<Heading size="lg" fontWeight="normal">create user</Heading>

					<Divider my="6" borderColor="gray.700" />

					<VStack spacing="8">
						<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
							<Input
								id="name"
								name="name"
								label="full name"
								error={errors.name}
								{...register('name')}
							 />
							<Input
								id="email"
								name="email"
								type="email"
								label="E-mail"
								error={errors.email}
								{...register('email')}
							 />
						</SimpleGrid>

						<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
							<Input
								id="password"
								name="password"
								type="password"
								label="Password"
								autoComplete="password"
								error={errors.password}
								{...register('password')}
							/>

							<Input
								id="password_confirmation"
								name="password_confirmation"
								type="password"
								label="Password confirmation"
								autoComplete="password_confirmation"
								error={errors.password_confirmation}
								{...register('password_confirmation')}
							/>
						</SimpleGrid>
					</VStack>

					<Flex mt="8" justify="flex-end">
						<HStack spacing="4">
							<Link href="/users" passHref>
								<Button as="a" colorScheme="whiteAlpha">Cancel</Button>
							</Link>
							<Button
								type="submit"
								colorScheme="pink"
								isLoading={formState.isSubmitting}
							>
								Save
							</Button>
						</HStack>
					</Flex>
				</Box>
			</ Flex>
		</ Box>
	);
}
