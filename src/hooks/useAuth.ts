import { useContext } from "react";
import { IAuthContext, AuthContextWrap } from "../context/AuthContext";
import { IUser } from "../interfaces/interfaces";

const useAuth = (): { profile?: IUser; setProfile: any} => {
    const { profile, setProfile } = useContext<IAuthContext>(AuthContextWrap);
    return { profile, setProfile };
}

export default useAuth;
