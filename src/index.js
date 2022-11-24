import './styles/style.css';
import { ui } from './modules/ui';
import loadMainConent from './modules/loadContent';

document.addEventListener('DOMContentLoaded', () => {
  ui();
  loadMainConent();
});
