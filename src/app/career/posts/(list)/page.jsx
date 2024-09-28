import { CONFIG } from 'src/config-global';

import { CareerPostsView } from 'src/sections/_career/view/career-posts-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Post list | Career - ${CONFIG.appName}` };

export default function Page() {
  return <CareerPostsView />;
}
