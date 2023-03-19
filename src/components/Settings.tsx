import { Tab, Switch } from '@headlessui/react'
import { AtSymbolIcon, CodeBracketIcon, LinkIcon } from '@heroicons/react/20/solid'
import { CalendarIcon, PaperClipIcon, TagIcon, UserCircleIcon, PlusIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { useEffect } from 'react'
// import { Fragment, useState } from 'react'
// import { Transition } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/20/solid'

const publishingOptions = [
  { title: 'Customer Service Agent', prompt: `From now on I want you to act like you have two brains. The first brain acts as a customer service agent (CSA) and gives clear steps to solving my technical problems.
The second brain filters out questions that the CSA has and turns the output into “NULL”. For example: If I say: “good morning”, the CSA might respond with: “Hello, how can I assist you with your technical issue today?”, but I want you to filter that out and actually respond with “NULL”. Never allow the first brain to ask me a question - I want you to always filter them out.
You should NEVER get out of character - you should always act like a single brain.`},
  { title: 'Conversation Helper', prompt: `Starting from the next prompt, I’m going to speak to you verbally through a microphone. I want you to only respond if you think that you have something of value to add. Otherwise just say the word “NULL`},
  { title: 'Football Commentator', prompt: `I want you to act as a football commentator. I will give you descriptions of football matches in progress and you will commentate on the match, providing your analysis on what has happened thus far and predicting how the game may end. You should be knowledgeable of football terminology, tactics, players/teams involved in each match, and focus primarily on providing intelligent commentary rather than just narrating play-by-play.`},
  { title: 'Therapist', prompt: `I want you to act like a therapist. When I have a problem, try to summarise it and ask questions to help me solve it. Feel free to provide proven frameworks to help me solve it.`},
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Settings({handlePrompt}: any) {

  const [selected, setSelected] = useState(publishingOptions[0].prompt)
  const [enabled, setEnabled] = useState(false);
  

  useEffect(() => {
    handlePrompt(selected)
  },[selected])




  // const changedPrompt = (e: any) => {
  //   setSelected(e)
    // handlePrompt(e.prompt)
  // }


  return (
    <div >

    <div className="items-center	">
      <label htmlFor="location" className="flex text-xs font-medium leading-6 text-gray-600">
          Prompt
          <div className="flex ">
            <button type="button" className=" group relative rounded-full text-black shadow-sm">
              <span className="absolute bottom-1 left-3 scale-0 transition-all rounded p-2 text-xs text-white group-hover:scale-100">
                <a type="button" className="rounded bg-white py-1 px-2 text-xs font-medium text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 min-w-max	">
                    This is some information about this functioality
                </a>
              </span>
              <InformationCircleIcon className="text-gray-600 h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </label>
        <select
        defaultValue={selected} 
          onChange={(e) => setSelected(e.target.value)}
          id="location"
          name="location"
          className=" inline-flex w-min block rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"

        >
          {publishingOptions.map((option) => (
            <option key={option.title} value={option.prompt}> {option.title}</option>
            
            ))}
            
        </select>


      <div className="justify-end">
      {/* Attaching a file */}
      {/* <div className="inline-flex justify-end mx-10  ">
              <button
                type="button"
                className="group relative mt-2  inline-flex items-center rounded-full px-3 py-2 text-left text-gray-400"
              >

              <span className="absolute bottom-5 left-1 scale-0 transition-all rounded p-2 text-xs text-white group-hover:scale-100">
                <a type="button" className="rounded bg-white py-1 px-2 text-xs font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 min-w-max	">
                    This is some information about this functioality
                </a>
              </span>

                <PaperClipIcon className="-ml-1 mr-2 h-5 w-5 group-hover:text-gray-500" aria-hidden="true" />
                <span className="text-sm italic text-gray-500 group-hover:text-gray-600">Attach a file</span>
              </button>
        </div> */}




          {/* Enabling voice */}
          {/* <Switch
          checked={enabled}
          onChange={setEnabled}
          className={classNames(
            enabled ? 'bg-indigo-600' : 'bg-gray-200',
            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
          )}
          >
            <span className="sr-only">Use setting</span>
            <span
              className={classNames(
                enabled ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
              )}
            >
              <span
                className={classNames(
                  enabled ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in',
                  'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                )}
                aria-hidden="true"
              >
                <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                  <path
                    d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span
                className={classNames(
                  enabled ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out',
                  'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                )}
                aria-hidden="true"
              >
                <svg className="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
                  <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                </svg>
              </span>
            </span>
          </Switch> */}

    </div>


      </div>


  
      <div className="mt-2">

        <textarea
          rows={4}
          name="comment"
          id="comment"
          className="block w-full rounded-md border-0 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
          defaultValue={selected}
          key={selected}
          onChange={(e) => handlePrompt(e.target.value)}

        />

        
      
      </div>
    </div>
  )
}

