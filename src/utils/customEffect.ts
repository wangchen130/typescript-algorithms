import { useEffect } from 'react';

export const customEffect = (cal: Function) => {
  useEffect(() => {
    cal();
  }, []);
};
