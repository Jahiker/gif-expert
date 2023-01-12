import { render } from "@testing-library/react";

import { GifItem } from "../../src/components/GifItem";

describe("GifItem test", () => {
  test("should match with snapshot", () => {
    const image = {
      title: "Gif title",
      url: "https://media1.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=07c8597afzxwa9byycg9v8lxxrempu6e00jrru5v4tiavcqk&rid=giphy.gif&ct=g",
    };

    const { component } = render(<GifItem {...image} />);
    expect( component ).toMatchSnapshot();
  });
});
