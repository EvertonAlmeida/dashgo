import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export const SidebarNav = () => {
	return (
		<Stack spacing="12" align="flex-start">
		<NavSection title="GENERAL">
			<NavLink icon={RiDashboardLine} href="/dashboard" name="Dashboard" />
			<NavLink icon={RiContactsLine} href="/users" name="Users" />
		</NavSection>
		<NavSection title="AUTOMATION">
			<NavLink icon={RiInputMethodLine} href="/form" name="Form" />
			<NavLink icon={RiGitMergeLine} href="/automation" name="Automation" />
		</NavSection>
	</Stack>
	);
}
