# Deploy ChiefOnboarding through Docker

You can easily deploy ChiefOnboarding through Docker (Docker-compose). Make sure that both Docker and Docker-compose are installed.

Point your domain name to your IP address and then run this on your server:

```
git clone https://github.com/chiefonboarding/chiefonboarding
cd ChiefOnboarding
chmod +x server_script.sh ssl_renew.sh
# Replace YOURDOMAIN with your domain. example: onboarding.yourcompany.com and EMAIL with your email address. 
sudo ./server_script.sh YOURDOMAIN EMAIL
```

Please note that it could take up to 10 minutes before it is ready. Once it's ready, start Django shell:

```
docker-compose run web python3 manage.py shell
```

Then run this (please replace the items that are marked with < and >):

```
from organization.models import Organization
from users.models import User
Organization.objects.create(name="<organization name>")
User.objects.create_admin("<first name>", "<last name>", "<email>", "<password>")
```

At last, we need to add a bit of default data into the database:
```
docker-compose run web python3 manage.py loaddata welcome_message.json
```
That's it to get the base running! The SSL certificate needs to be renewed every so often, it's generally a good idea to set up a cron job for `ssl_renew.sh` to automate that.

## Import fixtures
This is entirely optional, but if you want, you can import some examples with fixtures. Just run this:

```
docker-compose run web python3 manage.py loaddata content.json to_do.json preboarding.json external_messages.json sequence.json badge.json admin_task.json admin_task_comment.json category.json condition.json tag.json
```