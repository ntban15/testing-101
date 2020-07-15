export const asyncSetTimeout = async <T>(callback: () => T, timeout?: number): Promise<T> => {
  return new Promise(resolve => setTimeout(
    () => { resolve(callback()); }, 
    timeout
  ));
};
