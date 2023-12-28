import { styled } from '@mui/material';

export const Video = styled('video')({
  minWidth: '100%',
  minHeight: '100%',
  width: 'auto',
  height: 'auto',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});
