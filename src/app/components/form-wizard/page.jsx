import { CONFIG } from 'src/config-global';

import { FormWizardView } from 'src/sections/_examples/form-wizard-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Form wizard | Components - ${CONFIG.appName}` };

export default function Page() {
  return <FormWizardView />;
}
