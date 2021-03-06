const images = [
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
    name: 'Sammy',
    description: 'An excellent pom.',
    url: 'https://assets.vetary.com/media/seo_content/dog/pomeranian-med.jpg'
  },
  {
    name: 'Jazzy',
    description: 'A happy pom.',
    url: 'http://pommymommy.com/wp-content/uploads/2012/10/Pommy-on-the-Go.jpg'
  },
  {
    name: 'Python',
    description: 'A brave and bold pom.',
    url: 'https://www.petinsurance.com/en/healthzone/pet-articles/pet-breeds/~/media/805AD347B9BC4890BCE95E3394D6CA2B.ashx?as=1&h=180&w=240'
  },
  {
    name: 'Tribbles',
    description: 'The best pom.',
    url: 'https://s-media-cache-ak0.pinimg.com/736x/3d/bb/c6/3dbbc606780c996dcd30bd94635c5983.jpg'
  },

];

export default {
  get() { return Promise.resolve(images); }
};