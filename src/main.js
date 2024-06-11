/*The order in which css files are imported, determines their priority. 
Thus, the file imported 1st will have least priority while the file imported last will have the most priority.*/
import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/about.css';
import '../styles/components/featured.css';
import '../styles/components/work.css';
import '../styles/components/contact.css';
import '../styles/components/footer.css';
import '../styles/components/mobile.css';


import '../styles/utils.css'    ;
/*Utility classes NEED to have the highest priority, because without that, the utilities won't work. 
Hence, the utils style sheet is import at the absolute end of the css imports in main.js page.*/

import navbars from './utils/mobile-nav';
navbars();

import darkMode from './utils/dark-mode';
darkMode();