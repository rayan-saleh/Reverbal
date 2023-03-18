import { PaperClipIcon } from '@heroicons/react/20/solid';
import { FC } from 'react';
import { useRef, useEffect } from 'react';
// @ts-ignore
import ScrollToBottom from 'react-scroll-to-bottom';

interface OutputProps {
  value: String[];
  isRecording: boolean;
}


const Output: FC<OutputProps> = ({ value, isRecording }) => {
  const ref = useRef<any>();
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [value]);

  return (
    
    <ScrollToBottom>
      <div ref={ref} className="max-h-[70vh] min-w-5/6 w-full overflow-auto max-w-xl bg-white shadow sm:rounded-lg">
        {value.map((result: any, index: any) => (
          <li
            key={index}
            className={
              index % 2 === 0
                ? 'bg-gray-50 px-4 py-5 sm:grid sm:px-6'
                : 'bg-white px-4 py-5 sm:grid sm:px-6'
            }
          >
            <dd className=" mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 display-linebreak">
              {result}
            </dd>
          </li>
        ))}
        {isRecording ? (
          <li
            key="waiting_response"
            className="bg-white px-4 py-5 sm:grid sm:px-6"
          >
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              Listening...
            </dd>
          </li>
        ) : (
          <></>
        )}
      </div>
    </ScrollToBottom>
  );
};

export default Output;


