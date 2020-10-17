# Developing on ChiefOnboarding

If you want to contribute or just play around with the source code, clone this repo on your computer and then run this to get it running with Docker:

```
docker-compose up
```

Please note that it could take a few seconds before Nuxt has set up the environment server. Wait for atleast a few minutes after running that command. The initial set up will take some time. After that, you should be able to go to `http://0.0.0.0:3000`. This will show the login page.

Then start Django shell:

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


## Import fixtures
This is entirely optional, but if you want, you can import some examples with fixtures. Just run this:

```
docker-compose run web python3 manage.py loaddata content.json to_do.json preboarding.json external_messages.json sequence.json badge.json admin_task.json admin_task_comment.json category.json condition.json tag.json
```