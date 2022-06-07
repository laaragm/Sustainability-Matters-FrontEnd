import { useAuth } from "../../../../../hooks/useAuth";
import createAvatar from "../../../../utils/createAvatar";
import MAvatar, { MAvatarProps } from "../../../@material-extend/MAvatar";

export default function MyAvatar({ ...other }: MAvatarProps) {
    const { name } = useAuth();

    return (
        <MAvatar alt={name} color={createAvatar(name).color} {...other}>
            {createAvatar(name)?.name}
        </MAvatar>
    );
}
