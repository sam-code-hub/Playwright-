import { test, expect } from '@playwright/experimental-ct-vue2';
import Button from '@/components/Button.vue';

test('unmount', async ({ page, mount }) => {
  const component = await mount(<Button title="Submit" />);
  await expect(page.locator('#root')).toContainText('Submit');
  await component.unmount();
  await expect(page.locator('#root')).not.toContainText('Submit');
});

test('unmount twice throws an error', async ({ mount }) => {
  const component = await mount(<Button title="Submit" />);
  await component.unmount();
  await expect(component.unmount()).rejects.toThrowError('Component was not mounted');
});
