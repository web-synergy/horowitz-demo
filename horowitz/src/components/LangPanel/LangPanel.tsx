import { FC, ChangeEvent, useEffect } from 'react';
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  FormControlLabelProps,
  Radio,
  Divider,
  styled,
} from '@mui/material';
import { useHomeData } from '../../store';
import { useLangData } from '../../store';

type Language = 'ua' | 'en';
const languages = ['ua', 'en'];

interface StyledFormControlLabelProps extends FormControlLabelProps {
  checked: boolean;
}

const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  margin: 0,
  '.MuiTypography-root': {
    fontSize: '18px',
    fontWeight: 350,
    textTransform: 'uppercase;',
    color: 'rgba(186, 186, 186, 0.3)',
  },

  '.MuiFormControlLabel-label': checked && {
    color: theme.palette.text.secondary,
    fontSize: '18px',
    fontWeight: 500,
  },
}));

interface LangPanelProps {
  additionalClickFn?: () => void;
}

const LangPanel: FC<LangPanelProps> = ({ additionalClickFn }) => {
  const { lang, setLang } = useLangData();
  const { getData } = useHomeData();

  //ToDo: make a request only if you are in the main page
  useEffect(() => {
    getData(lang);
  }, [getData, lang]);

  const onChangeLang = (event: ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value as Language;
    setLang(value);

    if (additionalClickFn) {
      additionalClickFn();
    }
  };

  return (
    <FormControl>
      <RadioGroup
        aria-label="language-panel"
        name="language"
        value={lang}
        onChange={onChangeLang}
        row
      >
        <StyledFormControlLabel
          value={languages[0]}
          control={<Radio sx={{ display: 'none' }} />}
          label={languages[0]}
          checked={languages[0] === lang}
          key={languages[0]}
          aria-label={`Вибрати українську`}
        />
        <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

        <StyledFormControlLabel
          value={languages[1]}
          control={<Radio sx={{ display: 'none' }} />}
          label={languages[1]}
          checked={languages[1] === lang}
          key={languages[1]}
          aria-label={`Вибрати англійську`}
          sx={{ cursor: 'default' }}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default LangPanel;
