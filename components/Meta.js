import Head from 'next/head'
import PropTypes from 'prop-types'
import theme from '../src/theme';
import { GA_TRACKING_ID } from '../lib/gtag'

const Meta = (props) => (      
  <Head>
    <title>{props.title}</title>
    <meta name="description" content={props.desc}/>
    
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={props.title} />
    <meta name="og:description" property="og:description" content={props.desc} />
    <meta property="og:site_name" content="Can't Stop Us" />
    <meta property="og:url" content={props.url} />  
    {props.image && <meta property="og:image" content={`${props.image}`} /> } 

    <meta name="twitter:card" content="summary" /> 
    <meta name="twitter:title" content={props.title} />
    <meta name="twitter:description" content={props.desc} />
    <meta name="twitter:site" content="@cantstopcbus" />
    <meta name="twitter:creator" content="@cantstopcbus" />
    {props.image && <meta name="twitter:image" content={`${props.image}`} /> }

    <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
    <link rel="apple-touch-icon" href="/images/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    {/* PWA primary color */}
    <meta name="theme-color" content={theme.palette.primary.main} />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />

    {/* Global Site Tag (gtag.js) - Google Analytics */}
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}', {
        page_path: window.location.pathname,
      });
    `,
      }}
    />
  </Head>
)

Meta.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string
}

Meta.defaultProps = {
  title: "Can't Stop Us",
  desc: "Can't Stop Us is a grassroots, community-focused nationwide movement in response to the COVID-19 crisis.",
  url: "https://cantstop-us.com"
}

export default Meta