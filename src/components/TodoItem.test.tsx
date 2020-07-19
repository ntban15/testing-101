import React from "react";
import { render, fireEvent } from "@testing-library/react";

import TodoItem from "./TodoItem";

const mockTodo = {
  id: "1234",
  content: "hehe",
  completed: false,
};
