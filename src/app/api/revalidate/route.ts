/**
 * On-Demand Revalidation Endpoint
 * Route: POST /api/revalidate
 *
 * Usage:
 *   POST /api/revalidate
 *   Headers: { Authorization: "Bearer <REVALIDATE_SECRET>" }
 *   Body (JSON): one or more of:
 *     { "tag": "service-google-business-repair" }   — revalidate by cache tag
 *     { "path": "/services/google-business-repair" } — by path
 *     { "tags": ["services", "faqs"] }              — multiple tags
 *     { "paths": ["/services", "/"] }               — multiple paths
 *
 * Available tags (mirror the tags used in api-functions.ts):
 *   settings, categories, services, featured, industries, blogs, case-studies,
 *   testimonials, video-testimonials, faqs,
 *   service-{slug}, category-{slug}, industry-{slug}, blog-{slug}, case-study-{slug}
 *
 * Flow:
 *   Admin updates content in CMS
 *   → Backend calls POST /api/revalidate with the relevant tag
 *   → Next.js invalidates the CDN/ISR cache for that tag
 *   → Next visitor triggers fresh generation of affected pages
 */

import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

interface RevalidateBody {
  tag?: string;
  tags?: string[];
  path?: string;
  paths?: string[];
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  // ── 1. Authenticate ───────────────────────────────────────────────────────
  const secret = process.env.REVALIDATE_SECRET;

  if (!secret) {
    console.error('[/api/revalidate] REVALIDATE_SECRET is not set in environment variables.');
    return NextResponse.json(
      { revalidated: false, error: 'Server misconfiguration: secret not set.' },
      { status: 500 }
    );
  }

  const authHeader = request.headers.get('Authorization');
  const providedToken = authHeader?.replace('Bearer ', '').trim();

  if (!providedToken || providedToken !== secret) {
    return NextResponse.json(
      { revalidated: false, error: 'Unauthorized: invalid or missing token.' },
      { status: 401 }
    );
  }

  // ── 2. Parse body ─────────────────────────────────────────────────────────
  let body: RevalidateBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { revalidated: false, error: 'Invalid JSON body.' },
      { status: 400 }
    );
  }

  const { tag, tags = [], path, paths = [] } = body;

  // Collect all tags & paths to revalidate
  const allTags: string[] = [...tags, ...(tag ? [tag] : [])];
  const allPaths: string[] = [...paths, ...(path ? [path] : [])];

  if (allTags.length === 0 && allPaths.length === 0) {
    return NextResponse.json(
      {
        revalidated: false,
        error: 'Provide at least one of: tag, tags, path, paths.',
      },
      { status: 400 }
    );
  }

  // ── 3. Revalidate ─────────────────────────────────────────────────────────
  const revalidatedTags: string[] = [];
  const revalidatedPaths: string[] = [];
  const errors: string[] = [];

  for (const t of allTags) {
    try {
      revalidateTag(t, 'page');
      revalidatedTags.push(t);
      console.log(`[/api/revalidate] Revalidated tag: "${t}"`);
    } catch (err) {
      const msg = `Failed to revalidate tag "${t}": ${String(err)}`;
      console.error(`[/api/revalidate] ${msg}`);
      errors.push(msg);
    }
  }

  for (const p of allPaths) {
    try {
      revalidatePath(p, 'page');
      revalidatedPaths.push(p);
      console.log(`[/api/revalidate] Revalidated path: "${p}"`);
    } catch (err) {
      const msg = `Failed to revalidate path "${p}": ${String(err)}`;
      console.error(`[/api/revalidate] ${msg}`);
      errors.push(msg);
    }
  }

  // ── 4. Respond ────────────────────────────────────────────────────────────
  const hasSuccess = revalidatedTags.length > 0 || revalidatedPaths.length > 0;

  return NextResponse.json(
    {
      revalidated: hasSuccess,
      revalidatedTags,
      revalidatedPaths,
      ...(errors.length > 0 && { errors }),
      timestamp: new Date().toISOString(),
    },
    { status: hasSuccess ? 200 : 500 }
  );
}

// Reject non-POST methods
export async function GET(): Promise<NextResponse> {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST.' },
    { status: 405 }
  );
}
