import { Meteor } from 'meteor/meteor';
import React from 'react';
import { renderRoutes } from '../imports/startup/client/routes';
import { render } from 'react-dom';
import App from '../imports/ui/layouts/App';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'));
});
