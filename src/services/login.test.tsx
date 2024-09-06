import { login } from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  it("Deve exibir um aler com boas vindas", () => {
    login();
    expect(mockAlert).toHaveBeenCalledWith("Hello Word, Gabriel!");
  });
});
