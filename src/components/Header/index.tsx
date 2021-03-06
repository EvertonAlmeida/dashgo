import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../context/SidebarDrawerContext";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export const Header = () => {
	const { onOpen } = useSidebarDrawer()

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	})

	return (
		<Flex as="header"
			w="100%"
			maxW={1480}
			h="20"
			mx="auto"
			mt="4"
			px="6"
			align="center"
		>
			{ !isWideVersion && (
				<IconButton
					aria-label="Open navigation"
					icon={<Icon as={RiMenuLine} />}
					fontSize="24"
					variant="unstyled"
					onClick={onOpen}
					mr="2"
					mt={["2","3"]}
				>
				</IconButton>
			)}

			<Logo />

			{ isWideVersion && (<SearchBox />)}


			<Flex
				aling="center"
				ml="auto"
			>
				<NotificationNav />
				<Profile showProfileData={isWideVersion} />
			</Flex>
		</Flex>
	);
}
