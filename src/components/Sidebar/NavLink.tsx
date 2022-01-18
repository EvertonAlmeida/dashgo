import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react"
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps {
	icon: ElementType;
	name: string;
}

export const NavLink = ({ icon, name, ...rest }: NavLinkProps) => {
	return (
		<Link display="flex" align="center" {...rest}>
			<Icon as={icon} fontSize="20"/>
			<Text ml="4" fontWeight="medium">{name}</Text>
		</Link>
	)
}
