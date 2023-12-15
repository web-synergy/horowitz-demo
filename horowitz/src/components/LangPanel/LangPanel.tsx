import { FC, ChangeEvent } from 'react';
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  FormControlLabelProps,
  Radio,
  Divider,
  styled,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { languages } from '../../config/constants';

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
  const location = useLocation();
  const navigate = useNavigate();
  const {
    i18n: { language, changeLanguage },
  } = useTranslation();

  const onChangeLang = (event: ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    changeLanguage(value);

    const path = location.pathname.split('/').slice(2).join('/');

    navigate(`/${value}/${path}`);

    if (additionalClickFn) {
      additionalClickFn();
    }
  };

  return (
    <FormControl>
      <RadioGroup
        aria-label="language-panel"
        name="language"
        value={language}
        onChange={onChangeLang}
        row
      >
        <StyledFormControlLabel
          value={languages[0]}
          control={<Radio sx={{ display: 'none' }} />}
          label={languages[0]}
          checked={languages[0] === language}
          key={languages[0]}
          aria-label={`Вибрати українську`}
        />
        <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

        <StyledFormControlLabel
          value={languages[1]}
          control={<Radio sx={{ display: 'none' }} />}
          label={languages[1]}
          checked={languages[1] === language}
          key={languages[1]}
          aria-label={`Вибрати англійську`}
          sx={{ cursor: 'default' }}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default LangPanel;
