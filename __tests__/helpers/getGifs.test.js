import { getGifs } from "../../src/helpers/getGifs"

describe('Tests in getGifs() ', () => {

    const category = 'dragon ball'
    test('Should return a gif array', async() => {
        const gifs = await getGifs(category);
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        })
        expect( gifs.every(gif => typeof gif === 'object') ).toBeTruthy();
    })
})