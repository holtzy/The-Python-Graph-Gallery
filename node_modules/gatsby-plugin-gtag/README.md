# gatsby-plugin-gtag
### Add Google Analytics gtag.js to a site

Does the same thing as
[gatsby-plugin-google-analytics](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-analytics),
but instead of adding [deprecated analytics.js](https://developers.google.com/analytics/devguides/collection/gtagjs/migration)
script, it uses
[gtag.js](https://developers.google.com/analytics/devguides/collection/gtagjs/). Includes Outbound Link module.

## Install

```bash
npm install --save gatsby-plugin-gtag
```

## Use

```js

// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-XXXXXXXX-X`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
  ],
}

```
## Outbound Links
`import { OutboundLink } from 'gatsby-plugin-gtag'`

Use like any other anchor tag in your component:
`<OutboundLink href='yourwebsite.example'>Check out this site!</OutboundLink>`

## Options

#### head

Puts tracking script in the head instead of the body. Default is false (render in the body)

#### anonymize

Adds `anonymize_ip` flag when calling `gtag`. More info
[here](https://developers.google.com/analytics/devguides/collection/gtagjs/ip-anonymization).

## Testing in development mode

By default `gatsby-plugin-gtag` will only load and run google analytics when `process.env.NODE_ENV === 'production'`.
To enable gtag in development mode set the environment variable `GATSBY_GTAG_DEBUG=true gatsby develop`.

## License

MIT
