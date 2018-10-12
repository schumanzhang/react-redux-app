import { expect } from 'chai';
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// globally accessible test functions
global.expect = expect;

global.mount = mount;
global.render = render;
global.shallow = shallow;