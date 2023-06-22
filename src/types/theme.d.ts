interface Theme {
  dark: boolean,
  colors: colors;
}

interface colors {
  primary: string;
  background: string;
  card: string;
  text: string;
  subText?: string;
  icon?: string;
  border: string;
  notification: string;
  disabled: string;
  danger?: string;
  accent?: string;
  tertiary?: string;
}