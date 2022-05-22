// tests/utils/storage.test.ts
import localStorage from '@/utils/storage'


describe("storage", () => {
  it("可以缓存值", () => {
    localStorage.set("newKey", "hello");
    expect(localStorage.get("newKey")).toEqual("hello");
  });

  it("可以设置值", () => {
    localStorage.set("newKey", "hello");
    expect(localStorage.get("newKey")).toEqual("hello");
  });
});
