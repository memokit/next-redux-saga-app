// import cookies from '../../../utils/cookies';
import { serialize } from 'cookie';

export default (req, res) => {
    const data = {
        result: people,
        ststus:200
    };

    // const handler = (req, res) => {
    //     res.cookie('Next.js', 'api-middleware!');
    //     res.end('Hello Next.js middleware!');
    // };
    res.cookie = cookie(res,"xxx", "12334");
    res.status(200).json(data);

    
};

const cookie = (res, name, value, options = {}) => {
    const stringValue =
      typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value);
  
    if ('maxAge' in options) {
      options.expires = new Date(Date.now() + options.maxAge);
      options.maxAge /= 1000;
    }
  
    res.setHeader('Set-Cookie', serialize(name, String(stringValue), options));
  };

export const people = [
    {
        id: '1',
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        gender: 'male'
    },
    {
        id: '2',
        name: 'C-3PO',
        height: '167',
        mass: '75',
        hair_color: 'n/a',
        skin_color: 'gold',
        eye_color: 'yellow',
        gender: 'n/a'
    },
    {
        id: '3',
        name: 'R2-D2',
        height: '96',
        mass: '32',
        hair_color: 'n/a',
        skin_color: 'white, blue',
        eye_color: 'red',
        gender: 'n/a'
    },
    {
        id: '4',
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        hair_color: 'none',
        skin_color: 'white',
        eye_color: 'yellow',
        gender: 'male'
    },
    {
        id: '5',
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        hair_color: 'brown',
        skin_color: 'light',
        eye_color: 'brown',
        gender: 'female'
    },
    {
        id: '6',
        name: 'Owen Lars',
        height: '178',
        mass: '120',
        hair_color: 'brown, grey',
        skin_color: 'light',
        eye_color: 'blue',
        gender: 'male'
    },
    {
        id: '7',
        name: 'Beru Whitesun lars',
        height: '165',
        mass: '75',
        hair_color: 'brown',
        skin_color: 'light',
        eye_color: 'blue',
        gender: 'female'
    },
    {
        id: '8',
        name: 'R5-D4',
        height: '97',
        mass: '32',
        hair_color: 'n/a',
        skin_color: 'white, red',
        eye_color: 'red',
        gender: 'n/a'
    },
    {
        id: '9',
        name: 'Biggs Darklighter',
        height: '183',
        mass: '84',
        hair_color: 'black',
        skin_color: 'light',
        eye_color: 'brown',
        gender: 'male'
    },
    {
        id: '10',
        name: 'Obi-Wan Kenobi',
        height: '182',
        mass: '77',
        hair_color: 'auburn, white',
        skin_color: 'fair',
        eye_color: 'blue-gray',
        gender: 'male'
    }
];