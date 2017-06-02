module.exports = [
  {
    name: 'Cute Poms',
    images: [
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
      }]
  },
  {
    name: 'Adorable Poms',
    images: [
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
      }]
  },
  {
    name: 'Silly Poms',
    images: [
      {
        name: 'Cpt. Fuzzles',
        description: 'A soldiering pom.',
        url: 'http://img.huffingtonpost.com/asset/,scalefit_950_800_noupscale/56328113190000a600b9540d.jpeg'
      },
      {
        name: 'King Puff',
        description: 'The king of all poms.',
        url: 'https://s-media-cache-ak0.pinimg.com/736x/5b/38/51/5b3851bec9004a213d5a3e6f70d2287d.jpg'
      },
      {
        name: 'Lord Popo',
        description: 'A dapper pom.',
        url: 'https://s-media-cache-ak0.pinimg.com/originals/3b/c2/02/3bc20271e9e7bc67f18c8fc7a519644e.jpg'
      }]
  }
];

// TO ENTER IN DATA TO YOUR OWN DB: type the following into the noce REPL:
// node
// const albums = require('./lib/data')
// require('fs').writeFileSync('data.json', JSON.stringify(albums))
// mongoimport --db gallery --collection albums --file data.json --jsonArray