export const ensureNetwork = async <T>(api: Promise<T>, timeout: number, fallbackValue: T): Promise<T> => {
  const timeoutPromise = new Promise<T>(resolve => setTimeout(() => resolve(fallbackValue), timeout))
  return await Promise.race([api, timeoutPromise])
}
