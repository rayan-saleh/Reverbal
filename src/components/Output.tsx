// export default function Output() {
//     return (
//       <div className="bg-gray-200 sm:rounded-lg my-5 ">
//         <div className="px-4 py-5">
//           <div className="mt-2 text-sm text-gray-500">
//             <p>This code will iterate over the numbers 1 to 100, and for each number, it will check if it's divisible by 3 and/or 5, and output the corresponding string "Fizz", "Buzz", or "FizzBuzz" if it is. If the number is not divisible by 3 or 5, it will simply output the number itself.



// </p>
//           </div>
//         </div>
//       </div>
//     )
//   }

import { PaperClipIcon } from '@heroicons/react/20/solid'


  const items = [
    { id: 1,  output: `To return an item on Amazon, follow these steps: \n
    \n
    <br>
    1. Go to Amazon's website and click on the "Returns & Orders" tab at the top of the page.
    
    2. Find the order that contains the item you want to return and click on the "Return or Replace items" button.
    
    3. Select the item you want to return and choose a reason for the return.
    
    4. Decide whether you want a replacement or a refund.
    
    5. Follow the instructions provided by Amazon to print a return label and pack the item securely for shipping.
    
    6. Ship the item back to Amazon using the provided label.
    
    7. Wait for Amazon to process your return and issue a refund or replacement.
    
    Note: Depending on the reason for the return, you may be responsible for the cost of return shipping. Also, some items on Amazon may be ineligible for return, so be sure to check the return policy for the specific item you want to return.`},
    { id: 2,  output: "Oh sure, let's all hold hands and sing kumbaya. Because that's definitely how a nation thrives. Just kidding. In all seriousness, a nation thrives when its people are given the freedom to create and produce without interference from a bloated government. When individuals are motivated by their own interests and are free to act upon those interests, innovation and growth abound. And no, I'm not proposing a completely laissez-faire approach to governance \u2013 but there has to be a balance between regulation and individual autonomy."},
    { id: 3,  output: "FizzBuzz"},
    // More items...
  
  ]
  
  export default function Output() {
    return (

      <div className="overflow-hidden max-w-xl bg-white shadow sm:rounded-lg">
      {/* <div className="px-4 py-5 sm:px-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">Applicant Information</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
      </div> */}
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            {/* <dt className="text-sm font-medium text-gray-500">Full name</dt> */}
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Waiting for ChatGPT data...</dd>
          </div>
          {/* <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Application for</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Backend Developer</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Salary expectation</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">$120,000</dd>
          </div> */}
          <div className="bg-gray-50 px-4 py-5  sm:gap-4 sm:px-6">
            {/* <dt className="text-sm font-medium text-gray-500">About</dt> */}
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div>
          <div className="bg-white px-4 py-5  sm:gap-4 sm:px-6">
            {/* <dt className="text-sm font-medium text-gray-500">About</dt> */}
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            Do not write all the conservation at once. I want you to only do the interview with me. Ask me the questions and wait for my answers. Do not write explanations. Ask me the questions one by one like an interviewer does and wait for my answers. My first sentence is “Hi”
            </dd>
          </div>
          {/* <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 w-0 flex-1 truncate">resume_back_end_developer.pdf</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 w-0 flex-1 truncate">coverletter_back_end_developer.pdf</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div> */}
        </dl>
      </div>
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
  