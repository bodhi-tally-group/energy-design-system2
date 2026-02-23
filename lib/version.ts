/**
 * Single source of truth for the Tally Energy Design System version.
 * Format: 1.5.x (patch increments per release, e.g. 1.5.3). Keep in sync with package.json and CHANGELOG.md.
 */
export const DESIGN_SYSTEM_VERSION = "1.5.5";

/** Base version (major.minor) shown as static text; only the patch is the link. */
export function getVersionBaseAndPatch(version: string): { base: string; patch: string } {
  const parts = version.split(".");
  const base = parts.length >= 2 ? parts.slice(0, 2).join(".") : version;
  const patch = parts.length >= 3 ? parts[2]! : "0";
  return { base, patch };
}
