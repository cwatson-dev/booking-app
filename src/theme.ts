interface Theme {
  background: string
  text: string
  lightText: string
  whiteText: string
  primary: string
  secondary: string
  disabled: string
  btnShadow: string
  containerShadow: string
  cardShadow: string
}

const theme: { light: Theme, dark: Theme } = {
  light: {
    background: '#fff',
    text: '#000',
    lightText: '#444',
    whiteText: '#fff',
    primary: '#febd11',
    secondary: '#4287f5',
    disabled: '#bbb',
    btnShadow: '0px 4px 6px #888',
    containerShadow: '0px 0px 15px #222',
    cardShadow: '0px 2px 5px #444',
  },
  dark: {
    background: '#444',
    text: '#fff',
    lightText: '#bbb',
    whiteText: '#fff',
    primary: '#febd11',
    secondary: '#4287f5',
    disabled: '#bbb',
    btnShadow: '0px 4px 6px #222',
    containerShadow: '0px 0px 15px #000',
    cardShadow: '0px 2px 4px #000',
  },
};

export default theme;
