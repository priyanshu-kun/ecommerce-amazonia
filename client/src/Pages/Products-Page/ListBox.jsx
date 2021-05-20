import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import "./product-page.css"
// import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const num = [
  { num: '1'},
  { num: '2' },
  { num: '3' },
  { num: '4'},
  { num: '5' },
  { num: '6'},
  { num: '7'},
  { num: '8'},
  { num: '9'},
  { num: '10'},
  { num: '11'},
  { num: '12'},
  { num: '13'},
  { num: '14'},
  { num: '15'},
  { num: '16'},
  { num: '17'},
  { num: '18'},
  { num: '19'},
  { num: '20'},
]

export default function ListBox() {
  const [selected, setSelected] = useState(num[0])

  return (
    <div className="">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="
              relative w-full py-2 px-10 
              text-left border rounded-lg 
               cursor-default focus:outline-none 
              focus-visible:ring-2 focus-visible:ring-opacity-75 
              focus-visible:ring-white 
              focus-visible:ring-offset-orange-300
               focus-visible:ring-offset-2 
              focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate text-2xl">{selected.num}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              {/* <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              /> */}
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="
            absolute w-full py-1 bg-white mt-1 overflow-auto 
            text-base rounded-md 
            shadow-lg max-h-60 ring-1 ring-black 
            ring-opacity-5 focus:outline-none 
            sm:text-sm list-box">
              {num.map((n, nIdx) => (
                <Listbox.Option
                  key={nIdx}
                  className={({ active }) =>
                    ` text-center ${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2`
                  }
                  value={num}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? 'font-medium' : 'font-normal'
                        } block truncate`}
                      >
                        {n.num}
                      </span>
                      {selected && (
                        <span
                          className={`${
                            active ? 'text-amber-600' : 'text-amber-600'
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                        </span>
                      ) }
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
