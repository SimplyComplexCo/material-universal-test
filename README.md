# Material2 - Angular Universal Minimal Test

This is a minimal test for [Angular2 Material](https://github.com/angular/material2) with [Angular Universal](https://github.com/angular/universal). Demonstrates issues with basic components (only covers overlay) when using native element calls such as the class HTMLElement usage.

## Installation
1. Clone this repo.
2. With node.js v5.0.0+: `npm install`

## Usage
```
npm start
```
## License
MIT

## Notes
*If you take out the overlay provider from viewProviders in `app/app.ts` and comment out the import for the same the app will run on http://localhost:6565*
