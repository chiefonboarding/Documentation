# Developing on ChiefOnboarding

If you want to contribute or just play around with the source code, the first step would be to download the source code. Up next, you will have to set up the configutation file. There is an example file in `back/back`. Change the name of that file (`.env.example`) to `.env`. Then run this to get it up and running:

```
docker-compose up
```

Please note that it could take a few seconds before Nuxt has set up the environment server. Wait for atleast a few minutes after running that command. The initial setup will take some time. 


Once that's done, run this command to make migrations to the database:

```
docker-compose run web python3 manage.py migrate
```

After that, you should be able to go to `http://0.0.0.0:3000`. This will show a loading icon on the page. We still need to add some general data.

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
docker-compose run web python3 manage.py loaddata all.json 
```
