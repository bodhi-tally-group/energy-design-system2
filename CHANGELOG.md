# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.5.3] - 2026-02-18

### Added

- **Powered by Tally brand page** – New foundation page at `/foundation/brands/powered-by-tally` documenting the Powered by Tally badge:
  - Two badge variants (light and dark/REV) with previews and download links
  - “Use in the nav bar” section with NavigationBar demos (expanded and collapsed)
- **Powered by Tally in Brands** – “Powered by Tally” added to the Brands section in the sidebar navigation and to the brands index with a dedicated card.
- **Powered by Tally dark variant (REV)** – New asset `PoweredByTallyBadgeREV.svg` in `public/` for use on dark backgrounds; all dark-variant usage now references this file.

### Changed

- **Dark badge references** – NavigationBar, Sidebar, and all pages that showed the dark Powered by Tally badge (small-market, tally-orion, tally-acquire, sales-acquisition-dashboard, tally-large-market) now use `PoweredByTallyBadgeREV.svg` instead of `PoweredByTallyBadgeDark.svg`.
- **Brands index – logos** – Brand cards on the Brands home page now show the respective brand logos (Tally Group, Tally+, Tally+ Small Market, Tally Sales & Acquisition, Tally Digital, Tally CRM, Powered by Tally) where assets exist; icons are used only when no logo is available.
- **Brands index – logo layout** – Removed the grey box around logos; logos are larger (72px row height), consistent in size, and left-aligned for a cleaner, more visible presentation.
