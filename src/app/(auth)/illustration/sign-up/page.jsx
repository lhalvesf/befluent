import { CONFIG } from 'src/config-global';

import { SignUpIllustrationView } from 'src/sections/auth/sign-up-illustration-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign up | Layout illustration - ${CONFIG.appName}` };

export default function Page() {
  return <SignUpIllustrationView />;
}
