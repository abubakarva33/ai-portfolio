/**
 * FooterWrapper — Server Component
 *
 * Fetches site settings on the server, passes as props to FooterClient
 * which handles the newsletter form interaction.
 */

import { getSiteSettings } from '@/lib/api-functions';
import { FooterClient } from './FooterClient';

export async function Footer() {
  const settings = await getSiteSettings();
  return <FooterClient settings={settings} />;
}
