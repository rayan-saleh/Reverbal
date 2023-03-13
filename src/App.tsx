import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Input from './components/Input'
import Output from './components/Output'

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-8 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 items-center lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          {/* div to align the logo and name */}
          <div className="flex justify-center lg:justify-start">
          <img
            className="inline-flex h-14 w-14"
            src="./src/assets/ConversationGPT_logo.png"
            alt="Your Company"
          />

            <h1 className="inline-flex items-center	 text-3xl font-bold tracking-tight  text-gray-900 sm:text-3xl">
            ConversationGPT
          </h1>
          </div>
          <div className="mt-24 mb-2 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                What's new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                <span>Just shipped v1.0</span>
                <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </a>
          </div>
          <h1 className="mb-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Real-time feedback on your conversations
          </h1>
 
   
          <Input />
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div> */}
        </div>
        <div className="	mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="overflow-y-auto h-full -m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Output />
              {/* <img
                src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                alt="App screenshot"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}










// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
// import Navigation from './components/Navigation'
// import Output from './components/Output'
// import Input from './components/Input'


// function App() {
//   // const [count, setCount] = useState(0)
  

//   return (
//     <>
    
    
    
//     <Navigation />
//     {/* <div className="App"> */}
//     <div className="mx-80">
//     <Output />
 
   
//     <Input />
//     </div>
//       {/* <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
      
//     {/* </div> */}
//     </>
//   )
// }

// export default App
