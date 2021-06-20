import { memo } from 'react';

import Typography from '~/components/Typography';

const NotFoundScreen = () => {
  return <Typography>We couldn't find this URL</Typography>;
};

export default memo(NotFoundScreen);
