import { test as base, expect } from "@playwright/test";

type AutomaticFixtures = {
  eachTestHooks: void;
  allTestsHooks: void;
};

export const test = base.extend<
  Pick<AutomaticFixtures, "eachTestHooks">,
  Pick<AutomaticFixtures, "allTestsHooks">
>({
  // beforeEach / afterEach: hər test üçün avtomatik işləyir.
  eachTestHooks: [
    async ({}, use, testInfo) => {
      console.log(`[beforeEach] ${testInfo.title}`);

      await use();

      console.log(`[afterEach] ${testInfo.title} - ${testInfo.status}`);
    },
    { auto: true },
  ],

  // beforeAll / afterAll: hər worker-də bütün testlər üçün bir dəfə işləyir.
  allTestsHooks: [
    async ({}, use, workerInfo) => {
      console.log(`[beforeAll] ${workerInfo.project.name}`);

      await use();

      console.log(`[afterAll] ${workerInfo.project.name}`);
    },
    { scope: "worker", auto: true },
  ],
});

export { expect };
