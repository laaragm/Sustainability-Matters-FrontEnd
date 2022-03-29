import { capitalize } from "lodash";

const getFirstCharacter = (name: string) => {
    return capitalize(name && name.charAt(0));
};

export default function createAvatar(name: string) {
    return {
        name: getFirstCharacter(name),
        color: "secondary",
    } as const;
}
