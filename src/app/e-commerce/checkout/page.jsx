import { _products } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { EcommerceCheckoutView } from 'src/sections/_ecommerce/view/ecommerce-checkout-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Checkout | E-commerce - ${CONFIG.appName}` };

export default function Page() {
  return <EcommerceCheckoutView products={_products.slice(0, 3)} />;
}
