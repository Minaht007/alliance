import { createContext,  useState } from "react";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [joinToAlliance, setJoinToAlliance] = useState(false);

	const openProfile = () => setIsOpen(true);
	const closeProfile = () => setIsOpen(false);

	const joinAllians = () => setJoinToAlliance(true);
	const leaveAllianse = () => setJoinToAlliance(false);

	return (
		<ProfileContext.Provider
			value={{ isOpen, openProfile, closeProfile, joinAllians, leaveAllianse, joinToAlliance}}
		>
			{children}
		</ProfileContext.Provider>
	);
};

export default ProfileContext;
