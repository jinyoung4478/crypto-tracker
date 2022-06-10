import { atom } from 'recoil';

export const darkAtom = atom({
    key: "isDarkMode",
    default: false,
});

export const chartAtom = atom({
    key: "isLineChart",
    default: true,
})