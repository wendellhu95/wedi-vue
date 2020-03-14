import { inject, onUnmounted } from 'vue';
import {
  Injector,
  DependencyCollection,
  DependencyItem,
  DependencyKey
} from 'wedi';

export function useInjector(
  entries?: DependencyItem<any>[]
): { injector: Injector } {
  const injector = new Injector(new DependencyCollection(entries));

  onUnmounted(() => {
    injector.dispose();
  });

  return {
    injector
  };
}

export function useDependency<T>(key: DependencyKey<T>): T;
export function useDependency<T>(
  key: DependencyKey<T>,
  optional: true
): T | null;
export function useDependency<T>(
  key: DependencyKey<T>,
  optional?: boolean
): T | null {
  const { injector } =
}
