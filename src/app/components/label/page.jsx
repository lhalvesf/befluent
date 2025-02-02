import { CONFIG } from 'src/config-global';

import { LabelView } from 'src/sections/_examples/label-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Label | Components - ${CONFIG.appName}` };

export default function Page() {
  return <LabelView />;
}
