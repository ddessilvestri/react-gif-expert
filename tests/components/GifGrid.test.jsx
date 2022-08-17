import {render,screen} from '@testing-library/react';
import {GifGrid} from '../../src/components/GifGrid'; 
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => { 
    
    test('debe de mostrar el loading inicialmente', () => { 
        const category = 'One Punch';

        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true,
        });

        render(<GifGrid category={category}/>);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));
        //screen.debug();
     });

    test('debe de mostrar itemss cuando se cargan las imagenes', () => { 
        const category = 'One Punch';
        const gifs =[
            {
                id:'ABCD',
                title:'Saitama2',
                url:'https://localhost/saitama2.jpg'
            },
            {
                id:'ABC',
                title:'Saitama',
                url:'https://localhost/saitama.jpg'
            },
            
        ];

        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading: false,
        });
        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);
        screen.debug();

    })
 })