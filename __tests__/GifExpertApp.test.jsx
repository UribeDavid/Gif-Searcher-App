import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Tests in <GifExpertApp/>', () => {

    test('Should be rendered', () => {
        render( <GifExpertApp/> )
        expect(screen.getByText('GifExpertApp')).toBeTruthy();
    })
})