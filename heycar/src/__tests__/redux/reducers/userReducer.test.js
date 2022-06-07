import { USER_SUCESS } from "../../../Components/redux/action/actionType";
import userReducer from "../../../Components/redux/reducer/userReducer";

describe("userReducer", () => {
  describe("when userReducer and action{type:USER_SUCESS}", () => {
    it("should return updated state", () => {
      const userItem = {
        userId: "rahej",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@email.com",
      };

      const state = {
        usersList: [],
      };
      let action = { type: USER_SUCESS, payload: userItem };
      let result = userReducer(state, action);
      expect(result).toStrictEqual({ usersList: userItem });
    });
  });

  describe("when userReducer and action{type:USER_FAIL}", () => {
    it("should return updated state", () => {
      const error = undefined;
      const state = {
        usersList: [],
        isLoading: false,
      };
      let action = { type: "USER_FAIL", payload: error };
      let result = userReducer(state, action);
      expect(result).toStrictEqual({ usersList: undefined, isLoading: false });
    });
  });

  describe("when userReducer and action{type:default}", () => {
    it("should return updated state", () => {
      const state = {
        usersList: [],
        isLoading: false,
      };
      let action = { type: "DEFAULT_ACTION" };
      let result = userReducer(state, action);
      expect(result).toStrictEqual(state);
    });
  });
});
