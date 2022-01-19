import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProvideProps {
	children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext =  createContext({} as SidebarDrawerContextData);

export function SideBarDrawerProvider({ children }: SidebarDrawerProvideProps) {
	const disclosure = useDisclosure()
	const router = useRouter()

	useEffect(() => {
		disclosure.onClose()
	}, [disclosure])

	return (
		<SidebarDrawerContext.Provider value={disclosure}>
			{children}
		</SidebarDrawerContext.Provider>
	)
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
