import * as React from "react";
import { shallow } from "enzyme";
const Adapter = require("enzyme-adapter-react-16");
import NavBar from "../components/NavBar";
require("enzyme").configure({ adapter: new Adapter() });

describe("Top Nav bar", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<NavBar />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());

  it("should allow text input in the form", function () {
    const searchMock = jest.fn();
    wrapper.setProps({
      setQuery: searchMock,
    });
    const event = { preventDefault() {}, target: { value: "input value" } };
    wrapper.find(".input").simulate("change", event);
    expect(searchMock).toBeCalledWith("input value");
  });

  it("should invoke method passed on the form when submitted", () => {
    const onSubmit = jest.fn();
    wrapper.setProps({
      handleSubmit: onSubmit,
    });
    const event = { preventDefault() {}, target: { value: "input value" } };
    wrapper.find(".form").simulate("submit", event);
    expect(onSubmit.mock.calls.length).toEqual(1);
  });
});
