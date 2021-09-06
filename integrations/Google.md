# Google

## Google login
This will allow you to use the 'Log in with Google' button on the log in page.

1. Go to [https://console.developers.google.com/apis/consent](https://console.developers.google.com/apis/consent) and make sure you are logged in as the admin of the Google organization.
2. Create a new 'Project' and give it a fancy name. Once it's created make sure you are in that project (you can see that in the top bar).
3. You will be asked for what type of app you want to register. Choose 'Intern', only people from your organization should log in to your app. Click on 'Create'.
4. Fill in the details accordingly. You don't have to change the scopes, those are fine. Under 'Authorized domains', fill in your own site url and the url of the ChiefOnboarding instance.
5. Click on 'Create'. You will be taken back to the page you previously landed on.

We just set up our authentication screen for people that want to sign in. Up next, we need to create credentials that we can put into the ChiefOnboarding instance, so we can actually show that authentication dialog.

6. Go to [https://console.developers.google.com/apis/credentials](https://console.developers.google.com/apis/credentials)
7. Click on 'Create credentials' at the top of the page and choose Client-ID OAuth.
8. You will be asked for the type of app. Pick 'Web application'.
9. Under "Authorized JavaScript-sources" enter the domain name of where ChiefOnboarding is running on.
10. Under "Authorized redirect-URLs" enter this: `https://YOURDOMAIN/api/auth/google_login`.
11. Click on 'Create' and you will get the `Client-ID` and `Client-secret` that you need to fill in on your ChiefOnboarding instance.
12. Submit the form on ChiefOnboarding and enable the Google login integration in settings->global and you should be good to go.

You will only be able to let people log in that already have an account in ChiefOnboarding.


## Creating Google Accounts
This is for automatically provisioning Google accounts for new hires. Unfortunately, Google needs an OAuth key instead of a simple API key for this, so we need to setup the consent form as well.

Note: If you have already created a project, because of the previous section, then you can skip step 1 to 5. Please make sure you add the extra scopes from step 4!

1. Go to [https://console.developers.google.com/apis/consent](https://console.developers.google.com/apis/consent) and make sure you are logged in as the admin of the Google organization.
2. Create a new 'Project' and give it a fancy name. Once it's created make sure you are in that project (you can see that in the top bar).
3. You will be asked for what type of app you want to register. Choose 'Intern', only people from your organization should log in to your app. Click on 'Create'.
4. Fill in the details accordingly. You will have to add the following scopes: `https://www.googleapis.com/auth/admin.directory.user`. Under 'Authorized domains', fill in your own site url and the url of the ChiefOnboarding instance.
5. Click on 'Create'. You will be taken back to the page you previously landed on.

We just set up our authentication screen for you to sign in to. Up next, we need to create credentials that we can put into the ChiefOnboarding instance, so we can actually show that authentication dialog.

6. Go to [https://console.developers.google.com/apis/credentials](https://console.developers.google.com/apis/credentials)
7. Click on 'Create credentials' at the top of the page and choose Client-ID OAuth.
8. You will be asked for the type of app. Pick 'Web application'.
9. Under "Authorized JavaScript-sources" enter the domain name of where ChiefOnboarding is running on.
10. Under "Authorized redirect-URLs" enter this: `https://YOURDOMAIN/api/integrations/google_token`.
11. Click on 'Create' and you will get the `Client-ID` and `Client-secret` that you need to fill in on your ChiefOnboarding instance.
12. Submit the form on ChiefOnboarding and enable the Google login integration in settings->global. You will see a new link that you will have to click.
13. Once you clicked that link, you will have to verify that you want to give the application rights to add new Google accounts to your organization.
14. You will then have to enable the Admin SDK for your project here: [https://console.developers.google.com/apis/library/admin.googleapis.com](https://console.developers.google.com/apis/library/admin.googleapis.com), click on 'Enable'.

