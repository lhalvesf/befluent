import { _products } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { EcommerceWishlistView } from 'src/sections/_ecommerce/view/ecommerce-wishlist-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Products wishlist | E-commerce - ${CONFIG.appName}` };

export default function Page() {
  return <EcommerceWishlistView products={_products.slice(0, 4)} />;
}
