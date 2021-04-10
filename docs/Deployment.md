# Deploy ChiefOnboarding through Docker

You can easily deploy ChiefOnboarding through Docker (Docker-compose). Make sure that both Docker and Docker-compose are installed and your server. Please note that some of the data below contain example values and should be replaced.

1. Point your domain name to your IP address.
2. Create a folder somewhere and then add this `docker-compose.yml` file:

```
version: '3'

services:
  db:
    restart: always
    image: postgres:latest
    expose:
      - "5432"
    volumes:
      - pgdata:/var/lib/postgresql/data/
    environment:
      - POSTGRES_DB=chiefonboarding
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
    networks:
      - global

  web:
    image: chiefonboarding/chiefonboarding:latest
    restart: always
    container_name: web
    expose:
      - "8000"
    command: bash -c "cd back && python manage.py collectstatic --no-input && python manage.py migrate && gunicorn back.wsgi -b 0.0.0.0:8000"
    env_file:
      - .env
    depends_on:
      - db
    networks:
      - global

  caddy:
    image: caddy:2.3.0-alpine
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - $PWD/Caddyfile:/etc/caddy/Caddyfile
      - $PWD/site:/srv
      - caddy_data:/data
      - caddy_config:/config
    networks:
      - global

  redis:
    restart: unless-stopped 
    image: redis:latest
    expose:
      - "6379"
    networks:
      - global

  celery:
    command: celery --workdir=back -A back worker --beat -l info 
    image: chiefonboarding/chiefonboarding:latest
    restart: unless-stopped
    env_file:
      - .env
    depends_on:
      - web
      - redis
    networks:
      - global

volumes:
  pgdata:
  caddy_data:
  caddy_config:

networks:
  global:

```
3. And then create a `.env` file in the same folder with values similar to these:
```
SECRET_KEY=somethingsupersecret
BASE_URL=https://test.chiefonboarding.com
DATABASE_URL=postgres://postgres:postgres@db:5432/chiefonboarding
REDIS_URL=redis://redis:6379
ALLOWED_HOST=test.chiefonboarding.com
DEFAULT_FROM_EMAIL=hello@chiefonboarding.com
```
4. Then we need to create a `Caddyfile` to route the requests to the server (change the domain name, obviously):
```
test.chiefonboarding.com {
  reverse_proxy web:8000
}
```
5. You can now run docker compose: `docker-compose up`. When you go to your domain name, you should have a blank page with a loading icon in the middle. That's correct, we need to do a few more things before everything is working.

6. Run Django shell:

```
docker-compose run web python3 manage.py shell
```

7. Then run this (please replace the items that are marked with < and >):

```
from organization.models import Organization
from users.models import User
Organization.objects.create(name="<organization name>")
User.objects.create_admin("<first name>", "<last name>", "<email>", "<password>")
# example: User.objects.create_admin("Stan", "Doe", "hello@chiefonboarding.com", "Somethingsupersecret")
```

8. At last, we need to add a bit of default data into the database:
```
docker-compose run web python3 manage.py loaddata welcome_message.json
```
9. That's it! Happy onboarding!


## Import fixtures
This is entirely optional, but if you want, you can import some examples with fixtures. Just run this:

```
docker-compose run web python3 manage.py loaddata all.json 
```
