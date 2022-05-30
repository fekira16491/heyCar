import "@testing-library/jest-dom/extend-expect";

import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../../Components/redux/reducer/index";
import { mount, shallow } from "enzyme";
import Dashboard from "../../../Components/ui/Dashboard";
describe("Given Dashboard comp", () => {
  let mockAppstore;
  let wrapper;
 
  beforeEach(() => {
    //redux
    mockAppstore = createStore(rootReducer, {
      user: {
        isLoading: false,
        usersList: {
          data: [
            {
              userId: "rahej",
              firstName: "John",
              lastName: "Doe",
              email: "john.doe@email.com",
            },
          ],
        },
      },

      project: {
        isLoading: false,
        projectList: {
          data: [
            {
              description:
                "Sit amet luctus venenatis lectus magna fringilla urna porttitor.",
              gatewayIds: ["gDJ2s"],
              image: "https://mvpmatch.co/images/logo.svg",
              industry: "IT",
              name: "Project 1",
              projectId: "bgYhx",
              rule: "Manual Selection",
              structure: "Sole proprietorship",
              userIds: ["rahej"],
              website: "https://mvpmatch.co/",
            },
          ],
        },
      },

      gateway: {
        gatewayList: {
          data: [
            {
              apiKey: "sk_test_6eC49HqLyjWDarjtT1zdp7dc",
              description:
                "Sit amet luctus venenatis lectus magna fringilla urna porttitor.",
              gatewayId: "i6ssp",
              name: "Gateway 1",
              secondaryApiKey: "",
              type: "Stripe",
            },
          ],
        },
      },
    });
    wrapper = mount(
      <Provider store={mockAppstore}>
        <Dashboard />
      </Provider>
    );
  });

  it("should render dashboard comp", () => {
    expect(wrapper).toHaveLength(1);
    expect(wrapper.containsMatchingElement(<Dashboard />)).toEqual(true);
  });
});
