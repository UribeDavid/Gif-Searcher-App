import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Tests in <GifGrid/>', () => {

    const testCategory = 'dragon ball';

    test('Should show loading at the begining', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={testCategory}/>);
        expect( screen.getByText('Cargando...'));
        expect( screen.getByText(testCategory));
    })

    test('Should show items when the images get loaded from useFetchGifs', () => {
        const gifs = [
            {id: 'abc', title: 'dbz', url: 'www.test.com'},
            {id: 'abc2', title: 'dbz2', url: 'www.test2.com'},
        ];
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        render(<GifGrid category={testCategory}/>);
        expect( screen.getAllByRole('img').length).toBe(2);

    })
})