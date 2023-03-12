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
      // make the text overflow scrollable if it's too long
      
      // <div className="overflow-hidden rounded-md bg-white shadow mb-10 ">
        <div className="px-4 py-5 sm:px-6 over">
        <ul role="list" className="divide-y divide-gray-200 ">
          {items.map((item) => (
            <li key={item.id} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-gray-900">
                  {item.output}
                </div>
              </div>
              
              {/* This code will iterate over the numbers 1 to 100, and for each number, it will check if it's divisible by 3 and/or 5, and output the corresponding string "Fizz", "Buzz", or "FizzBuzz" if it is. If the number is not divisible by 3 or 5, it will simply output the number itself. */}
            </li>
          ))}
        </ul>
      // </div>
    )
  }
  