import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';
import { Accounts } from "meteor/accounts-base";
import { WalletsCollection } from '../api/collections/WalletsCollection';

Accounts.emailTemplates.resetPassword.html = (user, url) => `Hello, <br/><br/>Reset your password with this link: ${url}`

const getEmailFromUser = user => {

    if(user.services?.google){
        return user.services.google.email;
    }
   return user.mail[0].address
}

Accounts.onCreateUser((options, user) => {

    const customizedUser = { ...user};

    WalletsCollection.insert({ userId: user._id, createdAt: new Date() })

    customizedUser.email = getEmailFromUser(user);

    return customizedUser;
});

Accounts.setDefaultPublishFields({
    ...Accounts._defaultPublishFields.projection,
    email: 1,
});

const settings = Meteor.settings || {};

Meteor.startup(() => {

    if(!settings.googleClientId || !settings.googleSecret) {
        throw new Error('googleClientId and googleSecret are required.');
    };

    ServiceConfiguration.configurations.upsert(
        {
            service: 'google',
        },
        {
            $set: {
                
                service: 'google',
                clientId: settings.googleClientId,
                secret: settings.googleSecret,
                
            },
        }
    );
});