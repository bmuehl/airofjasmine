import { publish } from 'gh-pages';

publish(
  'build',
  {
    branch: 'gh-pages',
    repo: 'git@github.com:halbedel/airofjasmine.git',
    user: {
      name: 'Bernhard Mühl',
      email: 'bernhard.muehl@gmail.com'
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);
