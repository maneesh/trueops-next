export default class Session {
  static get(key: string): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem(key);
    }
    return null;
  }

  static getObject<T = unknown>(key: string): T | null {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem(key);

      if (data !== null && data !== undefined) {
        try {
          return JSON.parse(data) as T;
        } catch (error) {
          return null;
        }
      }
    }
    return null;
  }

  static set(key: string, value: string): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, value);
    }
  }

  static setObject(key: string, value: object): void {
    if (typeof window !== "undefined") {
      const data = JSON.stringify(value);
      localStorage.setItem(key, data);
    }
  }

  static remove(key: string): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  }
}
