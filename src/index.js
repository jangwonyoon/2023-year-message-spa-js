import './css/index.css';
import view from './view';

const state = {
  post: 'test',
};

const container = document.querySelector('main');

window.requestAnimationFrame(() => {
  const newMain = view(container, state);
  container.replaceWith(newMain);
});
