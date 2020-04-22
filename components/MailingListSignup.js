import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link'
import { Button } from '@material-ui/core';

const MailingListSignup = () => (
  <>
    <Link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css" />
    <div id="mc_embed_signup">
      <form action="https://cantstop-us.us4.list-manage.com/subscribe/post?u=1464384b1942af98fa70f234c&amp;id=d00c95d825" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
          <label for="mce-EMAIL">Stay updated on our progress</label>
          <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required />
          <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
            <input type="text" name="b_1464384b1942af98fa70f234c_d00c95d825" tabindex="-1" value="" />
          </div>
          <div class="clear">
            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" />
          </div>
        </div>
      </form>
    </div>
  </>
);

export default MailingListSignup;
