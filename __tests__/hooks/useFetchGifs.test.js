import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Tests in useFetchGifs hook', () => {
    const testCategory = 'dragon ball';

    test('Should return the initial state', () => {
        const { result } = renderHook( () => useFetchGifs(testCategory));
        const { images, isLoading } = result.current;
        expect(images.length).toBe( 0 );
        expect(isLoading).toBeTruthy();
    })

    test('Should return an image array and the isLoading as true', async() => {
        const { result } = renderHook( () => useFetchGifs(testCategory));
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan( 0 ),
            {
                timeout: 3000
            }
        )
        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan( 0 );
        expect(isLoading).toBeFalsy();
    })
})