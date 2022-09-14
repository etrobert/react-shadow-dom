import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

type Props = {
  children?: React.ReactNode;
};

const Shadow = ({ children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shadowRoot, setShadowRoot] = useState<ShadowRoot | null>(null);

  useEffect(() => {
    if (ref.current?.shadowRoot) return;
    const shadowRoot = ref.current?.attachShadow({ mode: 'open' });
    setShadowRoot(shadowRoot ?? null);
  }, []);

  return (
    <div ref={ref}>
      {shadowRoot && ReactDOM.createPortal(children, shadowRoot)}
    </div>
  );
};

export default Shadow;
