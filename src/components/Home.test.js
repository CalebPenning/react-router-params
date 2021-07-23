import Home from "./Home"
import { render } from '@testing-library/react'

it("Renders without crashing", () => {
    render(<Home />)
})