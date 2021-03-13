import React from "react";
import { debounce } from "lodash";

function Input2({ max }) {
  const [time, setTime] = React.useState();

  const sum = React.useMemo(() => {
    let aaa = 0;
    for (let i = 0; i < max; i += 1) {
      aaa += i;
    }
    return aaa;
  }, [max]);

  React.useEffect(() => {
    setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  }, []);

  return sum;
}

export default React.memo(Input2);
