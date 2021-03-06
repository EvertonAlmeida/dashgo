import { Button, Flex, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../components/Form/Input'

type SignInFormData = {
	email: string;
	password: string;
}

const schema = yup.object({
	email: yup.string().required().email(),
	password: yup.string().required(),
});

export default function SignIn() {
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(schema),
	});

	const { errors } = formState;

	const handleSignIn: SubmitHandler<SignInFormData> =  async (values) => {
		await new Promise(resolve => setTimeout(resolve, 2000))
		console.log(values);
	}

  return (
	<Flex
		w="100vw"
		h="100vw"
		align="center"
		justify="center"
	>
			<Flex
				as="form"
				w="100%"
				maxW={360}
				bg="gray.800"
				p="8"
				borderRadius={8}
				flexDir="column"
				onSubmit={handleSubmit(handleSignIn)}
			>
				<Stack spacing="4">
					<Input
						name="email"
						type="email"
						label="E-mail"
						error={errors.email}
						{...register('email')}
					/>
					<Input
						name="current-password"
						type="current-password"
						label="Password"
						error={errors.password}
						{...register('current-password')}
					/>
				</Stack>
				<Button
					type="submit"
					mt="6"
					colorScheme="pink"
					size="lg"
					isLoading={formState.isSubmitting}
				>
					Login
				</Button>
			</Flex>
	</Flex>
  )
}
