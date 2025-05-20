# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed

- Added missing `FeatureAccess` enum to Prisma schema to fix error during sign-out process
- Added missing fields (`bulkUnsubscribeAccess`, `coldEmailBlockerAccess`, `aiAutomationAccess`) to the Premium model in Prisma schema
