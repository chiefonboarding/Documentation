# Changelog

## v1.2.7
* Adding default username/password to dev docker-compose file
* Adding migrate cache table to dev docker-compose file
* Adding `node_modules` to gitignore
* Updates for Django Q. Stop having it redo every failing task indefinitely.

## v1.2.6
* Show error message when trying to send Slack test message without Slack account attached
* Fix showing preboarding preview part in a sequence
* Fix Slack syncing issue
* Update Django dep to newest version
* Update Docker version number (routine task)
* Fix showing old data in sequences (when adding a new one)

## v1.2.5
Fix docker copy command

## v1.2.4
Simplify docker setup (remove folders that are not necessary in container)

## v1.2.3
* Putting new hire start date further in the future (fixtures)
* Fix for blocking collectstatic on restart of container
* Enforcing email address of admin account to be lowercase. The email address would always be registered as lowercase and could therefore output incorrect info (on first run - creating admin account).
* Updated Docker version

## v1.2.2
- Another docker build fix

## v1.2.1
- A docker build fix 

## v1.2.0
Release date: 2021-06-08
### TOTP 2FA support
You can now use andOTP, Aegis authenticator, Google authenticator, Authy or any other OTP app that you use to set up 2FA (with QR code). 

### New editor and video support
TipTap (the editor that is being used) got updated. We now also support native video upload to S3. It will show up as a video in the portal and as a normal link in Slack.

### SMTP support
You can now also use SMTP for sending emails. SMTP should be your last resort, if all other providers fail.

### Refactor Docker setup
Redis has been removed and Celery has been migrated to Django Q. It now runs in the same container (with supervisor). So, now you only need two containers (Web + db) and perhaps Caddy as a reverse proxy.

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
