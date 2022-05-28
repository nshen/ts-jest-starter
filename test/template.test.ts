import { sum } from "@/utils/sum";

describe("template", () => {
  let users: string[] = [];

  beforeAll(() => {});
  afterAll(() => {});
  beforeEach(() => {
    users = ["Juntao", "Abruzzi", "Alex"];
  });
  afterAll(() => {});

  it("should sum 1 + 1", () => {
    expect(1 + 1).toEqual(2);
  });

  it("match arrays", () => {
    expect(users).toContainEqual("Juntao");
    // 更严格 === 检查object 地址
    expect(users).toContain(users[0]);
  });

  it("basic usage", () => {
    expect(1 + 1).toBe(2); // PASS
    expect("Juntao").toBe("Juntao"); // PASS
    // 更严格 === 检查object 地址
    expect({ name: "Juntao" }).not.toBe({ name: "Juntao" }); //FAIL
  });
});

describe("Expect Functions", () => {
  it("string contains", () => {
    const givenName = expect.stringContaining("Juntao");
    expect("Juntao Qiu").toEqual(givenName);
  });

  it("array containing", () => {
    const users = ["Juntao", "Abruzzi", "Alex"];
    const userSet = expect.arrayContaining(["Juntao", "Abruzzi"]);
    expect(users).toEqual(userSet);
  });
});
