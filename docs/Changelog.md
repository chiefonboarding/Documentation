# Changelog

## v1.1.0
Release date: 2021-04-13
### Docker image
There is now an official Docker image available. Details on how to use it can be found under 'Deployment'.

### Heroku deployment
You can now deploy ChiefOnboarding easily with Heroku. Details on how to do this can be found under 'Deployment'.

## v1.0.0
Release date: 2021-04-02
### Automatically add new hires when they join Slack
This is disabled by default, but if you want, you can automatically add new hires to ChiefOnboarding when they join Slack. There is an option to manually approve new hires before they get onboarded by the Slack bot. When you do that, you can also pick the sequences that you want to assign to this new hire.

![Slack approval message](/slack-approval-settings.png)

![Slack approval settings](/slack-notification-approval.png)


### Subject to email message
All custom email messages (email messages sent through the sequences) are now able to have their own email subject. Previously this was always 'Here is a quick update'. Now you can change that to whatever you want.

### Default sequences
In the settings you can now set default sequences. These will be filled in already when you create a new hire (you can still change them though). When you create a new hire without manual approval, these items will be assigned automatically.
