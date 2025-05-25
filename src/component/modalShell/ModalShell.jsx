import { useProfile } from "../../utils/useProfile";
import styles from "./modalShell.module.css";

import ProfilePanel from "../userInfo/userInfo";
import DonateMenu from "../donateMenu/DonateMenu";
import InviteMenu from "../inviteMenu/InviteMenu";

const ModalShell = () => {
	const { isOpen, modalView } = useProfile();

	if (!isOpen) return null;

	return (
		<div className={styles.overlay}>
			<div className={styles.panel}>
				{modalView === "profile" && <ProfilePanel />}
				{modalView === "donate" && <DonateMenu />}
				{modalView === "invite" && <InviteMenu />}
			</div>
		</div>
	);
};

export default ModalShell;
