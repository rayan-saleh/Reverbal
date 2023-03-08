
import { Tab, Switch } from '@headlessui/react'
import { AtSymbolIcon, CodeBracketIcon, LinkIcon } from '@heroicons/react/20/solid'
import { CalendarIcon, PaperClipIcon, TagIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Settings() {

  const [enabled, setEnabled] = useState(false)

  return (
    <div className="mx-48">
      <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Change prompt
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Account settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Support
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  License
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>


    {/* Attaching a file */}
    <div className="inline justify-end">
            <button
              type="button"
              className="group -my-2 -ml-2 inline-flex items-center rounded-full px-3 py-2 text-left text-gray-400"
            >
              <PaperClipIcon className="-ml-1 mr-2 h-5 w-5 group-hover:text-gray-500" aria-hidden="true" />
              <span className="text-sm italic text-gray-500 group-hover:text-gray-600">Attach a file</span>
            </button>
          </div>


          <Switch.Group as="div" className="inline justify-end">
       <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled ? 'bg-indigo-600' : 'bg-gray-200',
          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
          )}
        />
      </Switch>
      <Switch.Label as="span" className="ml-3">
        <span className="text-sm font-medium text-gray-900">Enable voice</span>{' '}
      </Switch.Label>
    </Switch.Group>
  
      <div className="mt-2">
        <textarea
          rows={4}
          name="comment"
          id="comment"
          className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
          defaultValue={''}
        />
      </div>
    </div>
  )
}




// export default function Settings() {
//   const [enabled, setEnabled] = useState(false)

  
//   return (
//     <>
//     {/* <form action="#" className="relative">
//             <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500"> */}
//           <div className="mx-48">
//           <Menu as="div" className="relative inline-block text-left">
//       <div>
//         <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
//           Options
//           <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
//         </Menu.Button>
//       </div>

//       <Transition
//         as={Fragment}
//         enter="transition ease-out duration-100"
//         enterFrom="transform opacity-0 scale-95"
//         enterTo="transform opacity-100 scale-100"
//         leave="transition ease-in duration-75"
//         leaveFrom="transform opacity-100 scale-100"
//         leaveTo="transform opacity-0 scale-95"
//       >
//         <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//           <div className="py-1">
//             <Menu.Item>
//               {({ active }) => (
//                 <a
//                   href="#"
//                   className={classNames(
//                     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                     'block px-4 py-2 text-sm'
//                   )}
//                 >
//                   Account settings
//                 </a>
//               )}
//             </Menu.Item>
//             <Menu.Item>
//               {({ active }) => (
//                 <a
//                   href="#"
//                   className={classNames(
//                     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                     'block px-4 py-2 text-sm'
//                   )}
//                 >
//                   Support
//                 </a>
//               )}
//             </Menu.Item>
//             <Menu.Item>
//               {({ active }) => (
//                 <a
//                   href="#"
//                   className={classNames(
//                     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                     'block px-4 py-2 text-sm'
//                   )}
//                 >
//                   License
//                 </a>
//               )}
//             </Menu.Item>
//             <form method="POST" action="#">
//               <Menu.Item>
//                 {({ active }) => (
//                   <button
//                     type="submit"
//                     className={classNames(
//                       active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                       'block w-full px-4 py-2 text-left text-sm'
//                     )}
//                   >
//                     Sign out
//                   </button>
//                 )}
//               </Menu.Item>
//             </form>
//           </div>
//         </Menu.Items>
//       </Transition>
//     </Menu>
//       <Tab.Group>
//         {({ selectedIndex }) => (
//           <>
//             <Tab.List className="flex items-center ">
//               <Tab
//                 className={({ selected }) =>
//                   classNames(
//                     selected
//                       ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
//                       : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900',
//                     'rounded-md border border-transparent px-3 py-1.5 text-sm font-medium'
//                   )
//                 }
//               >
//                 Custom prompt
//               </Tab>
//               <Tab
//                 className={({ selected }) =>
//                   classNames(
//                     selected
//                       ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
//                       : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900',
//                     'ml-2 rounded-md border border-transparent px-3 py-1.5 text-sm font-medium'
//                   )
//                 }
//               >
//                 Customer support prompt
//               </Tab>

//               {/* These buttons are here simply as examples and don't actually do anything. */}
//               {selectedIndex === 0 ? (
//                 <div className="ml-auto flex items-center space-x-5">
//                   <div className="flex items-center">
//                   <Switch.Group as="div" className="flex items-center">
//       <Switch
//         checked={enabled}
//         onChange={setEnabled}
//         className={classNames(
//           enabled ? 'bg-indigo-600' : 'bg-gray-200',
//           'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
//         )}
//       >
//         <span
//           aria-hidden="true"
//           className={classNames(
//             enabled ? 'translate-x-5' : 'translate-x-0',
//             'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
//           )}
//         />
//       </Switch>
//       <Switch.Label as="span" className="ml-3">
//         <span className="text-sm font-medium text-gray-900">Enable voice</span>{' '}
//       </Switch.Label>
//     </Switch.Group>
//                   <button
//               type="button"
//               className="group -my-2 -ml-2 inline-flex items-center rounded-full px-3 py-2 text-left text-gray-400"
//             >
//               <PaperClipIcon className="-ml-1 mr-2 h-5 w-5 group-hover:text-gray-500" aria-hidden="true" />
//               <span className="text-sm italic text-gray-500 group-hover:text-gray-600">Attach a file</span>
//             </button>
//                     <button
//                       type="button"
//                       className="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
//                     >
                      
//                       <span className="sr-only">Insert link</span>
//                       <LinkIcon className="h-5 w-5" aria-hidden="true" />
//                     </button>
//                   </div>
               
//                   <div className="flex items-center">
//                     <button
//                       type="button"
//                       className="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
//                     >
//                       <span className="sr-only">Mention someone</span>
//                       <AtSymbolIcon className="h-5 w-5" aria-hidden="true" />
//                     </button>
//                   </div>
//                 </div>
//               ) : null}
//             </Tab.List>
//             <Tab.Panels className="mt-2">
//               <Tab.Panel className="-m-0.5 rounded-lg p-0.5">
//                 <label htmlFor="comment" className="sr-only">
//                   Comment
//                 </label>
//                 <div>
//                   <textarea
//                     rows={5}
//                     name="comment"
//                     id="comment"
//                     className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
//                     placeholder="Add your comment..."
//                     defaultValue={''}
//                   />
//                 </div>
//               </Tab.Panel>
//               <Tab.Panel className="-m-0.5 rounded-lg p-0.5">
//                 <div className="border-b">
//                   <div className="mx-px mt-px px-3 pt-2 pb-12 text-sm leading-5 text-gray-800">
//                     Preview content will render here.
//                   </div>
//                 </div>
//               </Tab.Panel>
//             </Tab.Panels>
//           </>
//         )}
//       </Tab.Group>
      
//       <div className="flex items-center justify-between space-x-3 border-t border-gray-200 px-2 py-2 sm:px-3">
//           <div className="flex">
            
//           </div>
//         </div>
//         </div>
//       {/* </div>
//     </form> */}
    
//     </>

//   )

// }
