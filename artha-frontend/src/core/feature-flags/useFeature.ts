import { useAppStore } from '@/core/state'

export function useFeature(flag: string): boolean {
  const enabledFeatures = useAppStore((state) => state.enabledFeatures)
  return enabledFeatures.includes(flag)
}
