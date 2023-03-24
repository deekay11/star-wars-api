import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { ApiBase } from "./Components/ApiBase";

const server = setupServer(
  rest.get(`${ApiBase}/people/1/`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: 'Luke Skywalker',
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders the name of the first person from the Star Wars API', async () => {
  render(<App />);
  await waitFor(() => expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument());
});
