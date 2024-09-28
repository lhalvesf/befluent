import { _products } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { EcommerceProductView } from 'src/sections/_ecommerce/view/ecommerce-product-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Product details | E-commerce - ${CONFIG.appName}` };

export default function Page() {
  return <EcommerceProductView product={_products[0]} />;
}
