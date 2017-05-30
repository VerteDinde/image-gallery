import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

import Wrapper from '../components/Wrapper';
import List from '../components/List';
import Thumbnail from '../components/Thumbnail';
import Gallery from '../components/Gallery';
import App from '../App';

const poms = [
  {
    name: 'Daisy',
    description: 'A good pom.',
    url: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/pomeranian-puppies/pomeranian-puppy-1.jpg'
  },
  {
    name: 'Ginger',
    description: 'A very good pom.',
    url: 'https://vetstreet.brightspotcdn.com/dims4/default/edb51df/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F19%2F716f20a7f711e0a0d50050568d634f%2Ffile%2FPomeranian-2-645mk062811.jpg'
  },
  {
    name: 'Tribbles',
    description: 'The best pom.',
    url: 'https://s-media-cache-ak0.pinimg.com/736x/3d/bb/c6/3dbbc606780c996dcd30bd94635c5983.jpg'
  },
];
const views = [List, Gallery, Thumbnail];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


describe('Wrapper', () => {
  it('Render wrapper', () => {
    const component = renderer.create(<Wrapper
      views={views}
      poms={poms}
    />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

});