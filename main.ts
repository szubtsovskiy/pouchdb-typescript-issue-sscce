import PouchDB from 'pouchdb';

const pouch = new PouchDB('sscce');

pouch.info().then(info => console.log(info));
