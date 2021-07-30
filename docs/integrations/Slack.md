# Slack

Slack is integrated in two ways:

1. A Slack bot that will be talking to colleagues and new hires. (see [Slack bot](#slack-bot))
2. An app that will invite new people to the team on your behalve. (see [Creating accounts for Slack](#creating-accounts-for-slack))

## Slack bot
This is the bot that will ping your new hires and colleagues with things they have to do. This is needed if you want to use ChiefOnboarding in Slack.
Since there is no centralized app, you will have to create an app in Slack yourself. The benefit of this is that you can use your own profile picture and name for the bot. 
There are two ways of create the Slack bot. Either do it automatically with the manifest (recommended). We built the manifest with everything that you need to get up and running quickly. 

Use the manifest (recommended):

1. Go to [https://api.slack.com/apps](https://api.slack.com/apps) and click on 'Create New App' (big green button, can't be missed). Click on "From an app manifext".
2. Select the workspace where you want to install ChiefOnboarding.
3. Copy and paste the manifest below in the little text box that you get to see (change `XXXXXXXXXXXXXXX` with your domain name. Example: `demo.chiefonboarding.com`):

```
_metadata:
  major_version: 1
  minor_version: 1
display_information:
  name: Onboardingbot
features:
  bot_user:
    display_name: Onboardingbot
    always_online: true
oauth_config:
  redirect_urls:
    - https://XXXXXXXXXXXXXXX/api/integrations/slack
  scopes:
    bot:
      - im:history
      - im:read
      - users:read
      - users:read.email
      - im:write
      - chat:write
settings:
  event_subscriptions:
    request_url: https://XXXXXXXXXXXXXXX/api/slack/bot
    bot_events:
      - message.im
      - team_join
  interactivity:
    is_enabled: true
    request_url: https://XXXXXXXXXXXXXXX/api/slack/callback
  org_deploy_enabled: false
  socket_mode_enabled: false
  token_rotation_enabled: false
```

4. Review the permissions and then click on 'Create'.
5. Scroll a bit on the new page and notice the `App credentials` part. You need the information there to fill in on the settings/integrations page in your ChiefOnboarding instance.
6. Fill in the details accordingly. The only thing you can't fill in is the 'Redirect URL'. This URL depends on your instances domain name. You will need to fill this in there: `https://YOURDOMAIN/api/integrations/slack`.
8. Submit the form. You will get back a Slack button. Click it and verify that you want to install your bot in your Slack team. (Try to say 'hello' to it)


If you used the manifest, then you can skip the manual part!

Manually:

1. Go to [https://api.slack.com/apps](https://api.slack.com/apps) and click on 'Create New App' (big green button, can't be missed). Give it a fancy name and pick the Slack team you are in. Click on 'Submit'.
2. To make the bot work, we need to enabled a few things in the newly created Slack bot.
3. Go to "Interactivity & Shortcuts" and enable interactivity. Then add this `https://YOURDOMAIN/api/slack/callback`.
4. Go to "OAuth & Permissions". Enter `https://YOURDOMAIN/api/integrations/slack` as the 'Redirect URL'. And under "Bot scopes" enable: `chat:write`, `im:read`, `im:write`, `users:read`, `users:read.email`.
5. Go to "Event Subscription" and enable it. Use `https://YOURDOMAIN/api/slack/bot` as the request url. Under 'Subscribe to bot events' add `message.im` and `team_join`.
6. Go back to "Basic Info" and scroll a bit on the new page and notice the `App credentials` part. You need the information there to fill in on the settings/integrations page in your ChiefOnboarding instance.
7. Fill in the details accordingly. The only thing you can't fill in is the 'Redirect URL'. This URL depends on your instances domain name. You will need to fill this in there: `https://YOURDOMAIN/api/integrations/slack`.
8. Submit the form. You will get back a Slack button. Click it and verify that you want to install your bot in your Slack team. (Try to say 'hello' to it)

That's it!

## Creating accounts for Slack
This will allow you to automatically create accounts for Slack for your new hire. We cannot use the same Slack app as the previous one as this one uses a permission that is not compatible with the other one.
We need to set up OAuth for this and then you will have to add this one to your Slack team as well, but it won't actually do anything in your Slack team, except for adding and removing team members. Annoying, I know.

Note: you can install this one standalone, BUT you will not be able to add Slack accounts afterwards. This is because we cannot add the correct scope to this app to check if a user is already in your team.
The scope needed for this app is for creating accounts is a legacy/undocumented scope and does not work along with the supported/documented scopes.

1. Go to [https://api.slack.com/apps](https://api.slack.com/apps) and click on 'Create New App' (big green button, can't be missed). Give it a fancy-pancy name and pick the Slack team you are in. Click on 'Submit'.
2. Go to 'OAuth & Permissions' and add this url as the redirect url: `http://YOURDOMAIN/api/integrations/slack/oauth`. 
2. Go back to the previous page and notice the `App credentials` part. You need the information there to fill in on the settings/integrations page in your ChiefOnboarding instance.
3. Fill in the details accordingly. The only thing you can't fill in is the 'Redirect URL'. You will need to fill this in there: `https://YOURDOMAIN/api/integrations/slack/oauth`.
4. Hit 'Submit' and click on the Slack button to add this app to your team.

You should be able to create new accounts now!
