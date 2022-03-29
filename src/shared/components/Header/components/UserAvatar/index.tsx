import createAvatar from "../../../../utils/createAvatar";
import MAvatar, { MAvatarProps } from "../../../@material-extend/MAvatar";

export default function MyAvatar({ ...other }: MAvatarProps) {
    let name = "Lara Galvani"; // TODO: Change this as soon as we have the authentication in place

    return (
        <MAvatar alt={name} color={createAvatar(name).color} {...other}>
            {createAvatar(name).name}
        </MAvatar>
    );
}
