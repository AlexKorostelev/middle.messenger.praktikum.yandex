export type Indexed<T = any> = {
  [key in string]: T;
};

export function merge(lhs: Indexed, rhs: Indexed): Indexed {
  // eslint-disable-next-line no-restricted-syntax
  for (const p in rhs) {
    // eslint-disable-next-line no-prototype-builtins
    if (!rhs.hasOwnProperty(p)) {
      // eslint-disable-next-line no-continue
      continue;
    }
    try {
      if (rhs[p].constructor === Object) {
        rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
      } else {
        lhs[p] = rhs[p];
      }
    } catch (e) {
      lhs[p] = rhs[p];
    }
  }

  return lhs;
}

export function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
  if (typeof object !== 'object' || object === null) {
    return object;
  }
  const result = path.split('.').reduceRight<Indexed>(
    (acc, key) => ({
      [key]: acc,
    }),
    value as any,
  );

  return merge(object as Indexed, result);
}

export function isEqual(a: any, b: any): boolean {
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length === 0 && keysB.length === 0 && a === b) {
    return true;
  }
  if (keysA.length !== keysB.length) {
    return false;
  }

  for (let i = 0; i < keysA.length; i += 1) {
    const keyA = keysA[i];
    const keyB = keysB[i];

    if (keyA !== keyB) {
      return false;
    }

    // Если один из объектов null, а второй нет - то false
    if ((a[keyA] === null && b[keyB] !== null) || (a[keyA] !== null && b[keyB] === null)) {
      return false;
    }

    if (typeof a[keyA] === 'object' && a[keyA] !== null) {
      if (typeof b[keyB] !== 'object' && b[keyB] !== null) {
        return false;
      }

      return isEqual(a[keyA], b[keyA]);
    }
    if (a[keyA] !== b[keyB]) {
      return false;
    }
  }

  return true;
}

export function isPlainObject(value: unknown): value is Indexed {
  return typeof value === 'object' && value !== null && value.constructor === Object && Object.prototype.toString.call(value) === '[object Object]';
}

export function isArray(value: unknown): value is [] {
  return Array.isArray(value);
}

export function isArrayOrObject(value: unknown): value is [] | Indexed {
  return isPlainObject(value) || isArray(value);
}

export function getKey(key: string, parentKey?: string) {
  return parentKey ? `${parentKey}[${key}]` : key;
}

export function getParams(data: Indexed | [], parentKey?: string) {
  const result: [string, string][] = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(data)) {
    if (isArrayOrObject(value)) {
      result.push(...getParams(value, getKey(key, parentKey)));
    } else {
      result.push([getKey(key, parentKey), encodeURIComponent(String(value))]);
    }
  }

  return result;
}

export function queryString(data: Indexed) {
  if (!isPlainObject(data)) {
    throw new Error('input must be an object');
  }

  return getParams(data)
    .map((arr) => arr.join('='))
    .join('&');
}
