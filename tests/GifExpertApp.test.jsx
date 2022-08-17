import { render,screen,fireEvent } from "@testing-library/react"
import {GifExpertApp} from '../src/GifExpertApp';


describe('Pruebas en el componente <GifExpertApp />', () => { 
    test('debe de hacer match con el snapshot', () => { 
      
        const newCategory = 'Turtle';

        const {container} =  render(<GifExpertApp/>);
        expect(container).toMatchSnapshot();

     })

})