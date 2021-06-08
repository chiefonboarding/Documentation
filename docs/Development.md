# Developing on ChiefOnboarding

If you want to contribute or just play around with the source code, the first step would be to download the source code. Up next, you will have to set up the configutation file. There is an example file in `back/back`. Change the name of that file (`.env.example`) to `.env`. Then run this to get it up and running:

```
docker-compose up
```

Please note that it could take a few seconds before Nuxt has set up the environment server. Wait for atleast a few minutes after running that command. The initial setup will take some time. If you get an error, please delete the `front/node_modules/` folder and then try again. 


Once that's done, run this command to make migrations to the database:

```
docker-compose run web python3 manage.py migrate
```

After that, you should be able to go to `http://0.0.0.0:3000`, which will show you a login screen.

The login credentials are:

```
Email: admin@example.com
Password: admin
```
