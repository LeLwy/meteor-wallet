import React from "react";
import { Meteor } from "meteor/meteor";
import { createRoot } from "react-dom/client";
import { App } from "../ui/App.jsx";
import "../api/collections/ContactsCollection";
import "../api/collections/TransactionsCollection";

Meteor.startup(() => {
  const root = createRoot(document.getElementById("react-target"));
  root.render(<App />);
});