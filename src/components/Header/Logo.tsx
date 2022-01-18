import { Text } from "@chakra-ui/react";

export const Logo = () => {
	return(
		<Text
			fontSize="3xl"
			fontWeight="bold"
			letterSpacing="tight"
			w="62"
		>
			DashGo
		<Text as="span" ml="1" color="pink.500">.</Text>
	</Text>
	);
}
