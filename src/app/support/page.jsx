import { CONFIG } from 'src/config-global';

import { SupportView } from 'src/sections/support/view/support-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Support - ${CONFIG.appName}` };

export default function Page() {
  return <SupportView />;
}
