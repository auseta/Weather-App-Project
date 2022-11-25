import './styles/style.css';
import { ui } from './modules/ui';
import loadMainConent from './modules/loadContent';
import { findLocation } from './modules/actions';

document.addEventListener('DOMContentLoaded', () => {
  ui();
  loadMainConent();
  findLocation();
});
