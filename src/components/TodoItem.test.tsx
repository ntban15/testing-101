import React from "react";
import { render, fireEvent } from "@testing-library/react";

import TodoItem from "./TodoItem";

const mockTodo = {
  id: "1234",
  content: "hehe",
  completed: false,
};

describe("TodoItem", () => {
  it("should render", () => {
    render(
      <TodoItem
        todo={mockTodo}
        onToggle={() => {}}
        onDestroy={() => {}}
        onSave={() => {}}
      />
    );
  });

  it("should display todo content", () => {
    const { getByText } = render(
      <TodoItem
        todo={mockTodo}
        onToggle={() => {}}
        onDestroy={() => {}}
        onSave={() => {}}
      />
    );

    expect(getByText("hehe")).toBeInTheDocument();
  });

  it("should trigger onDestroy when click on remove button", () => {
    const removeFnMock = jest.fn();

    const { getByTestId } = render(
      <TodoItem
        todo={mockTodo}
        onToggle={() => {}}
        onDestroy={removeFnMock}
        onSave={() => {}}
      />
    );

    fireEvent.click(getByTestId("remove-button"));

    expect(removeFnMock).toHaveBeenCalled();
  });
});
