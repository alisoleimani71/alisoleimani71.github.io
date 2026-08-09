# Ali Soleimani — Personal Website v1

This package contains the new public professional profile site based on the visual language of the LFTN page.

## Included
- `index.html` — public homepage / web CV
- `style.css` — shared visual system
- `projects/index.html` — public professional projects page
- `projects/project-template.html` — reusable project detail template

## Important architecture
The public site contains no links to job-application-specific pages. Application pages can remain separate/unlisted and be shared directly only when you choose.

## Before publishing
1. Replace the `AS` portrait placeholder in `index.html` with your preferred professional photo.
2. Replace the three generic project cards with the real project names/details.
3. Copy your existing favicon/assets into `assets/` if desired.
4. Keep application-specific pages outside the public navigation.

The design uses the LFTN page as the visual reference: dark sections, lime accent, large typography, metric blocks, timeline experience and project cards.

## v2 changes
- Added Competencies, Achievements, Skills and Additional Experience to the top navigation.
- Separated Education and Skills sections.
- Added university logo-style badges for Hochschule Fresenius and IUST.
- Separated languages from professional/technical skills.
- Added a dedicated skills icon.

## v3 changes
- Added a full life & career timeline from 1993 to the present.
- Added timeline navigation.
- Timeline includes childhood, education, public-speaking achievements, volunteering, career milestones, leadership and the move to Germany.
- Timeline is responsive for desktop and mobile.

## v4 changes
- Removed all CEO references from the public website, including the experience section and timeline.

## v5 changes
- Added 1998 primary school milestone to the life timeline.
- Added small milestone icons to timeline nodes.
- Added a visual milestone ribbon above the timeline.
- Kept the existing no-CEO requirement.

## v6 changes
- Added the professional portrait extracted from the uploaded CV.
- Updated experience framing to 10+ years.
- Replaced the abbreviated experience section with all professional roles from the CV.
- Rebuilt the projects section around all 8 projects supplied by the user.
- Updated the timeline career milestones to match the CV dates.
- Alternated timeline events left/right on desktop for stronger visual rhythm.
- Preserved the no-CEO requirement.
- CV source: uploaded Ali Soleimani resume; the CV is the authority where information differed.

## v7 changes
- Restored the original timeline layout: years on the left, timeline line in the center, and all event information on the right.
- Removed the alternating left/right timeline layout.

## v8 changes
- Refined hero presentation, removed phone number, updated timeline, replaced Azerbaijani with Turkish, and added subtle metric count-up animation.

## v9 changes
- Removed the unwanted 10+ Years of Experience badge from the hero.
- Rebuilt the hero to match the supplied reference layout more closely: portrait/name/role/location card on the left and large professional headline/content on the right.

## v10 changes
- Renamed the Additional Experience navigation/section terminology to Voluntary Experience.

## v11 changes
- Replaced project placeholders with the user's existing project photos from `assets/p/`.
- Project image mapping:
  - Iron Plant — DRI.jpg
  - C2+ Recovery & Fractionation — C2.jpg
  - Copper Plant Technical Support — TechnicalSup.jpg
  - Petrochemical Loading Station — Petro.jpg
  - Copper Smelter Expansion — copper.jpg
  - Oil Desalting & Production Unit — Oilunit.jpg
  - Loading/Unloading Arms — loadingarm.jpg
  - National Solar Industry — PV.jpg
- HTML references are relative (`assets/p/...`), so the existing folder in the GitHub repository can be kept exactly where it is.

## v12 changes
- Added real university/company logo references from `assets/logo/`.
- Hochschule Fresenius education updated to M.A. International Management — Project Management, current GPA 1.2.
- IUST logo is used for both academic degrees and the IUST Research Assistant role.
- PSL logo is used for PSL professional roles; EIED logo is used for the internship.
- Languages updated to: Persian Native, English C1, German A2, Turkish B1, Tati Native.
