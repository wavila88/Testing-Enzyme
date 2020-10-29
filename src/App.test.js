import App from './App';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure } from 'enzyme';
import axios from 'axios';

import {getSaludo} from './services/saludoService';

configure({adapter: new Adapter()});

jest.mock('axios');

describe('fetchData', () => {
    it('Render component', ()=> {
        const wrapper = shallow(<App/>);
        console.log(wrapper.debug());
    })

    it('Mocking api call', async () => {

        const data = {
            data: {
                hits: [
                    {
                        objectID: '1',
                        title: 'a',
                    },
                    {
                        objectID: '2',
                        title: 'b',
                    },
                ],
            },
        };

        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        const respuesta = await getSaludo();
        console.log(respuesta.hits[0].objectID);
        expect(respuesta.hits[0].objectID).toBe("1");

});
});


