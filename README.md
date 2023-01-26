# Radio or Keysmash?

A simple website that chooses either a random string of characters or a mobile networking radio and has you guess which one it is.

This was made to demonstrate how ridiculous some vendors' naming schemes are.

> 🌐 View it online at [isthisaradio.com](https://isthisaradio.com)

## Development

Radio data is stored in `src/data` as a JSON file per-vendor. The JSON file should contain an object where radio full names are keys and their
model numbers are values.

Keysmash generators should be built to look "realistic" for each vendor. For example, most "random" keysmashes start with an `A` for Nokia, with
a limited number starting with `F` to appropriate proportions with the real-world AirScale radio list.

To facilitate this, there is a helper function called `randomChoice` which allows you to supply and array of choices, with an optional second
parameter to supply an array of weights to influcence the randomness.

For more info, check out the [Nokia generator file](./src/functions/generators/generateNokiaRadio.ts).

### Adding more vendors

To add a new vendor, you should:

- create a JSON object of all real radios and their models in `src/data`
- create a new generator for the vendor in `src/functions/generators`
- add the vendor to the `radioSets` dictionary and interface definition in `src/functions/chooseRandomRadio.ts`
- add the vendor's generator to the `generators` dictionary in `src/functions/generateRandomRadio.ts`

...and that should be it!

## Running locally

You can run this site locally in either a development or production mode.

### Development mode

In development mode, first install all required dependencies with `yarn`, then run `yarn develop` to spawn Gatsby's development server. This
offers hot-reload capability meaning any changes to the code will automatically be applied in the browser in real-time.

### Production

To run this website in production, you should use Docker. Simply run `docker compose up -d --build`, and the site will be built and go live on
`localhost:8084`.

If you make any changes, you will need to re-run this command. Ensure you use the `--build` option, else any code changes will not be applied.

Building and spinning up the container takes approximately 60 seconds on a modern high-performance system. On my Hetzner VPS, this is slightly
longer at approximately 150 seconds.
