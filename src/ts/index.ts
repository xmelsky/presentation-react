import Reveal from 'reveal.js';
import 'sass/main.scss';

document.body.innerHTML = `
<div class="reveal">
  <div class="slides">
      <!--inject:slides-->
      <!--inject:order=2,3,0,1,4-->
  </div>
</div>`;

Reveal.initialize({
  controls: true,
  progress: false,
  touch: true,
  dependencies: [
    { src: 'plugin/highlight/highlight.js', async: true },
    { src: 'plugin/notes/notes.js', async: true },
  ],
});
