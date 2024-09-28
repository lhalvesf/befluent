import { CONFIG } from 'src/config-global';

import { TravelLandingView } from 'src/sections/_travel/view/travel-landing-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Home | Travel - ${CONFIG.appName}` };

export default function Page() {
  return <TravelLandingView />;
}
