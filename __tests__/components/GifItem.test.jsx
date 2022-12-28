import { render, screen } from "@testing-library/react"

import { GifItem } from "../../src/components/GifItem"

describe('Tests in <GifItem/>', () => {

    const [title, url] = ['Test title', 'https://www.test.com/']

    test('Should match with the snapshot', () => {
        const { container } = render(
            <GifItem title={ title } url={ url }/>
        )
        expect( container ).toMatchSnapshot();
    })

    test('Should show the image with the URL and the ALT indicated', () => {
        render(
            <GifItem title={ title } url={ url }/>
        )
        const {src, alt} = screen.getByRole('img');
        expect( src ).toBe(url)
        expect( alt ).toBe(title)
    })

    test('Should show title in the component', () => {
        render(
            <GifItem title={ title } url={ url }/>
        )
        expect( screen.getByText(title) ).toBeTruthy();
    })
})