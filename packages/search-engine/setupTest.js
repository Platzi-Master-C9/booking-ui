import { configure } from 'enzyme';
import fetchMock from 'jest-fetch-mock';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'regenerator-runtime/runtime';

configure({ adapter: new Adapter() });
//global.fetch = require('jest-fetch-mock'); //Sobrescribe el metodo fetch nativo
fetchMock.enableMocks();
