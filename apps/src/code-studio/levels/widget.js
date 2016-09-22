/**
 * @file JavaScript loaded in all Widget-type levels.
 */
/* global apps, appOptions, dashboard */
import $ from 'jquery';
import { registerGetResult } from './codeStudioLevels';
import _ from 'lodash';

function setupWidgetLevel() {
  window.script_path = location.pathname;
  apps.setupApp(appOptions);
  appOptions.showInstructionsWrapper(dashboard.dialog.showInstructionsDialog);
  registerGetResult(() => ({
    response: 'ok',
    result: true
  }));
  window.options = appOptions.level;
}

// Add globals
window.CodeMirror = require('codemirror');
window.dashboard = window.dashboard || {};
_.extend(window.dashboard, {
  setupWidgetLevel: setupWidgetLevel
});

// On load (note - widget-specific setup may happen before this!)
$(document).ready(function () {
  $('#bubble').click(dashboard.dialog.showInstructionsDialog);
});
