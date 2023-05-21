import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Funko Fanfare | ${title}`;
  }, [title]);
};
export default useTitle;
