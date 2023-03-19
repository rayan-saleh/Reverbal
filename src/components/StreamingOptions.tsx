
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon, ArrowUpTrayIcon } from '@heroicons/react/20/solid'
import { useEffect } from 'react'

const settings = [
  { name: 'Time-based', description: 'This project would be available to anyone' },
  { name: 'Click-based', description: 'Only members of this project would be able to access' },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}




export default function StreamingOptions({ streamingMethod, handleTime, handleClick }: any) {
  
  const [selected, setSelected] = useState(settings[0]);


  useEffect(() => {
    streamingMethod(selected)
  },[selected])

  return (
    <div className="mt-10">
      <label className="text-base font-semibold text-gray-900">Streaming option</label>
      <p className="text-sm text-gray-500">What method would you like to use to send data to the chatbot?</p>
      {/* <fieldset className="mt-4"> */}
        <legend className="sr-only">Notification method</legend>
        <RadioGroup value={selected} onChange={setSelected}>
            <RadioGroup.Label className="sr-only"> Privacy setting </RadioGroup.Label>
            <div className="-space-y-px rounded-md bg-white">
              {settings.map((setting, settingIdx) => (
                <RadioGroup.Option
                  key={setting.name}
                  value={setting}
                  className={({ checked }) =>
                    classNames(
                      settingIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                      settingIdx === settings.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                      checked ? 'z-10 border-indigo-200 bg-indigo-50' : 'border-gray-200',
                      'relative flex cursor-pointer border p-4 focus:outline-none'
                    )
                  }
                >
                  {({ active, checked }) => (
                    <>
                    {/* add another coloum on the right hand side with buttons in them */}
                   

                      <span
                        className={classNames(
                          checked ? 'bg-indigo-600 border-transparent' : 'bg-white border-gray-300',
                          active ? 'ring-2 ring-offset-2 ring-indigo-600' : '',
                          'mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-full border flex items-center justify-center'
                        )}
                        aria-hidden="true"
                      >
                        <span className="rounded-full bg-white w-1.5 h-1.5" />
                      </span>
                      <span className="ml-3 flex-inline">
                        <RadioGroup.Label
                          as="span"
                          className={classNames(checked ? 'text-indigo-900' : 'text-gray-900', 'block text-sm font-medium')}
                        >
                          {setting.name}
                        </RadioGroup.Label>
                        <RadioGroup.Description
                          as="span"
                          className={classNames(checked ? 'text-indigo-700' : 'text-gray-500', 'block text-sm')}
                        >
                          {setting.description}
                        </RadioGroup.Description>

                        
                      </span>

                      {/* for one label, i want a button, for the other i want a text field input */}
                        
                      <div className="flex-grow flex-shrink"></div>  
                      < RadioGroup.Label as="span" className="ml-3 ">
                        {/* <span className="text-sm font-medium text-gray-900">{setting.name}</span>
                        <span className="text-sm text-gray-500">{setting.description}</span> */}
                        {setting.name === "Click-based" ? (
                          <div className="relative mt-2 w-4/6 rounded-md shadow-sm items-center ">
                          <button
                            type="button"
                            className="flex w-fit	 gap-x-1.5 rounded-md bg-indigo-600 py-1.5 px-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={() => handleClick()}
                          >
                            <ArrowUpTrayIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                            Send
                          </button>
                        </div>
                        ) : (
                          <div className="relative mt-2 w-4/6 rounded-md shadow-sm items-center float-right ">
                            <input
                              type="number"
                              name="price"
                              id="price"
                              className="block w-full rounded-md border-0 py-1.5  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              placeholder="5"
                              aria-describedby="price-currency"
                              value="5"
                              onChange={(e) => handleTime(e.target.value)}
                            />
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                              <span className="text-gray-500 sm:text-sm" id="price-currency">
                                Seconds
                              </span>
                            </div>
                          </div>
                        )}
                        {/* <button
                          type="button"
                          className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 py-1.5 px-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          <CheckCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                          Button text
                        </button> */}
                      </RadioGroup.Label>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
    </div>

  )

}


