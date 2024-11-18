import { render } from "@testing-library/react"
import { GifItem } from "../../../src/components/gif/GifItem"
import React from "react"

describe("Prueba de componentes GifItem", () => {
    test("Debe de mostrar el componente correctamente", () => {
        const title = "Saitama"
        const url = "https://angel-angel.com"
        
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    })
})