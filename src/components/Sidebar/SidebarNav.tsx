import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export const SidebarNav = () => {
	return (
		<Stack spacing="12" align="flex-start">
		<NavSection title="GENERAL">
			<NavLink icon={RiDashboardLine} name="Dashboard" />
			<NavLink icon={RiContactsLine} name="Users" />
		</NavSection>
		<NavSection title="AUTOMATION">
			<NavLink icon={RiInputMethodLine} name="Form" />
			<NavLink icon={RiGitMergeLine} name="Automation" />
		</NavSection>
	</Stack>
	);
}
