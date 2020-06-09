export const getRandomHexDigits = (): string => {
  return Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
};

export const getRandomHSLColor = (): string => {
  return `hsla(${~~(360 * Math.random())},70%,70%,0.8)`;
};
