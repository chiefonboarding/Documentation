# Email

ChiefOnboarding is using the [django-anymail](https://github.com/anymail/django-anymail) package to support a wide [variety of email providers](https://anymail.readthedocs.io/en/stable/esps/).

If you want to enable emails (this is highly recommended), then you will first have to enable Anymail and set the from email:

Example variables:
```
ANYMAIL=True
DEFAULT_FROM_EMAIL=Your company onboarding <onboarding@whatever.com>
```

Up next, you will have to pick your favorite email provider, enable it and add your API key:

* Postmark:
```
POSTMARK=True
POSTMARK_KEY=XXXXXXXXXXX
```
* Mailgun
```
MAILGUN=True
MAILGUN_KEY=XXXXXXXXXXX
MAILGUN_DOMAIN=XXXXXXXXXXX
```
* Mailjet:
```
MAILJET=True
MAILJET_API_KEY=XXXXXXXXXXX
MAILJET_SECRET_KEY=XXXXXXXXXXX
```
* Mandrill:
```
MAILJET=True
MANDRILL_API_KEY=XXXXXXXXXXX
```
* SendGrid:
```
SENDGRID=True
SENDGRID_KEY=XXXXXXXXXXX
```
* Sendinblue:
```
SENDINBLUE=True
SENDINBLUE_KEY=XXXXXXXXXXX
```
* Sparkpost:
```
SPARKPOST=True
SPARKPOST_KEY=XXXXXXXXXXX
```

* SMTP:
```
SMTP = True
EMAIL_HOST=smtp.chiefonboarding.com
EMAIL_PORT=25
EMAIL_HOST_USER=exampleuser
EMAIL_HOST_PASSWORD=examplePass
EMAIL_USE_TLS=True
EMAIL_USE_SSL=True
```
