/**
 * NavbarWrapper — Server Component
 *
 * Fetches settings and categories on the server, passes as props to the
 * interactive NavbarClient (Client Component) that handles scroll, mobile menu, etc.
 */

import { getSiteSettings, getServiceCategories } from '@/lib/api-functions';
import { NavbarClient } from './NavbarClient';

export async function Navbar() {
  const [settings, categories] = await Promise.all([
    getSiteSettings(),
    getServiceCategories(),
  ]);

  return <NavbarClient settings={settings} categories={categories} />;
}
