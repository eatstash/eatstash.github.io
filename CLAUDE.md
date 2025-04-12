# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure
- Static HTML/CSS/JS website for EatStash landing page
- No build system or package manager (no package.json)
- Manual deployment via GitHub Pages

## Commands
- No formal build/lint/test commands - static site
- To preview locally: open index.html in browser
- Validate HTML: use W3C validator service
- Validate CSS: use W3C CSS validator

## Code Style Guidelines
- HTML: 2-space indentation, semantic tags, valid HTML5
- CSS: Organized by sections with comments, BEM-like class naming
- JavaScript: 2-space indentation, ES6 syntax, event-based architecture
- Images stored in /assets, icons in /icons
- Mobile-first responsive design
- Font families: EB Garamond and Gothic A1 from Google Fonts
- Color variables defined in styleguide.css

## Naming Conventions
- CSS classes: descriptive, component-based (e.g., .hero, .testimonial)
- JS variables: camelCase, descriptive names
- File names: lowercase with hyphens for multi-word names