
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { FC } from 'react'

interface OutputProps {
  value: String[]
}

const Output: FC<OutputProps> = ({ value }) => {
 
    return (

      <div className="max-h-[80vh] min-w-5/6 w-full	 overflow-auto max-w-xl bg-white shadow sm:rounded-lg">
      {value.map((result: any, index: any) => (
            <li
              key={index}
              // if message.id is even, then have bg-white, else bg-gray-50
              className={index % 2 === 0 ? "bg-gray-50 px-4 py-5 sm:grid sm:px-6" : "bg-white px-4 py-5 sm:grid sm:px-6"}
              // className="bg-white px-4 py-5 sm:grid sm:px-6"
              >
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 display-linebreak">{result}</dd>
            </li>
          ))}
     
    </div>
      
      // make the text overflow scrollable if it's too long
      
      // <div className="rounded-md bg-white shadow mb-10 ">
      //   <div className="px-4 py-5 sm:px-6 over">
      //   <ul role="list" className="divide-y divide-gray-200 ">
      //     {items.map((item) => (
      //       <li key={item.id} className="px-6 py-4">
      //         <div className="flex items-center justify-between">
      //           <div className="text-sm font-medium text-gray-900">
      //             {item.output}
      //           </div>
      //         </div>
              
      //       </li>
      //     ))}
      //   </ul>
      //  </div>
      //  </div>

    )
  }
 
  export default Output