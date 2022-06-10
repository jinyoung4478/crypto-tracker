import { atom } from 'recoil';

export const darkAtom = atom({
    key: "isDarkMode",
    default: false,
});