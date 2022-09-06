import { useCallback, useEffect, useRef, useState } from 'react';

const useUpdate = () => {
  const [, setState] = useState({});
  const mountedRef = useRef(false);
  useEffect(() => {
    mountedRef.current = true;
  });

  return useCallback(() => {
    if (mountedRef.current) setState({});
  }, []);
};

export default useUpdate;
