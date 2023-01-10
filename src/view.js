export default (targeElement, state) => {
  const { post } = state;
  const element = targeElement.cloneNode(true);

  const list = element.querySelector('.post-list');

  console.log(post);

  list.innerHTML = 'test';

  return element;
};
