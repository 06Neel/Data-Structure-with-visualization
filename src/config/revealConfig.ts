import RevealHighlight from 'reveal.js/plugin/highlight';
import RevealNotes from 'reveal.js/plugin/notes';
import RevealSearch from 'reveal.js/plugin/search';
import RevealZoom from 'reveal.js/plugin/zoom';

export const revealConfig = {
  width: 1280,
  height: 720,
  margin: 0.04,
  minScale: 0.2,
  maxScale: 2.0,

  controls: true,
  controlsTutorial: true,
  controlsLayout: 'bottom-right' as const,
  progress: true,
  slideNumber: 'c/t' as const,
  hash: true,
  history: true,

  keyboard: true,
  overview: true,
  touch: true,
  loop: false,
  fragments: true,

  transition: 'convex' as const,
  transitionSpeed: 'default' as const,
  backgroundTransition: 'concave' as const,

  autoAnimate: true,
  autoAnimateEasing: 'ease-out',
  autoAnimateDuration: 0.8,
  autoAnimateUnmatched: true,

  viewDistance: 3,
  mobileViewDistance: 2,
};

export const revealPlugins = [
  RevealHighlight,
  RevealNotes,
  RevealSearch,
  RevealZoom,
];
