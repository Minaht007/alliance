import { useContext } from "react";
import ProfileContext from "./ProfileContext.jsx";

export const useProfile = () => useContext(ProfileContext);
