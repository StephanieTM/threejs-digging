import React, { useState } from 'react';

export default function Homepage(): JSX.Element {
  const [contentSwitch, setContentSwitch] = useState<boolean>(false);

  function handleSwitch() {
    setContentSwitch(!contentSwitch);
  }

  return (
    <div onClick={handleSwitch}>
      {contentSwitch ? (
        <div>Congrats 🎉</div>
      ) : (
        <div>
          {new Array(1000).fill(0).map((_i, key) => (
            <div key={key}>Hello World!</div>
          ))}
        </div>
      )}
    </div>
  );
}
