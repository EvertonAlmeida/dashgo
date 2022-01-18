import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export const Profile = () => {
	return(
		<Flex
			align="center"
		>
			<Box mr="4" textAlign="right">
				<Text>Everton Almeida</Text>
				<Text
					color="gray.300"
					fontSize="small"
				>
					contato@evertonalmeida.com
				</Text>
			</Box>

			<Avatar
				size="md"
				name="Everton Almeida"
				src="https://github.com/evertonalmeida.png"
			/>

		</Flex>
	);
}
