import { CONFIG } from 'src/config-global';

import { SignUpSplitView } from 'src/sections/auth/sign-up-split-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign up | Layout split - ${CONFIG.appName}` };

export default function Page() {
  return <SignUpSplitView />;
}
