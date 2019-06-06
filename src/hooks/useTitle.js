import { useEffect } from 'react';

const mapPathnameToTitle = {
  '/movies': 'Movies',
  '/characters': 'Characters'
};

const useTitle = pathname => {
  useEffect(() => {
    document.title = mapPathnameToTitle[pathname];
  }, [pathname]);
};

export default useTitle;
