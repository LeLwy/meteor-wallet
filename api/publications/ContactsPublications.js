import { Meteor } from "meteor/meteor";
import { ContactsCollection } from "../collections/ContactsCollection";

Meteor.publish("allContacts", () => ContactsCollection.find());

Meteor.publish("contacts", () => {
  const contacts = ContactsCollection.find(
    { archived: { $ne: true } },
    {
      fields: {
        createdAt: false,
      },
    }
  );
  return contacts;
});